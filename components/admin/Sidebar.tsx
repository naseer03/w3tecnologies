"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@/app/actions/auth";

const tabs = [
  { href: "/dashboard/course", label: "Course" },
  { href: "/dashboard/internship", label: "Internship" },
  { href: "/dashboard/service", label: "Service" },
  { href: "/dashboard/contact", label: "Contacts" },
  { href: "/dashboard/blogs/new", label: "Create Blog" },
  { href: "/dashboard/blogs", label: "Blogs List" },
  { href: "/dashboard/js-interview", label: "Js Interview Q&A Download" },
];

export default function Sidebar() {
  const pathname = usePathname();
  // "Blogs List" also owns the edit pages; "Create Blog" only its own page.
  const active = (href: string) =>
    href === "/dashboard/blogs" ? pathname === href || pathname.endsWith("/edit") : pathname === href;

  return (
    <div className="left-side-tabs">
      <div className="tabs-main">
        <div className="logo">
          <img src="/assets/nav/w3tech-logo.svg" alt="logo" />
        </div>
        <div className="main-tabs ">
          <ul>
            {tabs.map((tab) => (
              <li key={tab.href} className={active(tab.href) ? "left-side-li-active" : ""}>
                <Link href={tab.href}>{tab.label}</Link>
              </li>
            ))}
          </ul>
          <form action={logout}>
            <button type="submit" className="logout w-100 bg-transparent text-start" style={{ padding: "5px 60px" }}>
              Log Out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
