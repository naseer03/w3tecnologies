"use server";

import path from "node:path";
import { db } from "@/lib/db";
import { escapeHtml, mailAdmin, sendMail } from "@/lib/mail";
import { getCourse } from "@/lib/courses";
import {
  PREF_TIME,
  validateCourse,
  validateEnquiry,
  validateInternship,
  validateJsInterview,
  validateService,
  type Errors,
  type LeadResult,
  type Values,
} from "@/lib/validation";

const PRIVATE_DIR = path.join(process.cwd(), "private");
const CONTACT_FOOTER = `<p>If you have any immediate questions, please feel free to contact us at <a href="mailto:info@w3tec.com">info@w3tec.com</a> or call us at <a href="tel:+917416939333">+91 74169 39333</a>.</p>`;

const FAILED_SUBMIT: LeadResult = { status: "error", message: "Failed to submit the form. Please try again." };
const FAILED_MAIL: LeadResult = { status: "error", message: "Failed to send email. Please try again later." };
const SUCCESS: LeadResult = { status: "success", message: "Your response has been recorded" };

function clean<F extends string>(input: Values<F>): Values<F> {
  const out = {} as Values<F>;
  for (const key of Object.keys(input) as F[]) out[key] = String(input[key] ?? "").trim();
  return out;
}

function invalid<F extends string>(errors: Errors<F>): LeadResult | null {
  const first = Object.values(errors)[0];
  return first ? { status: "error", message: String(first) } : null;
}

// The `time` column is NOT NULL; the PHP site stored 00:00:00 when no time was picked.
const prefTime = (value: string) => (PREF_TIME.test(value) ? value : "00:00:00");

function htmlEmail(title: string, name: string, paragraphs: string) {
  return `<html><head><title>${title}</title></head><body>
<p>Hi ${escapeHtml(name)},</p>
${paragraphs}
<p>Best regards,<br>W3 Technologies</p>
</body></html>`;
}

async function insert(sql: string, params: string[]) {
  try {
    await db.execute(sql, params);
    return true;
  } catch (error) {
    console.error("Lead insert failed", error);
    return false;
  }
}

/** Mails the visitor, then notifies the office. Only the visitor's mail decides success, as on the PHP site. */
async function deliver(
  visitor: Parameters<typeof sendMail>[0],
  notification?: { subject: string; text: string },
): Promise<LeadResult> {
  try {
    await sendMail(visitor);
  } catch (error) {
    console.error("Visitor email failed", error);
    return FAILED_MAIL;
  }
  if (notification) {
    await sendMail({ to: mailAdmin, ...notification }).catch((error) =>
      console.error("Admin notification failed", error),
    );
  }
  return SUCCESS;
}

export async function submitCourseEnquiry(
  courseSlug: string,
  input: Values<"name" | "email" | "contactNo" | "whatsappNo" | "prefTime">,
): Promise<LeadResult> {
  const v = clean(input);
  const course = getCourse(courseSlug);
  if (!course) return FAILED_SUBMIT;
  const error = invalid(validateCourse(v));
  if (error) return error;

  const saved = await insert(
    "INSERT INTO course_form (course_enq_name, email, contact_no, whatsapp_no, course, pref_time) VALUES (?, ?, ?, ?, ?, ?)",
    [v.name, v.email, v.contactNo, v.whatsappNo, course.name, prefTime(v.prefTime)],
  );
  if (!saved) return FAILED_SUBMIT;

  const subject = "W3 Technologies: Course Syllabus - Download Now";
  return deliver(
    {
      to: v.email,
      subject,
      html: htmlEmail(
        subject,
        v.name,
        `<p>Thank you for downloading the course syllabus from W3 Technologies, we hope you find it useful!</p>
<p>If you have any questions or need assistance feel free to reach out to us <a href="mailto:info@w3tec.com">info@w3tec.com</a> or call us <a href="tel:+917416939333">+91 74169 39333</a></p>`,
      ),
      attachments: course.pdf ? [{ filename: course.pdf, path: path.join(PRIVATE_DIR, "coursepdfs", course.pdf) }] : [],
    },
    { subject: "Downloaded Course Syllabus", text: `${v.name} downloaded the ${course.name} Course Syllabus` },
  );
}

