import BlogForm from "@/components/admin/BlogForm";
import StatusModal from "@/components/StatusModal";

const messages: Record<string, string> = {
  success: "Blog created Successfully!. you can view the blogs by clicking on View Blogs",
  failed: "Failed to create Blog!. Try again !",
};

export default async function CreateBlogPage({ searchParams }: { searchParams: Promise<{ blogcreate?: string }> }) {
  const { blogcreate } = await searchParams;
  return (
    <>
      <StatusModal message={blogcreate ? messages[blogcreate] : undefined} />
      <BlogForm />
    </>
  );
}
