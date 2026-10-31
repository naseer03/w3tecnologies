import type { Metadata } from "next";
import type { ReactNode } from "react";
import BootstrapClient from "@/components/layout/BootstrapClient";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/dashboard.css";
import "@/styles/create-blog.css";

// A separate root layout: the dashboard never loaded the public site's stylesheets.
export const metadata: Metadata = {
  title: "Admin Dashboard",
  icons: { icon: "/assets/favicon.png" },
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
