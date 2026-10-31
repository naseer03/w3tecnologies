import type { NextConfig } from "next";

// Old PHP URLs -> new routes. Permanent so search engines move their index over.
const phpPages: [string, string][] = [
  ["/index.php", "/"],
  ["/about.php", "/about"],
  ["/careers.php", "/careers"],
  ["/contact.php", "/contact"],
  ["/privacy-policy.php", "/privacy-policy"],
  ["/terms-conditions.php", "/terms-conditions"],
  ["/js-interview-Q&A.php", "/js-interview-qa"],
  ["/blogs.php", "/blogs"],
  ["/blog-template.php", "/blogs"],
  ["/adminlogin.php", "/adminlogin"],
  ["/adminregister.php", "/adminregister"],
  ["/dashboard.php", "/dashboard"],
  ["/create-blog.php", "/dashboard/blogs/new"],
];

const nextConfig: NextConfig = {
  experimental: {
    // Blog header/feature images are uploaded through a Server Action.
    serverActions: { bodySizeLimit: "10mb" },
  },
  async redirects() {
    return [
      ...phpPages.map(([source, destination]) => ({ source, destination, permanent: true })),
      { source: "/courses/:slug([^/]+)\\.php", destination: "/courses/:slug", permanent: true },
      { source: "/services/:slug([^/]+)\\.php", destination: "/services/:slug", permanent: true },
      { source: "/blogs/:slug([^/]+)\\.php", destination: "/blogs/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
