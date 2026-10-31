"use server";

import { redirect } from "next/navigation";
import { requireSession } from "@/lib/auth/session";
import { deleteBlogImage, getBlogById, saveBlogImage, slugify, uniqueSlug } from "@/lib/blogs";
import { db } from "@/lib/db";

function readBlogForm(formData: FormData) {
  const text = (name: string) => String(formData.get(name) ?? "");
  return {
    heading: text("heading"),
    content: text("mytextarea"),
    metaTitle: text("meta-title"),
    metaDescription: text("meta-description"),
    tagName: text("tag-name"),
  };
}

export async function createBlog(formData: FormData) {
  await requireSession();
  let ok = false;
  try {
    const blog = readBlogForm(formData);
    const headerImage = await saveBlogImage(formData.get("header-image"));
    const featureImage = await saveBlogImage(formData.get("feature-image"));
    const seoUrl = await uniqueSlug(slugify(blog.metaTitle));
    await db.execute(
      `INSERT INTO blog_data (blog_title, blog_content, header_image, meta_title, tagname, meta_description, feature_image, seo_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [blog.heading, blog.content, headerImage, blog.metaTitle, blog.tagName, blog.metaDescription, featureImage, seoUrl],
    );
    ok = true;
  } catch (error) {
    console.error("Blog create failed", error);
  }
  redirect(`/dashboard/blogs/new?blogcreate=${ok ? "success" : "failed"}`);
}

export async function updateBlog(formData: FormData) {
  await requireSession();
  let ok = false;
  try {
    const blogId = Number(formData.get("blog_id"));
    const blog = readBlogForm(formData);
    // A new upload replaces the image; leaving the input empty keeps the current one.
    const headerImage = await saveBlogImage(formData.get("header-image"));
    const featureImage = await saveBlogImage(formData.get("feature-image"));
    const seoUrl = await uniqueSlug(slugify(blog.metaTitle), blogId);

    const sets = ["blog_title = ?", "blog_content = ?", "meta_title = ?", "tagname = ?", "meta_description = ?", "seo_url = ?"];
    const params: (string | number)[] = [blog.heading, blog.content, blog.metaTitle, blog.tagName, blog.metaDescription, seoUrl];
    if (headerImage) {
      sets.push("header_image = ?");
      params.push(headerImage);
    }
    if (featureImage) {
      sets.push("feature_image = ?");
      params.push(featureImage);
    }
    await db.execute(`UPDATE blog_data SET ${sets.join(", ")} WHERE blog_id = ?`, [...params, blogId]);
    ok = true;
  } catch (error) {
    console.error("Blog update failed", error);
  }
  redirect(`/dashboard/blogs?updateblog=${ok ? "success" : "failed"}`);
}

export async function deleteBlog(formData: FormData) {
  await requireSession();
  let ok = false;
  try {
    const blog = await getBlogById(Number(formData.get("blog_id")));
    if (blog) {
      await db.execute("DELETE FROM blog_data WHERE blog_id = ?", [blog.blog_id]);
      await Promise.all([deleteBlogImage(blog.header_image), deleteBlogImage(blog.feature_image)]);
      ok = true;
    }
  } catch (error) {
    console.error("Blog delete failed", error);
  }
  redirect(`/dashboard/blogs?deleteblog=${ok ? "success" : "failed"}`);
}
