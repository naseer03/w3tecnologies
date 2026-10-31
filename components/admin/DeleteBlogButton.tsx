"use client";

import { deleteBlog } from "@/app/actions/blogs";

/** Deletes via POST with a confirmation (the PHP site deleted on a plain GET link). */
export default function DeleteBlogButton({ blogId, title }: { blogId: number; title: string }) {
  return (
    <form
      action={deleteBlog}
      onSubmit={(e) => {
        if (!window.confirm(`Delete "${title}"? This cannot be undone.`)) e.preventDefault();
      }}
    >
      <input type="hidden" name="blog_id" value={blogId} />
      <button type="submit" className="action-btns border-0 bg-transparent">
        <img src="/assets/dashboard/delete.png" className="action-icon" alt="Delete" />
      </button>
    </form>
  );
}
