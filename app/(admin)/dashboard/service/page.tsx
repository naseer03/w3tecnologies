import LeadTable from "@/components/admin/LeadTable";
import { formatPrefTime, leadTables } from "@/lib/leads";

export default async function ServiceEnquiries() {
  const rows = await leadTables.service();
  return (
    <LeadTable
      title="Service Enquiry Data"
      columns={["Name", "Email", "Company Name", "Contact No", "Whatsapp NO", "Message", "Pref Time to Call"]}
      rows={rows.map((r) => [
        r.ser_name,
        r.ser_email,
        r.company_name,
        r.ser_contact_no,
        r.ser_whatsapp_no,
        r.message_note,
        formatPrefTime(r.pref_time),
      ])}
    />
  );
}
