import Link from "next/link";
import DataTable, { type Row } from "@/components/admin/DataTable";
import DeleteBlogButton from "@/components/admin/DeleteBlogButton";
import StatusModal from "@/components/StatusModal";
import { listBlogs } from "@/lib/blogs";

const messages: Record<string, string> = {
  "deleteblog=success": "Blog Deleted Succesfully",
  "deleteblog=failed": "Unable to delete the Blog!. Try again !",
  "updateblog=success": "Blog updated Succesfully",
  "updateblog=failed": "Unable to update the Blog!. Try again !",
};

export default async function BlogsListPage({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  const params = await searchParams;
  const status = Object.entries(params)
    .map(([key, value]) => messages[`${key}=${value}`])
    .find(Boolean);
  const blogs = await listBlogs();

  const rows: Row[] = blogs.map((blog, i) => ({
    key: blog.blog_id,
    text: [String(i + 1), blog.blog_title, blog.meta_title, "", "", ""],
    cells: [
      String(i + 1),
      blog.blog_title,
      blog.meta_title,
      <img key="img" className="blog-list-image" src={`/blog-images/${blog.feature_image}`} alt="Feature Image" />,
      <Link key="edit" className="action-btns" href={`/dashboard/blogs/${blog.blog_id}/edit`}>
        <img src="/assets/dashboard/edit.png" className="action-icon" alt="Edit" />
      </Link>,
      <DeleteBlogButton key="delete" blogId={blog.blog_id} title={blog.blog_title} />,
    ],
  }));

  return (
    <>
      <StatusModal message={status} />
      <section className="data-section">
        <h2> Blogs List </h2>
        <div className="table-responsive">
          <DataTable
            columns={[
              { label: "Sl.No" },
              { label: "Blog Title" },
              { label: "Meta Title" },
              { label: "Feature Image", sortable: false },
              { label: "Edit", sortable: false, cellClassName: "p-0" },
              { label: "Delete", sortable: false, cellClassName: "p-0" },
            ]}
            rows={rows}
          />
        </div>
      </section>
    </>
  );
}
