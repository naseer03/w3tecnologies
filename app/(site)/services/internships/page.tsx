import InternshipForm from "@/components/forms/InternshipForm";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "@/styles/services.css";
import { pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  path: "/services/internships",
  title: "Learn & Earn With Our Internship Program | W3 Technologies",
  description:
    "Learn & Earn! W3technologies internship combines training, client projects & real-world experience for Bsc, Bca, BBA & Bcom students/grads.",
});

export default function InternshipsPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          "/services/internships",
          "Internship Program",
          metadata.description as string,
        )}
      />
      <JsonLd
        data={breadcrumbSchema([{ name: "Internship Program", path: "/services/internships" }])}
      />
      <div
        className="modal fade"
        id="internshipModal"
        tabIndex={-1}
        aria-labelledby="internshipModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" />
            <div className="modal-body" id="internship-modal-body-msg" />
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
              <InternshipForm />
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
                    <span>INTERNSHIP</span> PROGRAM
                  </h1>
                  <p className="banner-text">
                    W3tecnologies internship program specially designed for degree students and
                    recent graduates from diverse academic backgrounds like{" "}
                    <strong>B.Tech, MCA, MBA,Bsc, Bca, BBA and B.com, </strong>
                    which we offering training + internship program along with our client projects
                    and the opportunity to gain real time work experience.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-12 order-1 order-lg-2 ">
                <div className="internship-stats">
                  {[
                    ["800+", "students joined"],
                    ["48", "students placed"],
                    ["5 Years", "in business"],
                    ["10+", "qualified specialist"],
                  ].map(([value, label]) => (
                    <div key={label} className="internship-stat">
                      <p className="internship-stat-value">{value}</p>
                      <p className="internship-stat-label">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="about-serv-sec-main">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>
                <span>About</span> Internship Program
              </h2>
              <p>
                <span>Interns at w3tecnologies</span> get experiential learning opportunities in the
                development sector and a meaningful internship experience that will support their
                academic, professional and personal development.Interns will engage in real-world
                projects that contribute to the development sector, allowing them to apply
                theoretical knowledge in practical settings. They will work alongside industry
                experts and mentors who are dedicated to guiding them through the complexities of
                the field.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="uncertain">
        <div className="container">
          <div className="d-flex flex-column gap-5 align-items-center text-center">
            <div>
              <h2>Interested in Our Internship Program?</h2>
              <p>
                Discover how our internships can shape your future. Connect with us for more
                details.
              </p>
            </div>
            <button
              type="button"
              className="req-btn"
              data-bs-toggle="modal"
              data-bs-target="#centeredModal"
            >
              {" "}
              Request Internship Info{" "}
            </button>
          </div>
        </div>
      </section>
      <section className="ind-serves">
        <div className="container">
          <h2 className="head">
            <span>Benefits</span> of our Internship program
          </h2>
          <div className="industies d-flex flex-wrap gap-3  justify-content-center mt-4">
            <div className="card ">
              <div className="d-flex flex-column align-items-center gap-3">
                <img
                  width={258}
                  height={250}
                  loading="lazy"
                  src="/assets/services/internship/project-focused learning.svg"
                  className="ind-img"
                  alt="project-focused-learning"
                />
                <h5 className="card-title pt-2">
                  Project-focused <br /> learning
                </h5>
              </div>
            </div>
            <div className="card ">
              <div className="d-flex flex-column align-items-center gap-3">
                <img
                  width={233}
                  height={250}
                  loading="lazy"
                  src="/assets/services/internship/expert-mentorship.svg"
                  className="ind-img"
                  alt="expert-mentorship"
                />
                <h5 className="card-title pt-2">Expert mentorship</h5>
              </div>
            </div>
            <div className="card ">
              <div className="d-flex flex-column align-items-center gap-3">
                <img
                  width={287}
                  height={250}
                  loading="lazy"
                  src="/assets/services/internship/individual performance monitoring.svg"
                  className="ind-img"
                  alt="performance-monitoring"
                />
                <h5 className="card-title pt-2">
                  Individual performance <br /> monitoring
                </h5>
              </div>
            </div>
            <div className="card ">
              <div className="d-flex flex-column align-items-center gap-3">
                <img
                  width={245}
                  height={250}
                  loading="lazy"
                  src="/assets/services/internship/industry insights.svg"
                  className="ind-img"
                  alt="industry-insights"
                />
                <h5 className="card-title pt-2">Industry insights</h5>
              </div>
            </div>
            <div className="card ">
              <div className="d-flex flex-column align-items-center gap-3">
                <img
                  width={249}
                  height={250}
                  loading="lazy"
                  src="/assets/services/internship/hands-on-experience.svg"
                  className="ind-img"
                  alt="hands-on-experience"
                />
                <h5 className="card-title pt-2">Hands-on experience</h5>
              </div>
            </div>
            <div className="card ">
              <div className="d-flex flex-column align-items-center gap-3">
                <img
                  width={250}
                  height={250}
                  loading="lazy"
                  src="/assets/services/internship/interactive sessions.svg"
                  className="ind-img"
                  alt="interactive-sessions"
                />
                <h5 className="card-title pt-2">Interactive sessions</h5>
              </div>
            </div>
            <div className="card ">
              <div className="d-flex flex-column align-items-center gap-3">
                <img
                  width={249}
                  height={250}
                  loading="lazy"
                  src="/assets/services/internship/resume Building.svg"
                  className="ind-img"
                  alt="resume-building"
                />
                <h5 className="card-title pt-2">Resume Building</h5>
              </div>
            </div>
            <div className="card ">
              <div className="d-flex flex-column align-items-center gap-3">
                <img
                  width={191}
                  height={250}
                  loading="lazy"
                  src="/assets/services/internship/job assistance.svg"
                  className="ind-img"
                  alt="job-assistance"
                />
                <h5 className="card-title pt-2">Job assistance</h5>
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
          <InternshipForm variant="wide" />
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
