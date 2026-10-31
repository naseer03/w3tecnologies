import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "@/styles/terms-privacy-careers.css";

export default function NotFound() {
  return (
    <>
      <section className="banner">
        <SiteHeader />
        <div className="container">
          <div className="head">
            <h1>Page not found</h1>
          </div>
        </div>
      </section>
      <section className="container py-5 text-center">
        <p>The page you are looking for does not exist.</p>
        <a href="/" className="btn btn-danger">
          Go to the home page
        </a>
      </section>
      <SiteFooter />
    </>
  );
}
