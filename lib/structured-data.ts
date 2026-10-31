import { courses, type CourseSlug } from "./courses";
import { address, contact, SITE_NAME, SITE_URL, socialLinks } from "./site";

// schema.org data read by Google (rich results, local pack) and AI assistants.

const ORG_ID = `${SITE_URL}/#organization`;
const url = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": ORG_ID,
        name: SITE_NAME,
        alternateName: "W3 Tecnologies",
        url: SITE_URL,
        logo: `${SITE_URL}/assets/nav/w3tech-logo.svg`,
        image: `${SITE_URL}/assets/home/banner/class.webp`,
        description:
          "Software training institute in Nellore offering programming, full stack development, design and digital marketing courses, internships and web development services.",
        telephone: contact.phoneSchema,
        email: contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: address.street,
          addressLocality: address.locality,
          addressRegion: address.region,
          postalCode: address.postalCode,
          addressCountry: address.countryCode,
        },
        areaServed: { "@type": "City", name: "Nellore" },
        sameAs: socialLinks.map((s) => s.href),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": ORG_ID },
        inLanguage: "en-IN",
      },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: url(item.path),
    })),
  };
}

export function courseSchema(slug: CourseSlug) {
  const course = courses[slug];
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.label,
    description: course.description,
    url: url(`/courses/${slug}`),
    inLanguage: "en",
    provider: { "@type": "EducationalOrganization", "@id": ORG_ID, name: SITE_NAME, sameAs: SITE_URL },
    // The course pages advertise both online and classroom batches.
    hasCourseInstance: [
      { "@type": "CourseInstance", courseMode: "Online" },
      {
        "@type": "CourseInstance",
        courseMode: "Onsite",
        location: { "@type": "Place", name: SITE_NAME, address: `${address.locality}, ${address.region}` },
      },
    ],
  };
}

export function serviceSchema(path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: url(path),
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "City", name: "Nellore" },
  };
}

export function blogPostingSchema(post: {
  path: string;
  title: string;
  description: string;
  image?: string;
  modified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: url(post.path),
    mainEntityOfPage: url(post.path),
    image: post.image ? url(post.image) : undefined,
    dateModified: post.modified ? new Date(post.modified.replace(" ", "T") + "+05:30").toISOString() : undefined,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}
