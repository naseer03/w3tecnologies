import type { Metadata } from "next";
import { SITE_NAME } from "./site";

/** Link preview shown on WhatsApp, Facebook, LinkedIn and X. Replace the file with any 1200×630 image. */
const DEFAULT_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME}: Software Training Institute in Nellore`,
};

type PageSeo = {
  /** Path of the page, e.g. "/courses/c". Becomes the canonical URL. */
  path: string;
  title: string;
  description: string;
  /** Overrides the default social image. */
  image?: string;
  type?: "website" | "article";
};

/**
 * Title, description, canonical URL and social-preview tags for a page.
 * Next replaces (doesn't merge) nested metadata such as openGraph, so every page builds the full set here.
 */
export function pageMetadata({ path, title, description, image, type = "website" }: PageSeo): Metadata {
  const images = [image ? { url: image } : DEFAULT_IMAGE];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: SITE_NAME, locale: "en_IN", type, images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}
