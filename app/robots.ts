import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Every crawler, search and AI alike, may read the public site; the admin area stays out.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/dashboard", "/adminlogin", "/adminregister"] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
