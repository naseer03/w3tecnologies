import ServiceForm from "@/components/forms/ServiceForm";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "@/styles/services.css";
import { pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  path: "/services/digital-marketing-agency-nellore",
  title: "Digital Marketing Agency in Nellore: SEO, SMM & Ads | W3 Technologies",
  description:
    "W3 Technologies is a digital marketing agency in Nellore offering social media marketing, performance marketing, SEO, e-commerce, content and WhatsApp marketing.",
});

export default function DigitalMarketingAgencyNellorePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          "/services/digital-marketing-agency-nellore",
          "Digital Marketing Services",
          metadata.description as string,
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          {
            name: "Digital Marketing Services",
            path: "/services/digital-marketing-agency-nellore",
          },
        ])}
      />
      <div
        className="modal fade"
        id="serviceModal"
        tabIndex={-1}
        aria-labelledby="serviceModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" />
            <div className="modal-body" id="service-modal-body-msg" />
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="centeredModal"
        tabIndex={-1}
        aria-labelledby="centeredModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center" id="centeredModalLabel">
                Fill out the form
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-0">
              <ServiceForm />
            </div>
          </div>
        </div>
      </div>
      <div className="services-banner">
        <SiteHeader />
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 order-2 order-lg-1">
                <div>
                  <h1 className="banner-head">
                    <span>DIGITAL MARKETING</span> AGENCY
                  </h1>
                  <p className="banner-text">
                    We provide professional web development services for businesses of all sizes,
                    creating robust and scalable web applications. Our expert team delivers tailored
                    solutions to meet your specific business needs, ensuring high performance and
                    seamless user experiences.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-12 order-1 order-lg-2 ">
                <img src="/assets/services/header.webp" alt="header-img" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="tech-stack">
        <div className="container">
          <h2 className="head">Our Digital Marketing Services</h2>
          <div className="row pt-4">
            <div className="col-lg-5 col-12">
              <ul className="nav nav-pills mb-3 flex-lg-column gap-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link  active position-relative"
                    id="pills-SMM-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-SMM"
                    type="button"
                    role="tab"
                    aria-controls="pills-SMM"
                    aria-selected="true"
                  >
                    SOCIAL MEDIA MARKETING
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link  position-relative"
                    id="pills-performance-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-performance"
                    type="button"
                    role="tab"
                    aria-controls="pills-performance"
                    aria-selected="false"
                  >
                    PERFORMANCE MARKETING
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link  position-relative"
                    id="pills-SEO-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-SEO"
                    type="button"
                    role="tab"
                    aria-controls="pills-SEO"
                    aria-selected="false"
                  >
                    SEARCH ENGINE OPTIMIZATION
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link  position-relative"
                    id="pills-ui/ecomerce-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-ecomerce"
                    type="button"
                    role="tab"
                    aria-controls="pills-ecomerce"
                    aria-selected="false"
                  >
                    E-COMMERCE MARKETING
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link  position-relative"
                    id="pills-ui/content-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-content"
                    type="button"
                    role="tab"
                    aria-controls="pills-cotent"
                    aria-selected="false"
                  >
                    CONTENT MARKETING
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link  position-relative"
                    id="pills-ui/whatsapp-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-whatsapp"
                    type="button"
                    role="tab"
                    aria-controls="pills-whatsapp"
                    aria-selected="false"
                  >
                    WHATSAPP MARKETING
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-lg-7 col-12">
              <div className="tab-content mt-4 mt-lg-0" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-SMM"
                  role="tabpanel"
                  aria-labelledby="pills-SMM-tab"
                >
                  <h2>SOCIAL MEDIA MARKETING</h2>
                  <p>
                    Expand your brand’s reach and engage with your audience on platforms where they
                    spend their time. We create targeted social media campaigns that build brand
                    awareness, foster community, and drive conversions.
                  </p>
                  <div className="mt-3 d-flex justify-content-center">
                    <img
                      src="/assets/services/digital-marketing/digital-services/social-media-marketing.svg"
                      alt="SMM"
                      className="tech-logo"
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-performance"
                  role="tabpanel"
                  aria-labelledby="pills-performance-tab"
                >
                  <h2>PERFORMANCE MARKETING</h2>
                  <p>
                    Maximize your ROI with data-driven performance marketing strategies. We focus on
                    delivering measurable results by optimizing campaigns across various channels to
                    achieve your business goals.
                  </p>
                  <div className="mt-3 d-flex justify-content-center">
                    <img
                      width={253}
                      height={250}
                      loading="lazy"
                      src="/assets/services/digital-marketing/digital-services/perfomance-marketing.svg"
                      alt="performance-marketing"
                      className="tech-logo"
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-SEO"
                  role="tabpanel"
                  aria-labelledby="pills-SEO-tab"
                >
                  <h2>SEARCH ENGINE OPTIMIZATION</h2>
                  <p>
                    Improve your website’s visibility and ranking on search engines with our
                    comprehensive SEO strategies. We enhance your organic traffic by optimizing your
                    site’s content, structure, and keyword targeting..
                  </p>
                  <div className="mt-3 d-flex justify-content-center">
                    <img
                      width={260}
                      height={250}
                      loading="lazy"
                      src="/assets/services/digital-marketing/digital-services/search-engine-optimization.svg"
                      alt="search-engine-optimization"
                      className="tech-logo"
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-ecomerce"
                  role="tabpanel"
                  aria-labelledby="pills-ecomerce"
                >
                  <h2>E-COMMERCE MARKETING</h2>
                  <p>
                    Boost your online sales with tailored e-commerce marketing solutions. From
                    product promotion to customer retention strategies, we help you drive
                    conversions and grow your online store’s revenue.
                  </p>
                  <div className="mt-3 d-flex justify-content-center">
                    <img
                      width={250}
                      height={250}
                      loading="lazy"
                      src="/assets/services/digital-marketing/digital-services/e-commerce-marketing.svg"
                      alt="e-commerce-marketing"
                      className="tech-logo"
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-content"
                  role="tabpanel"
                  aria-labelledby="pills-content"
                >
                  <h2>CONTENT MARKETING</h2>
                  <p>
                    Engage and inform your audience with compelling content that resonates. Our
                    content marketing services focus on creating valuable and relevant content that
                    strengthens your brand and drives customer loyalty.
                  </p>
                  <div className="mt-3 d-flex justify-content-center">
                    <img
                      width={230}
                      height={250}
                      loading="lazy"
                      src="/assets/services/digital-marketing/digital-services/content-marketing.svg"
                      alt="content-marketing"
                      className="tech-logo"
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-whatsapp"
                  role="tabpanel"
                  aria-labelledby="pills-whatsapp"
                >
                  <h2>WHATSAPP MARKETING</h2>
                  <p>
                    Reach your customers directly with personalized WhatsApp marketing campaigns. We
                    help you connect with your audience through instant messaging, promoting offers,
                    updates, and more in a highly engaging format.
                  </p>
                  <div className="mt-3 d-flex justify-content-center">
                    <img
                      width={249}
                      height={250}
                      loading="lazy"
                      src="/assets/services/digital-marketing/digital-services/whatsapp-marketing.svg"
                      alt="whatsapp-marketing"
                      className="tech-logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="uncertain">
        <div className="container">
          <div className="d-flex flex-column  gap-5 align-items-center text-center">
            <div>
              <h2>Uncertain About Your Digital Marketing Strategy?</h2>
              <p>
                Let us help you navigate the digital landscape. Connect with our experts for
                tailored advice and solutions.
              </p>
            </div>
            <button
              type="button"
              className="req-btn"
              data-bs-toggle="modal"
              data-bs-target="#centeredModal"
            >
              {" "}
              Request a Consultation{" "}
            </button>
          </div>
        </div>
      </section>
      <section className="ind-serves">
        <div className="container">
          <h2 className="head">
            <span>Benefits</span> of Choosing Our Services
          </h2>
          <div className="industies d-flex flex-wrap gap-3  justify-content-center mt-4">
            <div className="card ">
              <div className="d-flex flex-column align-items-center gap-3">
                <img
                  width={250}
                  height={250}
                  loading="lazy"
                  src="/assets/services/digital-marketing/increased-online-visibility.svg"
                  className="ind-img"
                  alt="increased-online-visibility"
                />
                <h5 className="card-title pt-2">Increased Online Visibility</h5>
              </div>
            </div>
            <div className="card ">
              <div className="d-flex flex-column align-items-center gap-3">
                <img
                  width={250}
                  height={250}
                  loading="lazy"
                  src="/assets/services/digital-marketing/targeted-marketing.svg"
                  className="ind-img"
                  alt="Targeted-Marketing"
                />
                <h5 className="card-title pt-2">Targeted Marketing</h5>
              </div>
            </div>
            <div className="card ">
              <div className="d-flex flex-column align-items-center gap-3">
                <img
                  width={290}
                  height={250}
                  loading="lazy"
                  src="/assets/services/digital-marketing/measurable-results.svg"
                  className="ind-img"
                  alt="mesurable-results"
                />
                <h5 className="card-title pt-2">Measurable Results</h5>
              </div>
            </div>
            <div className="card ">
              <div className="d-flex flex-column align-items-center gap-3">
                <img
                  width={251}
                  height={250}
                  loading="lazy"
                  src="/assets/services/digital-marketing/enhanced-brand.svg"
                  className="ind-img"
                  alt="enhance-brand"
                />
                <h5 className="card-title pt-2">Enhanced Brand Reputation</h5>
              </div>
            </div>
            <div className="card ">
              <div className="d-flex flex-column align-items-center gap-3">
                <img
                  width={241}
                  height={250}
                  loading="lazy"
                  src="/assets/services/digital-marketing/cost-Effectiveness.svg"
                  className="ind-img"
                  alt="cost-effectiveness"
                />
                <h5 className="card-title pt-2">Cost-Effectiveness</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-form-section">
        <div className="container">
          <div className="text-center">
            <h2>Let Us Know Your Needs</h2>
            <h3 className="mt-2">Just Fill Out the Form</h3>
          </div>
          <ServiceForm variant="wide" />
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
