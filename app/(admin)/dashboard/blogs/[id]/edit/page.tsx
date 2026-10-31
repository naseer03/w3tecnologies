import { notFound } from "next/navigation";
import BlogForm from "@/components/admin/BlogForm";
import { getBlogById } from "@/lib/blogs";

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const blog = await getBlogById(Number((await params).id));
  if (!blog) notFound();
  // Plain object for the client component (mysql2 rows carry extra prototype data).
  return <BlogForm blog={{ ...blog }} />;
}
