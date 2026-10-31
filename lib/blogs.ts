import "server-only";
import fs from "node:fs/promises";
import path from "node:path";
import type { RowDataPacket } from "mysql2";
import { db } from "@/lib/db";

/** Uploaded blog images. Served by app/blog-images/[file]/route.ts at /blog-images/<file>. */
export const BLOG_IMAGE_DIR = path.join(process.cwd(), "uploads", "blog-images");

export type Blog = {
  blog_id: number;
  blog_title: string;
  blog_content: string;
  header_image: string;
  meta_title: string;
  meta_description: string;
  tagname: string;
  feature_image: string;
  seo_url: string;
  /** "YYYY-MM-DD HH:MM:SS" (IST). The column updates on every edit, so it's the last-modified time. */
  created_data: string;
};

export async function listBlogs() {
  const [rows] = await db.query<(Blog & RowDataPacket)[]>("SELECT * FROM blog_data");
  return rows;
}

export async function getBlogBySlug(slug: string) {
  const [rows] = await db.execute<(Blog & RowDataPacket)[]>("SELECT * FROM blog_data WHERE seo_url = ?", [slug]);
  return rows[0];
}

export async function getBlogById(id: number) {
  const [rows] = await db.execute<(Blog & RowDataPacket)[]>("SELECT * FROM blog_data WHERE blog_id = ?", [id]);
  return rows[0];
}

/** Same rule as the PHP site: the meta title, non-alphanumerics collapsed to "-", lower-cased. */
export function slugify(text: string) {
  return text
    .replace(/[^A-Za-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

/** Appends -1, -2, … until no other blog uses the slug. */
export async function uniqueSlug(base: string, exceptBlogId?: number) {
  for (let n = 0; ; n++) {
    const candidate = n === 0 ? base : `${base}-${n}`;
    const [rows] = await db.execute<RowDataPacket[]>(
      "SELECT COUNT(*) AS count FROM blog_data WHERE seo_url = ? AND blog_id != ?",
      [candidate, exceptBlogId ?? 0],
    );
    if (Number(rows[0].count) === 0) return candidate;
  }
}

/** Saves an uploaded image as "<unix time>-<original name>" and returns the stored name ("" if none). */
export async function saveBlogImage(file: FormDataEntryValue | null) {
  if (!(file instanceof File) || file.size === 0) return "";
  if (!file.type.startsWith("image/")) throw new Error(`Not an image: ${file.name}`);
  const original = path.basename(file.name).replace(/^\.+/, "");
  const name = `${Math.floor(Date.now() / 1000)}-${original}`;
  await fs.mkdir(BLOG_IMAGE_DIR, { recursive: true });
  await fs.writeFile(path.join(BLOG_IMAGE_DIR, name), Buffer.from(await file.arrayBuffer()));
  return name;
}

export async function deleteBlogImage(name: string) {
  if (!name) return;
  await fs.rm(path.join(BLOG_IMAGE_DIR, path.basename(name)), { force: true });
}

/** Card preview text: first 160 characters of the content with tags removed. */
export function excerpt(html: string) {
  const text = html.slice(0, 160).replace(/<[^>]*>?/g, "");
  return html.length > 160 ? `${text}...` : text;
}
