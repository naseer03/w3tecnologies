import ServiceForm from "@/components/forms/ServiceForm";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "@/styles/services.css";
import { pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  path: "/services/web-development-service",
  title: "Get Website Design & Development Services for Your Website",
  description:
    "Our custom web development services ensure your online presence aligns perfectly with your business objectives. Contact W3 Technologies to know more.",
});

export default function WebDevelopmentServicePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          "/services/web-development-service",
          "Web Development Services",
          metadata.description as string,
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Web Development Services", path: "/services/web-development-service" },
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
                    <span>WEB DEVELOPMENT</span> SERVICES
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
          <h2 className="head">Tech Stack</h2>
          <div className="row pt-4">
            <div className="col-lg-5 col-12">
              <ul className="nav nav-pills mb-3 flex-lg-column gap-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link  active position-relative"
                    id="pills-frontEnd-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-frontEnd"
                    type="button"
                    role="tab"
                    aria-controls="pills-frontEnd"
                    aria-selected="true"
                  >
                    FRONT-END DEVELOPMENT
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link  position-relative"
                    id="pills-backEnd-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-backEnd"
                    type="button"
                    role="tab"
                    aria-controls="pills-backEnd"
                    aria-selected="false"
                  >
                    BACK-END DEVELOPMENT
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link  position-relative"
                    id="pills-ui/uxDesign-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-ui/uxDesign"
                    type="button"
                    role="tab"
                    aria-controls="pills-ui/uxDesign"
                    aria-selected="false"
                  >
                    UI/UX DESIGN
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link  position-relative"
                    id="pills-ui/cmsDevelopment-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-cmsDevelopment"
                    type="button"
                    role="tab"
                    aria-controls="pills-cmsDevelopment"
                    aria-selected="false"
                  >
                    CMS DEVELOPMENT
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-lg-7 col-12">
              <div className="tab-content mt-4 mt-lg-0" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-frontEnd"
                  role="tabpanel"
                  aria-labelledby="pills-frontEnd-tab"
                >
                  <h2>FRONT-END DEVELOPMENT</h2>
                  <p>
                    Boost your business with attractive and functional front-end solutions, designed
                    to offer smooth user experiences and effectively tackle your specific industry
                    challenges
                  </p>
                  <div className="mt-5 d-flex gap-5 flex-wrap">
                    <img
                      src="/assets/services/web-development/tech-stack/Html.svg"
                      alt="html"
                      className="tech-logo"
                    />{" "}
                    <img
                      src="/assets/services/web-development/tech-stack/Css.svg"
                      alt="css"
                      className="tech-logo"
                    />{" "}
                    <img
                      src="/assets/services/web-development/tech-stack/JS.svg"
                      alt="js"
                      className="tech-logo"
                    />{" "}
                    <img
                      src="/assets/services/web-development/tech-stack/angular-icon.svg"
                      alt="angular"
                      className="tech-logo"
                    />{" "}
                    <img
                      src="/assets/services/web-development/tech-stack/react-icons.svg"
                      alt="react"
                      className="tech-logo"
                    />{" "}
                    <img
                      src="/assets/services/web-development/tech-stack/vue.svg"
                      alt="vue"
                      className="tech-logo"
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-backEnd"
                  role="tabpanel"
                  aria-labelledby="pills-backEnd-tab"
                >
                  <h2>BACK-END DEVELOPMENT</h2>
                  <p>
                    Build a strong foundation for your applications with solid, scalable, and secure
                    back-end systems, customized to support your business needs and handle data
                    tasks seamlessly.
                  </p>
                  <div className="mt-3 d-flex gap-5 flex-wrap">
                    <img
                      width={360}
                      height={200}
                      loading="lazy"
                      src="/assets/services/web-development/tech-stack/PHP.svg"
                      alt="php"
                      className="tech-logo"
                    />{" "}
                    <img
                      width={708}
                      height={200}
                      loading="lazy"
                      src="/assets/services/web-development/tech-stack/nodejs.svg"
                      alt="node"
                      className="tech-logo"
                    />{" "}
                    <img
                      width={194}
                      height={200}
                      loading="lazy"
                      src="/assets/services/web-development/tech-stack/laravel-2.svg"
                      alt="laravel"
                      className="tech-logo"
                    />{" "}
                    <img
                      width={440}
                      height={200}
                      loading="lazy"
                      src="/assets/services/web-development/tech-stack/dotnet-icon.svg"
                      alt="dotnet"
                      className="tech-logo"
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-ui/uxDesign"
                  role="tabpanel"
                  aria-labelledby="pills-ui/uxDesign-tab"
                >
                  <h2>UI/UX DESIGN</h2>
                  <p>
                    Boost user satisfaction and increase engagement with easy-to-use, visually
                    attractive UI/UX designs that provide smooth and enjoyable experiences on all
                    devices and platforms.
                  </p>
                  <div className="mt-3 d-flex gap-5 flex-wrap">
                    <img
                      width={133}
                      height={200}
                      loading="lazy"
                      src="/assets/services/web-development/tech-stack/Figma.svg"
                      alt="figma"
                      className="tech-logo"
                    />{" "}
                    <img
                      width={200}
                      height={200}
                      loading="lazy"
                      src="/assets/services/web-development/tech-stack/miro-.svg"
                      alt="miro"
                      className="tech-logo"
                    />{" "}
                    <img
                      width={205}
                      height={200}
                      loading="lazy"
                      src="/assets/services/web-development/tech-stack/Ps.svg"
                      alt="ps"
                      className="tech-logo"
                    />{" "}
                    <img
                      width={205}
                      height={200}
                      loading="lazy"
                      src="/assets/services/web-development/tech-stack/xd.svg"
                      alt="xd"
                      className="tech-logo"
                    />{" "}
                    <img
                      width={511}
                      height={499}
                      loading="lazy"
                      src="/assets/services/web-development/tech-stack/adobe-illustrator-icon.svg"
                      alt="illustrator"
                      className="tech-logo"
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-cmsDevelopment"
                  role="tabpanel"
                  aria-labelledby="pills-cmsDevelopment"
                >
                  <h2>CMS DEVELOPMENT</h2>
                  <p>
                    Our CMS expertise spans platforms like Magento, Shopify, WordPress, and more. We
                    tailor solutions to your needs, ensuring seamless content management and site
                    administration.
                  </p>
                  <div className="mt-3 d-flex gap-5 flex-wrap">
                    <img
                      width={200}
                      height={200}
                      loading="lazy"
                      src="/assets/services/web-development/tech-stack/Drupall.svg"
                      alt="drupall"
                      className="tech-logo"
                    />{" "}
                    <img
                      width={200}
                      height={200}
                      loading="lazy"
                      src="/assets/services/web-development/tech-stack/Sharepoint.svg"
                      alt="sharepoint"
                      className="tech-logo"
                    />{" "}
                    <img
                      width={923}
                      height={200}
                      loading="lazy"
                      src="/assets/services/web-development/tech-stack/Sitecore.svg"
                      alt="sitecore"
                      className="tech-logo"
                    />{" "}
                    <img
                      width={515}
                      height={200}
                      loading="lazy"
                      src="/assets/services/web-development/tech-stack/Wix.svg"
                      alt="wix"
                      className="tech-logo"
                    />{" "}
                    <img
                      width={200}
                      height={200}
                      loading="lazy"
                      src="/assets/services/web-development/tech-stack/Wordpress.svg"
                      alt="wordpress"
                      className="tech-logo"
                    />{" "}
                    <img
                      width={666}
                      height={200}
                      loading="lazy"
                      src="/assets/services/web-development/tech-stack/ghost-cms.svg"
                      alt="ghost"
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
              <h2>Uncertain About Your Development Needs?</h2>
              <p>
                We&apos;re here to guide you. Talk to our experts for personalized recommendations.
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
            <span>Industries</span> W3 Technologies Serves
          </h2>
          <div className="industies d-flex flex-wrap gap-3  justify-content-center mt-4">
            <div className="card ">
              <div className="d-flex flex-column align-items-center gap-3">
                <img
                  width={120}
                  height={120}
                  loading="lazy"
                  src="/assets/services/web-development/industries/e-commerce.svg"
                  className="ind-img"
                  alt="e-commerce"
                />
                <h5 className="card-title pt-2">E-commerce</h5>
              </div>
            </div>
            <div className="card ">
              <div className="d-flex flex-column align-items-center gap-3">
                <img
                  width={128}
                  height={120}
                  loading="lazy"
                  src="/assets/services/web-development/industries/education.svg"
                  className="ind-img"
                  alt="education"
                />
                <h5 className="card-title pt-2">Education</h5>
              </div>
            </div>
            <div className="card ">
              <div className="d-flex flex-column align-items-center gap-3">
                <img
                  width={120}
                  height={120}
                  loading="lazy"
                  src="/assets/services/web-development/industries/food.svg"
                  className="ind-img"
                  alt="food"
                />
                <h5 className="card-title pt-2">Food</h5>
              </div>
            </div>
            <div className="card ">
              <div className="d-flex flex-column align-items-center gap-3">
                <img
                  width={120}
                  height={120}
                  loading="lazy"
                  src="/assets/services/web-development/industries/healthcare.svg"
                  className="ind-img"
                  alt="health-care"
                />
                <h5 className="card-title pt-2">Health Care</h5>
              </div>
            </div>
            <div className="card ">
              <div className="d-flex flex-column align-items-center gap-3">
                <img
                  width={120}
                  height={120}
                  loading="lazy"
                  src="/assets/services/web-development/industries/infrastructure.svg"
                  className="ind-img"
                  alt="Infrastructure"
                />
                <h5 className="card-title pt-2">Infrastructure</h5>
              </div>
            </div>
            <div className="card ">
              <div className="d-flex flex-column align-items-center gap-3">
                <img
                  width={120}
                  height={120}
                  loading="lazy"
                  src="/assets/services/web-development/industries/iT.svg"
                  className="ind-img"
                  alt="IT"
                />
                <h5 className="card-title pt-2">IT</h5>
              </div>
            </div>
            <div className="card ">
              <div className="d-flex flex-column align-items-center gap-3">
                <img
                  width={478}
                  height={477}
                  loading="lazy"
                  src="/assets/services/web-development/industries/sports.svg"
                  className="ind-img"
                  alt="Sports"
                />
                <h5 className="card-title pt-2">Sports</h5>
              </div>
            </div>
            <div className="card ">
              <div className="d-flex flex-column align-items-center gap-3">
                <img
                  width={120}
                  height={120}
                  loading="lazy"
                  src="/assets/services/web-development/industries/travels.svg"
                  className="ind-img"
                  alt="Travels"
                />
                <h5 className="card-title pt-2">Travels</h5>
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