export async function submitEnquiry(
  input: Values<"name" | "email" | "contactNo" | "whatsappNo" | "prefTime" | "message">,
): Promise<LeadResult> {
  const v = clean(input);
  const error = invalid(validateEnquiry(v));
  if (error) return error;

  const saved = await insert(
    "INSERT INTO enquiry_form (enq_name, enq_email, enq_contact_no, enq_whatsapp_no, pref_time, message_note) VALUES (?, ?, ?, ?, ?, ?)",
    [v.name, v.email, v.contactNo, v.whatsappNo, prefTime(v.prefTime), v.message],
  );
  if (!saved) return FAILED_SUBMIT;

  return deliver(
    {
      to: v.email,
      subject: "W3 Technologies: Your Message Has Been Received!",
      html: htmlEmail(
        "We've received your message - W3 Technologies",
        v.name,
        `<p>Thank you for reaching out to W3 Technologies! We appreciate your interest and we're here to assist you.</p>
<p>We will review your message and get back to you shortly.</p>
${CONTACT_FOOTER}`,
      ),
    },
    { subject: "New Inquiry Received", text: `${v.name} has contacted us.` },
  );
}

export async function submitServiceEnquiry(
  input: Values<"name" | "email" | "contactNo" | "whatsappNo" | "company" | "prefTime" | "message">,
): Promise<LeadResult> {
  const v = clean(input);
  const error = invalid(validateService(v));
  if (error) return error;

  const saved = await insert(
    "INSERT INTO service_form (ser_name, ser_email, ser_contact_no, ser_whatsapp_no, company_name, pref_time, message_note) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [v.name, v.email, v.contactNo, v.whatsappNo, v.company, prefTime(v.prefTime), v.message],
  );
  if (!saved) return FAILED_SUBMIT;

  return deliver(
    {
      to: v.email,
      subject: "W3 Technologies: Your Message Has Been Received!",
      html: htmlEmail(
        "We've received your message - W3 Technologies",
        v.name,
        `<p>Thank you for reaching out to W3 Technologies! We appreciate your interest and we're here to assist you.</p>
<p>We will review your message and get back to you shortly.</p>
${CONTACT_FOOTER}`,
      ),
    },
    { subject: "New Service Inquiry Received", text: `${v.name} has contacted us for service from ${v.company}` },
  );
}

export async function submitInternshipEnquiry(
  input: Values<"name" | "email" | "contactNo" | "whatsappNo" | "college" | "prefTime" | "message">,
): Promise<LeadResult> {
  const v = clean(input);
  const error = invalid(validateInternship(v));
  if (error) return error;

  const saved = await insert(
    "INSERT INTO internship_form (intern_name, intern_email, intern_contact_no, intern_whatsapp_no, college_name, pref_time, message_note) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [v.name, v.email, v.contactNo, v.whatsappNo, v.college, prefTime(v.prefTime), v.message],
  );
  if (!saved) return FAILED_SUBMIT;

  return deliver(
    {
      to: v.email,
      subject: "W3 Technologies: Your Message Has Been Received!",
      html: htmlEmail(
        "We've received your message - W3 Technologies",
        v.name,
        `<p>Thank you for reaching out to W3 Technologies! We appreciate your interest in our Internship Program and we're here to assist you.</p>
<p>We will review your message and get back to you shortly.</p>
${CONTACT_FOOTER}`,
      ),
    },
    { subject: "New Internship Inquiry Received", text: `${v.name} has contacted us for Internship from ${v.college}` },
  );
}

export async function submitJsInterviewDownload(
  input: Values<"name" | "email" | "contactNo" | "whatsappNo">,
): Promise<LeadResult> {
  const v = clean(input);
  const error = invalid(validateJsInterview(v));
  if (error) return error;

  const saved = await insert(
    "INSERT INTO js_interviewqa (js_name, email, contact_no, whatsapp_no) VALUES (?, ?, ?, ?)",
    [v.name, v.email, v.contactNo, v.whatsappNo],
  );
  if (!saved) return { status: "error", message: "Failed to submit the form." };

  const pdf = "javascript Intervew questions.pdf";
  return deliver({
    to: v.email,
    subject: "W3 Technologies: JavaScript Interview Questions and Answers - Download Now",
    html: htmlEmail(
      "W3 Technologies: JavaScript Interview Questions and Answers - Download Now",
      v.name,
      `<p>Thank you for downloading the <strong>JavaScript Interview Questions and Answers PDF</strong> from W3 Technologies.</p>
<p>We hope it helps you prepare for your interviews. If you have any questions, feel free to contact us at <a href="mailto:info@w3tec.com">info@w3tec.com</a>.</p>`,
    ),
    attachments: [{ filename: pdf, path: path.join(PRIVATE_DIR, "interview-questions", pdf) }],
  });
}
