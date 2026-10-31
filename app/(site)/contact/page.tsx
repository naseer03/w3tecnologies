import EnquiryForm from "@/components/forms/EnquiryForm";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "@/styles/contact.css";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/contact",
  title: "Contact W3 Technologies | Software Training Institute in Nellore",
  description:
    "Call +91 74169 39333 or visit W3 Technologies at Prime Plaza, Madras Busstand, Nellore. Ask about courses, internships, batch timings and our web development services.",
});

export default function ContactPage() {
  return (
    <>
      <div
        className="modal fade"
        id="enq-exampleModal"
        tabIndex={-1}
        aria-labelledby="enqModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body" id="enq-modal-body-msg" />
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-banner">
        <SiteHeader />
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-7">
                <div>
                  <h1 className="banner-head">
                    <span>Get in Touch with us</span>
                    <br /> +91 74169 39333
                  </h1>
                  <p className="banner-text">
                    At W3 Technologies, we transform individuals into highly skilled professionals
                  </p>
                </div>
              </div>
              <div className="col-5">
                <img
                  src="/assets/contact-us/contact-us.svg"
                  alt="contact us"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="contact-form-section">
            <div className="text-center">
              <h2>We’re Here to Help</h2>
              <p className="mt-2">
                Have a question, comment, or just want to connect? We’d love to hear from you!
                Please use the contact form below or reach out through the information provided.
                We&apos;re here to help and will get back to you as soon as possible.
              </p>
            </div>
            <EnquiryForm variant="contact" />
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
