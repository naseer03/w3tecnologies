import LeadTable from "@/components/admin/LeadTable";
import { leadTables } from "@/lib/leads";

export default async function JsInterviewDownloads() {
  const rows = await leadTables.jsInterview();
  return (
    <LeadTable
      title="Js Interview Downloads"
      columns={["Name", "Email", "Contact No", "Whatsapp NO"]}
      rows={rows.map((r) => [r.js_name, r.email, r.contact_no, r.whatsapp_no])}
    />
  );
}
