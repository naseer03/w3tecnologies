"use client";

import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import { createBlog, updateBlog } from "@/app/actions/blogs";
import type { Blog } from "@/lib/blogs";

/** Create / edit blog form (was adminaccess/createblog.php and updateblog.php). */
export default function BlogForm({ blog }: { blog?: Blog }) {
  const [content, setContent] = useState(blog?.blog_content ?? "");
  const [pending, setPending] = useState(false);

  return (
    <section>
      <div className="container">
        <div className="d-flex justify-content-around mt-4 ">
          <h2 className="create-blog-head">{blog ? "Edit Blog" : "Create Blog"}</h2>
          <div>
            <a href="/blogs" className="view-blogs ">
              View Blogs
            </a>
          </div>
        </div>
        <form action={blog ? updateBlog : createBlog} onSubmit={() => setPending(true)}>
          {blog && <input type="hidden" name="blog_id" value={blog.blog_id} />}
          {/* TinyMCE content travels in a hidden field so the Server Action receives it with the form. */}
          <input type="hidden" name="mytextarea" value={content} />
          <div className="row">
            <div className="col-8">
              <div className="d-flex flex-column gap-2 mb-2">
                <label htmlFor="heading">Heading</label>
                <input type="text" id="heading" name="heading" className="input-text" defaultValue={blog?.blog_title} />
              </div>
              <div className="d-flex flex-column gap-2 mb-2">
                <label htmlFor="mytextarea">Description</label>
                <Editor
                  id="mytextarea"
                  tinymceScriptSrc="/tinymce/tinymce.min.js"
                  licenseKey="gpl"
                  value={content}
                  onEditorChange={setContent}
                />
              </div>
              <div className="d-flex flex-column gap-2 mb-2">
                <label htmlFor="header-image">Header Image</label>
                <input type="file" id="header-image" name="header-image" accept="image/*" />
                {blog?.header_image && (
                  <img src={`/blog-images/${blog.header_image}`} className="w-75" alt="Header Image" />
                )}
              </div>
            </div>
            <div className="col-4">
              <div className="d-flex flex-column gap-2 mb-2">
                <label htmlFor="meta-title">Meta Title</label>
                <input
                  type="text"
                  id="meta-title"
                  name="meta-title"
                  className="input-text"
                  defaultValue={blog?.meta_title}
                />
              </div>
              <div className="d-flex flex-column gap-2 mb-2">
                <label htmlFor="meta-description">Meta Description</label>
                <textarea
                  id="meta-description"
                  name="meta-description"
                  className="meta-text"
                  defaultValue={blog?.meta_description}
                />
              </div>
              <div className="d-flex flex-column gap-2 mb-2">
                <label htmlFor="tag-name">Tag Name</label>
                <input type="text" id="tag-name" name="tag-name" className="input-text" defaultValue={blog?.tagname} />
              </div>
              <div className="d-flex flex-column gap-2 mb-2">
                <label htmlFor="feature-image">Feature Image</label>
                <input type="file" id="feature-image" name="feature-image" accept="image/*" />
                {blog?.feature_image && (
                  <img src={`/blog-images/${blog.feature_image}`} className="w-75" alt="Feature Image" />
                )}
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <input type="submit" className="submit" value={blog ? "Update Blog" : "Submit"} disabled={pending} />
          </div>
        </form>
      </div>
    </section>
  );
}
