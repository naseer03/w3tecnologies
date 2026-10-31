"use client";

import { submitCourseEnquiry } from "@/app/actions/leads";
import { courses, type CourseSlug } from "@/lib/courses";
import { courseFields, validateCourse } from "@/lib/validation";
import { PrefTimeField, SubmitArea, TextField, WhatsappField } from "./fields";
import { useLeadForm } from "./useLeadForm";

/** Syllabus download form (was includes/course-form.php). */
export default function CourseForm({ courseSlug }: { courseSlug: CourseSlug }) {
  const course = courses[courseSlug];
  const form = useLeadForm({
    fields: courseFields,
    validate: validateCourse,
    submit: (values) => submitCourseEnquiry(courseSlug, values),
    networkErrorHtml:
      "<b>Failed to send!.</b><br>Please verify your mail and resubmit the form, or contact us directly for help.",
  });

  return (
    <form method="post" noValidate onSubmit={form.onSubmit}>
      <TextField form={form} field="name" placeholder="Enter your Name" />
      <TextField form={form} field="email" placeholder="Enter your  Email" />
      <TextField
        form={form}
        field="contactNo"
        type="tel"
        inputClassName="contact-no"
        placeholder="Enter your Contact Number"
      />
      <WhatsappField form={form} />
      <PrefTimeField form={form} />
      <div className="form-ele mb-3">
        <label htmlFor={form.id("course")}>
          <b>Course</b>
        </label>
        <input type="text" readOnly className="form-control course" id={form.id("course")} value={course.name} />
      </div>
      <SubmitArea
        form={form}
        messagePrefix="courseform"
        success={
          <>
            <b>Download ready!, We&apos;ve emailed the course syllabus to you.</b>
            <br />
            Please check your mail inbox or spam folder
          </>
        }
      />
    </form>
  );
}
