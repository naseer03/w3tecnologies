import DataTable, { type Row } from "./DataTable";

/** A dashboard data section listing one form's submissions, numbered from 1 in database order. */
export default function LeadTable({ title, columns, rows }: { title: string; columns: string[]; rows: string[][] }) {
  const tableRows: Row[] = rows.map((cells, i) => {
    const text = [String(i + 1), ...cells.map((c) => c ?? "")];
    return { key: i, cells: text, text };
  });

  return (
    <section className="data-section">
      <h2>{title}</h2>
      <div className="table-responsive">
        <DataTable
          columns={["Sl.No", ...columns].map((label) => ({ label }))}
          rows={tableRows}
          emptyText="No Records Found"
        />
      </div>
    </section>
  );
}
