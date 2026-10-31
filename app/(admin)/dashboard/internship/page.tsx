import LeadTable from "@/components/admin/LeadTable";
import { formatPrefTime, leadTables } from "@/lib/leads";

export default async function InternshipEnquiries() {
  const rows = await leadTables.internship();
  return (
    <LeadTable
      title="Internship Enquiry Data"
      columns={["Name", "Email", "Contact No", "Whatsapp NO", "Institute Name", "Message", "Pref Time to Call"]}
      rows={rows.map((r) => [
        r.intern_name,
        r.intern_email,
        r.intern_contact_no,
        r.intern_whatsapp_no,
        r.college_name,
        r.message_note,
        formatPrefTime(r.pref_time),
      ])}
    />
  );
}
