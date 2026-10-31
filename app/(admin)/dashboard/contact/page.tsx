import LeadTable from "@/components/admin/LeadTable";
import { formatPrefTime, leadTables } from "@/lib/leads";

export default async function ContactEnquiries() {
  const rows = await leadTables.contact();
  return (
    <LeadTable
      title="Contacts  Data"
      columns={["Name", "Email", "Contact No", "Whatsapp NO", "Message", "Pref Time to Call"]}
      rows={rows.map((r) => [
        r.enq_name,
        r.enq_email,
        r.enq_contact_no,
        r.enq_whatsapp_no,
        r.message_note || "---",
        formatPrefTime(r.pref_time),
      ])}
    />
  );
}
