import type { ReactNode } from "react";
import Sidebar from "@/components/admin/Sidebar";
import { requireSession } from "@/lib/auth/session";

// Live data behind a login: never prerender.
export const dynamic = "force-dynamic";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  await requireSession();
  return (
    <main>
      <div className="whole-content-area">
        <Sidebar />
        <div className="right-side-content-area">
          <div className="right-side-main-content-area">{children}</div>
        </div>
      </div>
    </main>
  );
}
