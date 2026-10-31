import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import SiteFooter from "@/components/layout/SiteFooter";
import JsonLd from "@/components/JsonLd";
import SiteHeader from "@/components/layout/SiteHeader";
import { getBlogBySlug } from "@/lib/blogs";
import { pageMetadata } from "@/lib/seo";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/structured-data";
import "@/styles/blog-template.css";

export const dynamic = "force-dynamic";

// generateMetadata and the page both need the post; fetch it once per request.
const getBlog = cache(getBlogBySlug);

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlog((await params).slug);
  if (!blog) return { title: "Blogs" };
  return pageMetadata({
    path: `/blogs/${blog.seo_url}`,
    title: blog.meta_title,
    description: blog.meta_description,
    image: blog.header_image ? `/blog-images/${blog.header_image}` : undefined,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const blog = await getBlog((await params).slug);
  if (!blog?.blog_title || !blog.blog_content) notFound();
  const path = `/blogs/${blog.seo_url}`;

  return (
    <>
      <JsonLd
        data={blogPostingSchema({
          path,
          title: blog.blog_title,
          description: blog.meta_description,
          image: blog.header_image ? `/blog-images/${blog.header_image}` : undefined,
          modified: blog.created_data,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Blogs", path: "/blogs" },
          { name: blog.blog_title, path },
        ])}
      />
      <main>
        <div className="blog-head">
          <SiteHeader />
        </div>
        <section>
          <div className="blog-post">
            {blog.header_image && (
              <img
                className="img-fluid"
                src={`/blog-images/${blog.header_image}`}
                alt="Header Image"
              />
            )}
            <div className="container">
              <div className="blog-data">
                <h1>{blog.blog_title}</h1>
                {/* Written by admins in the TinyMCE editor. */}
                <div className="content" dangerouslySetInnerHTML={{ __html: blog.blog_content }} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
