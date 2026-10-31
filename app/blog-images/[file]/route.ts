import fs from "node:fs/promises";
import path from "node:path";
import { BLOG_IMAGE_DIR } from "@/lib/blogs";

// Uploads land on disk after the build, which public/ can't serve in production, so stream them here.

const TYPES: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".avif": "image/avif",
};

export async function GET(_request: Request, { params }: { params: Promise<{ file: string }> }) {
  const name = path.basename((await params).file);
  const type = TYPES[path.extname(name).toLowerCase()];
  if (!type) return new Response("Not found", { status: 404 });
  try {
    const body = await fs.readFile(path.join(BLOG_IMAGE_DIR, name));
    return new Response(body, {
      // File names are prefixed with their upload time, so a name never points at new content.
      headers: {
        "Content-Type": type,
        "Cache-Control": "public, max-age=31536000, immutable",
        // An uploaded SVG opened directly must not run script on this origin.
        "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; sandbox",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
