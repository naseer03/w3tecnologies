import LeadTable from "@/components/admin/LeadTable";
import { formatPrefTime, leadTables } from "@/lib/leads";

export default async function CourseEnquiries() {
  const rows = await leadTables.course();
  return (
    <LeadTable
      title="Course Enquiry Data"
      columns={["Name", "Email", "Contact No", "Whatsapp NO", "Course", "Pref Time to Call"]}
      rows={rows.map((r) => [r.course_enq_name, r.email, r.contact_no, r.whatsapp_no, r.course, formatPrefTime(r.pref_time)])}
    />
  );
}
