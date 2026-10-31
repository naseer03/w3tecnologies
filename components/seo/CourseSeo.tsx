import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { courses, type CourseSlug } from "@/lib/courses";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, courseSchema } from "@/lib/structured-data";

export function courseMetadata(slug: CourseSlug): Metadata {
  const { title, description } = courses[slug];
  return pageMetadata({ path: `/courses/${slug}`, title, description });
}

/** Course and breadcrumb structured data for a course page. */
export default function CourseSeo({ courseSlug }: { courseSlug: CourseSlug }) {
  const { label } = courses[courseSlug];
  return (
    <>
      <JsonLd data={courseSchema(courseSlug)} />
      <JsonLd data={breadcrumbSchema([{ name: label, path: `/courses/${courseSlug}` }])} />
    </>
  );
}
