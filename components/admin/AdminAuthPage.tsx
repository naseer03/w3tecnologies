import type { ReactNode } from "react";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import StatusModal from "@/components/StatusModal";

/** Shared frame of the admin login and register pages. */
export default function AdminAuthPage({
  heading,
  status,
  children,
  footer,
}: {
  heading: string;
  status?: ReactNode;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <>
      <StatusModal message={status} />
      <main>
        <div className="admin-banner-sec">
          <SiteHeader />
          <div className="container">
            <div className="banner-head">
              <h1>
                W3 <span>Technologies</span>
              </h1>
            </div>
          </div>
        </div>
        <section>
          <div className="container">
            <div className="form-sec">
              <h1>{heading}</h1>
              <div className="card">{children}</div>
              <p>{footer}</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
