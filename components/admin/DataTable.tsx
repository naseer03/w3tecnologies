"use client";

import { useMemo, useState, type ReactNode } from "react";

export type Column = { label: string; sortable?: boolean; cellClassName?: string };

export type Row = {
  key: string | number;
  cells: ReactNode[];
  /** Plain-text version of each cell, used for searching and sorting. */
  text: string[];
};

const PAGE_SIZES = [10, 25, 50, 100];

function compare(a: string, b: string) {
  const x = Number(a);
  const y = Number(b);
  if (a !== "" && b !== "" && !Number.isNaN(x) && !Number.isNaN(y)) return x - y;
  return a.localeCompare(b, undefined, { sensitivity: "base" });
}

/** Search, sort and paging for the dashboard tables (replaces the DataTables jQuery plugin). */
export default function DataTable({
  columns,
  rows,
  emptyText = "No data available in table",
}: {
  columns: Column[];
  rows: Row[];
  emptyText?: string;
}) {
  const [query, setQuery] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState<{ column: number; dir: 1 | -1 }>({ column: 0, dir: 1 });

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q ? rows.filter((r) => r.text.some((t) => t.toLowerCase().includes(q))) : rows;
    return [...filtered].sort((a, b) => sort.dir * compare(a.text[sort.column], b.text[sort.column]));
  }, [rows, query, sort]);

  const pages = Math.max(1, Math.ceil(visible.length / pageSize));
  const current = Math.min(page, pages - 1);
  const start = current * pageSize;
  const shown = visible.slice(start, start + pageSize);

  const toggleSort = (column: number) =>
    setSort((s) => ({ column, dir: s.column === column ? (s.dir === 1 ? -1 : 1) : 1 }));

  return (
    <div id="table_wrapper">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
        <label className="d-flex align-items-center gap-2">
          <select
            className="form-select form-select-sm w-auto"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(0);
            }}
          >
            {PAGE_SIZES.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          entries per page
        </label>
        <label className="d-flex align-items-center gap-2">
          Search:
          <input
            type="search"
            className="form-control form-control-sm"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(0);
            }}
          />
        </label>
      </div>

      <table id="table" className="table table-striped">
        <thead>
          <tr>
            {columns.map((col, i) => {
              const sortable = col.sortable !== false;
              return (
                <th
                  key={col.label}
                  onClick={sortable ? () => toggleSort(i) : undefined}
                  style={sortable ? { cursor: "pointer" } : undefined}
                  aria-sort={sort.column === i ? (sort.dir === 1 ? "ascending" : "descending") : undefined}
                >
                  {col.label}
                  {sortable && sort.column === i && (sort.dir === 1 ? " ▲" : " ▼")}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {shown.length === 0 ? (
            <tr>
              <td colSpan={columns.length}>{rows.length === 0 ? emptyText : "No matching records found"}</td>
            </tr>
          ) : (
            shown.map((row) => (
              <tr key={row.key}>
                {row.cells.map((cell, i) => (
                  <td key={i} className={columns[i].cellClassName}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
        <div>
          {visible.length === 0
            ? "Showing 0 to 0 of 0 entries"
            : `Showing ${start + 1} to ${start + shown.length} of ${visible.length} entries`}
        </div>
        <ul className="pagination m-0">
          <li className={`page-item ${current === 0 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setPage(current - 1)} aria-label="Previous">
              ‹
            </button>
          </li>
          {Array.from({ length: pages }, (_, i) => (
            <li key={i} className={`page-item ${i === current ? "active" : ""}`}>
              <button className="page-link" onClick={() => setPage(i)}>
                {i + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${current === pages - 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setPage(current + 1)} aria-label="Next">
              ›
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
