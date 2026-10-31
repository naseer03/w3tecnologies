import "server-only";
import type { RowDataPacket } from "mysql2";
import { db } from "@/lib/db";

/** "15:05:00" -> "3:05 PM", matching PHP's date("g:i A"). */
export function formatPrefTime(time: string | null) {
  const [h, m] = (time ?? "00:00").split(":").map(Number);
  return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`;
}

// Table names are fixed strings below, never user input.
async function all<T>(table: string) {
  const [rows] = await db.query<(T & RowDataPacket)[]>(`SELECT * FROM \`${table}\``);
  return rows;
}

export const leadTables = {
  course: () =>
    all<{ course_enq_name: string; email: string; contact_no: string; whatsapp_no: string; course: string; pref_time: string }>(
      "course_form",
    ),
  internship: () =>
    all<{
      intern_name: string;
      intern_email: string;
      intern_contact_no: string;
      intern_whatsapp_no: string;
      college_name: string;
      message_note: string;
      pref_time: string;
    }>("internship_form"),
  service: () =>
    all<{
      ser_name: string;
      ser_email: string;
      company_name: string;
      ser_contact_no: string;
      ser_whatsapp_no: string;
      message_note: string;
      pref_time: string;
    }>("service_form"),
  contact: () =>
    all<{
      enq_name: string;
      enq_email: string;
      enq_contact_no: string;
      enq_whatsapp_no: string;
      message_note: string;
      pref_time: string;
    }>("enquiry_form"),
  jsInterview: () => all<{ js_name: string; email: string; contact_no: string; whatsapp_no: string }>("js_interviewqa"),
};
