import type { MetadataRoute } from "next";
import { courses } from "@/lib/courses";
import { listBlogs } from "@/lib/blogs";
import { SITE_URL } from "@/lib/site";

// Rebuilt hourly so new blog posts appear without a redeploy.
export const revalidate = 3600;

const pages: [path: string, priority: number][] = [
  ["/", 1],
  ["/about", 0.8],
  ["/contact", 0.8],
  ["/services/web-development-service", 0.8],
  ["/services/digital-marketing-agency-nellore", 0.8],
  ["/services/internships", 0.8],
  ["/blogs", 0.6],
  ["/careers", 0.5],
  ["/js-interview-qa", 0.5],
  ["/privacy-policy", 0.2],
  ["/terms-conditions", 0.2],
];

async function blogPaths() {
  try {
    const blogs = await listBlogs();
    return blogs.map((b) => ({ path: `/blogs/${b.seo_url}`, modified: b.created_data }));
  } catch (error) {
    // No database (e.g. during a local build): publish the sitemap without posts.
    console.warn("sitemap: blog posts skipped", error instanceof Error ? error.message : error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entry = (path: string, priority: number, lastModified?: string) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    priority,
    lastModified: lastModified ? new Date(lastModified.replace(" ", "T") + "+05:30") : undefined,
  });
  return [
    ...pages.map(([path, priority]) => entry(path, priority)),
    ...Object.keys(courses).map((slug) => entry(`/courses/${slug}`, 0.9)),
    ...(await blogPaths()).map((b) => entry(b.path, 0.6, b.modified)),
  ];
}
