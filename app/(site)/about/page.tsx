import EnquiryForm from "@/components/forms/EnquiryForm";
import HaveQuestions from "@/components/sections/HaveQuestions";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "@/styles/about.css";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/about",
  title: "Know More About Our Courses & Services | W3 Technologies",
  description:
    "Looking to upskill? Discover the latest tech trends and practical training with our tailored courses and services. Enroll now at W3 Technologies.",
});

export default function AboutPage() {
  return (
    <>
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
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="reg-exampleModal"
        tabIndex={-1}
        aria-labelledby="regModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="regModalLabel">
                Registration Status
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body" id="reg-modal-body-msg" />
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-main">
        <div className="about-us-banner">
          <SiteHeader />
          <div className="container banner-main-heading">
            <div className="row">
              <div className="col-12">
                <h1>
                  About <span>us</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <section className="about-us-content-sec pt-3 pb-5 py-lg-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="about-us-content">
                  <div>
                    <p>
                      <span>W3 Technologies</span> is an agency-styled training institute started by
                      Naseer Shaik, the founder of Reesan Info Tech and one of the best computer
                      training institute in <strong>Telugu states.</strong>
                    </p>
                  </div>
                  <div>
                    <p>W3 Technologies helped more than</p>
                    <div>
                      <p>
                        <span>1200+</span> Students
                      </p>
                    </div>
                    <p>elevate their Software, Computer skills and become industry experts.</p>
                  </div>
                  <div>
                    <p>
                      W3 Technologies is a computer training institute based in{" "}
                      <strong>Nellore</strong> that offers offline and online software and digital
                      marketing courses for students to elevate their skills and become industry
                      experts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="about-us-ceo-img-sec">
                  <div>
                    <img src="/assets/about/Founder Image.webp" alt="w3 technologies founder" />
                  </div>
                  <div>
                    <p>Naseer Shaik</p>
                    <h6>
                      Founder, <span>W3 Technologies</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="vision-mission-main-sec">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="vision-mission-txt border-right">
                  <div className="vision-mission-icon">
                    <img
                      width={128}
                      height={128}
                      loading="lazy"
                      src="/assets/about/mission-icon.svg"
                      alt="w3 technologies Mission"
                    />
                    <h2>Mission</h2>
                  </div>
                  <p>
                    At W3 Technologies, our mission is to delegate poor and middle-class students to
                    achieve their dream jobs through high-quality digital and software training. We
                    are committed to providing accessible and comprehensive education in software,
                    computer skills, and digital marketing to help our students become industry
                    experts and elevate their professional prospects.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 mt-5 mt-md-0">
                <div className="vision-mission-txt border-left">
                  <div className="vision-mission-icon">
                    <img
                      width={128}
                      height={128}
                      loading="lazy"
                      src="/assets/about/vision-icon.svg"
                      alt="w3 technologies Vision"
                    />
                    <h2>Vision</h2>
                  </div>
                  <p>
                    Our vision is to be the leading computer training institute in the Telugu
                    states, renowned for transforming the lives of our students by equipping them
                    with the skills needed to excel in the digital age. We try to bridge the gap
                    between education and employment by fostering a learning environment that
                    nurtures talent, encourages innovation, and ensures that every student has the
                    opportunity to succeed in the rapidly evolving tech industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="why-w3-tec-sec-main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="why-w3-tec-heading">
                  <h2>
                    <span> Why</span> W3 Technologies?
                  </h2>
                  <p>
                    We are the only agency-styled computer training institute in the Telugu states
                    that
                  </p>
                  <h4>
                    holds your hand <span> until you get your job. </span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="why-w3-card-main">
                  <div className="why-w3-border-right" />
                  <div className="why-w3-card-img">
                    <img
                      width={102}
                      height={128}
                      loading="lazy"
                      src="/assets/about/why-w3/iso-certified-icon.svg"
                      alt="ISO certified institution"
                    />
                  </div>
                  <p>ISO 9001:2015 certified institution</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="why-w3-card-main">
                  <div className="why-w3-border-right" />
                  <div className="why-w3-card-img">
                    <img
                      width={150}
                      height={120}
                      loading="lazy"
                      src="/assets/about/why-w3/hands-on-training-icon.svg"
                      alt="hands on traning"
                    />
                  </div>
                  <p>No Slideshow(PPT) training, fully hands-on training</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="why-w3-card-main">
                  <div className="why-w3-card-img">
                    <img
                      width={108}
                      height={106}
                      loading="lazy"
                      src="/assets/about/why-w3/qa-icon.svg"
                      alt="Interactive session with interview QA's"
                    />
                  </div>
                  <p>Interactive session with interview QA&apos;s</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="why-w3-card-main">
                  <div className="why-w3-border-right" />
                  <div className="why-w3-card-img">
                    <img
                      width={116}
                      height={130}
                      loading="lazy"
                      src="/assets/about/why-w3/affordable-fee-icon.svg"
                      alt={"Most competitive & affordable course fee"}
                    />
                  </div>
                  <p>Most competitive &amp; affordable course fee</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="why-w3-card-main">
                  <div className="why-w3-border-right" />
                  <div className="why-w3-card-img">
                    <img
                      width={134}
                      height={120}
                      loading="lazy"
                      src="/assets/about/why-w3/clients-icon.svg"
                      alt={"List of established & satisfied clients & students"}
                    />
                  </div>
                  <p>List of established &amp; satisfied clients &amp; students</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="why-w3-card-main">
                  <div className="why-w3-card-img">
                    <img
                      width={137}
                      height={120}
                      loading="lazy"
                      src="/assets/about/why-w3/expert-icon.svg"
                      alt="Learn from the Industry's expertise."
                    />
                  </div>
                  <p>Learn from the Industry&apos;s expertise.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our-motive-sec-main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="our-motive-heading-sec">
                  <h2>
                    <span>Our motive</span> is to setup your <span>professional strengths,</span> so
                    that <span>one can write in his/her CV...</span>
                  </h2>
                </div>
                <div className="our-motive-txt">
                  <ul>
                    <li>
                      I am &nbsp;<span> proficient</span>&nbsp; in <span>_____</span>;
                    </li>
                    <li>
                      I have &nbsp;<span> developed expertise</span>&nbsp; in <span>_____</span>;
                    </li>
                    <li>
                      I have done &nbsp;<span> projects</span>&nbsp; in the field of{" "}
                      <span>_____</span>;
                    </li>
                    <li>
                      I have a &nbsp;<span> certification</span>&nbsp; in <span>_____</span>;
                    </li>
                    <li>
                      I have a &nbsp;<span> Good knowledge</span>&nbsp; of <span>_____</span>;
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <HaveQuestions />
        <section className="our-values-main-sec">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="our-values-heading">
                  Our <span>Core Values</span>
                </h2>
              </div>
            </div>
            <div className="row mt-3 mt-md-5">
              <div className="col-12 col-lg-4">
                <div className="our-core-values-card">
                  <div className="our-core-values-img">
                    <img
                      width={83}
                      height={83}
                      loading="lazy"
                      src="/assets/about/our-core-values/wisdom.svg"
                      alt="Wisdom"
                    />
                  </div>
                  <h3>Wisdom</h3>
                  <p className="our-values-border">
                    We believe in imparting not just knowledge, but the wisdom to apply it
                    effectively in real-world scenarios.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="our-core-values-card">
                  <div className="our-core-values-img">
                    <img
                      width={88}
                      height={88}
                      loading="lazy"
                      src="/assets/about/our-core-values/work.svg"
                      alt="Work Ethic"
                    />
                  </div>
                  <h3>Work Ethic</h3>
                  <p className="our-values-border">
                    We emphasize a strong work ethic, ensuring that our students are disciplined,
                    dedicated, and driven towards success.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="our-core-values-card">
                  <div className="our-core-values-img">
                    <img
                      width={88}
                      height={62}
                      loading="lazy"
                      src="/assets/about/our-core-values/welcoming.svg"
                      alt="Welcoming"
                    />
                  </div>
                  <h3>Welcoming</h3>
                  <p>
                    We foster a welcoming environment where everyone feels included, supported, and
                    encouraged to learn and grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <SiteFooter />
    </>
  );
}
