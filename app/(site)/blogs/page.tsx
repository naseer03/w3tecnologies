import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { excerpt, listBlogs } from "@/lib/blogs";
import { pageMetadata } from "@/lib/seo";
import "@/styles/blog.css";

export const metadata = pageMetadata({
  path: "/blogs",
  title: "Blogs | W3 Technologies",
  description:
    "Articles and guides from W3 Technologies, Nellore, on programming, web development, design and digital marketing.",
});

// Blog posts change from the dashboard, so always read the database.
export const dynamic = "force-dynamic";

export default async function BlogsPage() {
  const blogs = await listBlogs();

  return (
    <>
      <main>
        <div className="blog-banner-sec">
          <SiteHeader />
          <div className="container">
            <div className="banner-head">
              <h1>
                W3 <span>Technologies Blogs</span>
              </h1>
            </div>
          </div>
        </div>
        <section className="blogs">
          <div className="container">
            <h2>Blogs</h2>
            {blogs.length === 0 ? (
              <p>No blog posts found.</p>
            ) : (
              <div className="row">
                {blogs.map((blog) => (
                  <div key={blog.blog_id} className="col-12  col-sm-6 col-lg-4">
                    <a href={`/blogs/${blog.seo_url}`} className="card my-2 p-2">
                      {blog.feature_image ? (
                        <img
                          className="card-img-top"
                          src={`/blog-images/${blog.feature_image}`}
                          alt="Feature Image"
                        />
                      ) : (
                        <p>No feature image available.</p>
                      )}
                      <div className="card-body">
                        <h5 className="card-title">{blog.blog_title}</h5>
                        {blog.tagname && <p className="tag-name"> {blog.tagname.toUpperCase()}</p>}
                        {/* Tags are stripped; what's left may still hold entities such as &nbsp; */}
                        <p
                          className="card-text"
                          dangerouslySetInnerHTML={{ __html: excerpt(blog.blog_content) }}
                        />
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
