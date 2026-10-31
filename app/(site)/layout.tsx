import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import BootstrapClient from "@/components/layout/BootstrapClient";
import { SITE_URL } from "@/lib/site";
import { organizationSchema } from "@/lib/structured-data";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "@/styles/common.css";
import "@/styles/nav.css";
import "@/styles/footer.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: "/assets/favicon.png" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- one font for every page, loaded here once */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        />
      </head>
      <body>
        <JsonLd data={organizationSchema()} />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
