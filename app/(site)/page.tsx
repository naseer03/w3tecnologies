import BackgroundVideo from "@/components/home/BackgroundVideo";
import CardsSlideAnimation from "@/components/home/CardsSlideAnimation";
import EnquiryForm from "@/components/forms/EnquiryForm";
import HaveQuestions from "@/components/sections/HaveQuestions";
import OwlCarousel from "@/components/home/OwlCarousel";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "@/styles/home.css";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/",
  title: "Best Software Coaching Institute in Nellore | W3 Technologies",
  description:
    "Looking for a software coding institute in Nellore, Andhra Pradesh? W3 Technologies offers comprehensive courses and industry-relevant training.",
});

export default function HomePage() {
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
      <div className="bg">
        <BackgroundVideo src="/assets/institute-video-4.mp4" />
        <div className="box-effect" />
        <SiteHeader />
        <section className="banner">
          <div className="container">
            <img
              src="/assets/home/banner/Digital-Marketing.svg"
              alt="digital-marketing"
              className="dig-marketing"
            />{" "}
            <img src="/assets/home/banner/Front-End.svg" alt="front-end" className="front-end" />{" "}
            <img src="/assets/home/banner/Full-Stack.svg" alt="full-stack" className="full-stack" />{" "}
            <img src="/assets/home/banner/Python.svg" alt="python" className="python" />
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="banner-content">
                  <h1 className="learn-text">
                    Learn from
                    <span className="visually-hidden">
                      {" "}
                      industry experts at W3 Technologies, software training institute in Nellore
                    </span>
                  </h1>
                  <p className="ind-exprt-text">INDUSTRY EXPERTS</p>
                  <p className="start-text">To Start Your</p>
                  <p className="career-text">IT Career</p>
                </div>
                <div className="d-flex gap-3 banner-btns">
                  <a href="tel:+917416939333" className="telNo-btn">
                    <img src="/assets/home/banner/phone-icon.svg" alt="call" />
                    <span className="tel-no">+91 741-693-9333</span>{" "}
                  </a>{" "}
                  <button
                    type="button"
                    className="register-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#centeredModal"
                  >
                    {" "}
                    Register Now{" "}
                  </button>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="banner-blog">
                  <OwlCarousel
                    className="blog-carousel owl-carousel owl-theme"
                    preset="blog-carousel"
                  >
                    <div className="item">
                      <div className="blog-image">
                        <img
                          src="/assets/home/banner/class.webp"
                          alt="class-img"
                          className="img-fluid"
                        />
                        <p className="text">
                          <span className="hash">#</span>
                          <span className="interactive">INTERACTIVE</span> COURSES
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="blog-image">
                        <img
                          src="/assets/home/banner/kick-start.webp"
                          alt="kickStart-img"
                          className="img-fluid"
                        />
                        <p className="text">
                          <span className="hash">#</span>
                          <span className="interactive">JOIN </span>WITH US
                        </p>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="cards-section">
        <div className="container">
          <div className="text-content">
            <div className="content">
              <h2 className="heading">
                Internships <span className="and">&amp;</span> <br />
                <span className="course">Courses</span>
              </h2>
              <p className="intern-courses-text">
                Live, interactive sessions guided by experts to enhance your expertise and skills in
                your chosen area of interest.
              </p>
            </div>
          </div>
          <div className="cards-container-supp card-img" />
          <div id="cards-view-1">
            <div className="cards-list">
              <img
                src="/assets/home/internships-courses/front-end.webp"
                alt="frontend"
                className="card-img"
              />{" "}
              <img
                src="/assets/home/internships-courses/desinging.webp"
                alt="ui-ux-desinging"
                className="card-img"
              />{" "}
              <img
                src="/assets/home/internships-courses/digi-marketing.webp"
                alt="digital-marketing"
                className="card-img"
              />{" "}
              <img
                src="/assets/home/internships-courses/front-end.webp"
                alt="frontend"
                className="card-img"
              />
            </div>
          </div>
          <CardsSlideAnimation viewId="cards-view-1" />
          <div className="nav-btn-group">
            <button id="left-nav-btn-cards-view-1" className="nav-btn">
              {" "}
              <svg viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <path
                  d="M10 2L2 10L10 18"
                  stroke="#FFF5F5"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </svg>{" "}
            </button>{" "}
            <button id="right-nav-btn-cards-view-1" className="nav-btn">
              {" "}
              <svg viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <path
                  d="M2 2L10 10L2 18"
                  stroke="#FFF5F5"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </svg>{" "}
            </button>
          </div>
        </div>
      </section>
      <section className="grow-your-skills">
        <div className="container course-card">
          <div className="pb-2 pb-md-5">
            <h2 className="grow-head text-center">Grow your skills with us</h2>
            <h2 className="expert-in-head text-center">
              We make you <span className="expert-in">Expertise</span> in
            </h2>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="full-stack my-3">
                <div className="card">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-lg-5 fullstack-card-img">
                      <img
                        width={530}
                        height={527}
                        loading="lazy"
                        src="/assets/home/grow-skills/fulstack/student.webp"
                        alt="student-image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-12 col-lg-7">
                      <div className="card-body d-flex flex-column gap-2 gap-md-4">
                        <h3 className="course-name">
                          Full Stack <br className="d-none d-lg-block" />
                          <span>Development</span>
                        </h3>
                        <div>
                          <p className="course-info">
                            Full stack development refers to the ability to work on both the
                            front-end (the client-side) and back-end (the server-side) portions of
                            an application. It involves designing user interfaces, creating
                            databases, and writing server-side logic.
                          </p>
                          <p className="course-info">
                            Full stack developers are proficient in multiple programming languages
                            and frameworks, allowing them to handle all aspects of web development,
                            from concept to deployment.
                          </p>
                        </div>
                        <div className="course-lang">
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/fulstack/html.svg"
                            alt="html"
                          />{" "}
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/fulstack/css.svg"
                            alt="css"
                          />{" "}
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/fulstack/javascript.svg"
                            alt="javascript"
                          />{" "}
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/fulstack/bootstrap.svg"
                            alt="bootstrap"
                          />{" "}
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/fulstack/tailwindcss.webp"
                            alt="tailwind"
                          />{" "}
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/fulstack/python.webp"
                            alt="python"
                          />{" "}
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/fulstack/php.webp"
                            alt="php"
                          />{" "}
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/fulstack/mysql.webp"
                            alt="mysql"
                          />{" "}
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/fulstack/django.webp"
                            alt="django"
                          />{" "}
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/fulstack/react.js.webp"
                            alt="react.js"
                          />{" "}
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/fulstack/node.js.svg"
                            alt="node.js"
                          />{" "}
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/fulstack/laravel.webp"
                            alt="laravel"
                          />
                        </div>
                        <div className="explore-course d-flex flex-column align-items-center gap-2 flex-md-row align-items-lg-start gap-sm-4 pt-3">
                          <a href="#" className="explore-btn">
                            Explore
                          </a>
                          <div>
                            <h5 className="explore-course-name">All Full Stack Development</h5>
                            <p className="explore-intern-course">Internships &amp; Courses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="digital-marketing my-3">
                <div className="card">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-lg-5 order-1 order-lg-2 fullstack-card-img">
                      <img
                        width={530}
                        height={527}
                        loading="lazy"
                        src="/assets/home/grow-skills/digitalMarketing/student.webp"
                        alt="student-image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-12 col-lg-7 order-2 order-lg-1">
                      <div className="card-body d-flex flex-column gap-2 gap-md-4">
                        <h3 className="course-name">
                          Digital <br className="d-none d-lg-block" />
                          <span>Marketing</span>
                        </h3>
                        <div>
                          <p className="course-info">
                            Digital marketing encompasses all marketing efforts that utilize
                            electronic devices and the internet. It includes various channels such
                            as social media, search engines, email, and websites to connect with
                            current and prospective customers.
                          </p>
                          <p className="course-info">
                            Key strategies include SEO (Search Engine Optimization), PPC
                            (Pay-Per-Click advertising), content marketing, email marketing, and
                            social media marketing. Digital marketing aims to increase brand
                            awareness, drive traffic, generate leads, and ultimately, boost sales
                            through targeted online campaigns.
                          </p>
                        </div>
                        <div className="course-lang">
                          <img
                            width={159}
                            height={62}
                            loading="lazy"
                            src="/assets/home/grow-skills/digitalMarketing/affiliate-marketing.webp"
                            alt="affi-marketing"
                          />{" "}
                          <img
                            width={159}
                            height={62}
                            loading="lazy"
                            src="/assets/home/grow-skills/digitalMarketing/content-writing.svg"
                            alt="content-writing"
                          />{" "}
                          <img
                            width={159}
                            height={62}
                            loading="lazy"
                            src="/assets/home/grow-skills/digitalMarketing/email-marketing.webp"
                            alt="email-marketing"
                          />{" "}
                          <img
                            width={159}
                            height={62}
                            loading="lazy"
                            src="/assets/home/grow-skills/digitalMarketing/ga4.svg"
                            alt="ga4"
                          />{" "}
                          <img
                            width={159}
                            height={62}
                            loading="lazy"
                            src="/assets/home/grow-skills/digitalMarketing/sem.svg"
                            alt="sem"
                          />{" "}
                          <img
                            width={159}
                            height={62}
                            loading="lazy"
                            src="/assets/home/grow-skills/digitalMarketing/seo.webp"
                            alt="seo"
                          />{" "}
                          <img
                            width={159}
                            height={62}
                            loading="lazy"
                            src="/assets/home/grow-skills/digitalMarketing/smm.webp"
                            alt="smm"
                          />{" "}
                          <img
                            width={159}
                            height={62}
                            loading="lazy"
                            src="/assets/home/grow-skills/digitalMarketing/smo.webp"
                            alt="smo"
                          />{" "}
                          <img
                            width={159}
                            height={62}
                            loading="lazy"
                            src="/assets/home/grow-skills/digitalMarketing/whatsapp-marketing.webp"
                            alt="wtsapp-marketing"
                          />
                        </div>
                        <div className="explore-course d-flex flex-column align-items-center gap-2 flex-md-row align-items-lg-start gap-sm-4 pt-3">
                          <a href="/courses/digital-marketing" className="explore-btn">
                            Explore
                          </a>
                          <div>
                            <h5 className="explore-course-name">All Digital Marketing</h5>
                            <p className="explore-intern-course">Internships &amp; Courses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="data-analytics my-3">
                <div
                  className="card"
                  style={{ background: "linear-gradient(90deg, #0A6E4A 0%, #00C9A7 100%)" }}
                >
                  <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-lg-5 order-1 order-lg-2 fullstack-card-img">
                      <img
                        width={530}
                        height={527}
                        loading="lazy"
                        src="/assets/home/grow-skills/dataAnalytics/student.webp"
                        alt="student-image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-12 col-lg-7 order-2 order-lg-1">
                      <div className="card-body d-flex flex-column gap-2 gap-md-4">
                        <h3 className="course-name">
                          Data <br className="d-none d-lg-block" />
                          <span>Analytics</span>
                        </h3>
                        <div>
                          <p className="course-info">
                            Data Analytics is the process of examining, cleaning, transforming, and
                            modelling data to discover useful information, draw conclusions, and
                            support decision-making. It combines statistical techniques,
                            programming, and domain knowledge to extract insights from structured
                            and unstructured data.
                          </p>
                          <p className="course-info">
                            From building dashboards and visualizations to applying machine learning
                            models, data analysts help organizations make smarter, data-driven
                            decisions across industries like finance, healthcare, e-commerce, and
                            more.
                          </p>
                        </div>
                        <div className="course-lang">
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/dataAnalytics/python.webp"
                            alt="python"
                          />{" "}
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/dataAnalytics/sql.webp"
                            alt="sql"
                          />{" "}
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/dataAnalytics/excel.svg"
                            alt="excel"
                          />{" "}
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/dataAnalytics/powerbi.svg"
                            alt="power-bi"
                          />{" "}
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/dataAnalytics/tableau.svg"
                            alt="tableau"
                          />{" "}
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/dataAnalytics/pandas.svg"
                            alt="pandas"
                          />{" "}
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/dataAnalytics/numpy.svg"
                            alt="numpy"
                          />{" "}
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/dataAnalytics/matplotlib.svg"
                            alt="matplotlib"
                          />
                        </div>
                        <div className="explore-course d-flex flex-column align-items-center gap-2 flex-md-row align-items-lg-start gap-sm-4 pt-3">
                          <a href="/courses/data-analytics" className="explore-btn">
                            Explore
                          </a>
                          <div>
                            <h5 className="explore-course-name">All Data Analytics</h5>
                            <p className="explore-intern-course">Internships &amp; Courses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="designing my-3">
                <div className="card">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-lg-5 fullstack-card-img">
                      <img
                        width={530}
                        height={527}
                        loading="lazy"
                        src="/assets/home/grow-skills/designing/student.webp"
                        alt="student-image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-12 col-lg-7">
                      <div className="card-body d-flex flex-column gap-2 gap-md-4">
                        <h3 className="course-name">
                          Graphic &amp; UI/UX <br className="d-none d-lg-block" />
                          <span>Designing</span>
                        </h3>
                        <div>
                          <p className="course-info">
                            Graphic design focuses on visual communication and aesthetics. It
                            involves creating visually appealing graphics and layouts for various
                            purposes, such as logos, advertisements, and print materials.
                          </p>
                          <p className="course-info">
                            UI (User Interface) design and UX (User Experience) design focus on
                            enhancing user satisfaction by improving the usability, accessibility,
                            and pleasure provided in the interaction with a product.
                          </p>
                          <p className="course-info">
                            UI designers create interfaces that are intuitive and visually
                            appealing, while UX designers ensure smooth, seamless user experiences
                            with the product.
                          </p>
                        </div>
                        <div className="course-lang">
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/designing/adobe-xd.svg"
                            alt="adobe-xd"
                          />{" "}
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/designing/figma.svg"
                            alt="figma"
                          />{" "}
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/designing/illustartor.svg"
                            alt="illustartor"
                          />{" "}
                          <img
                            width={160}
                            height={63}
                            loading="lazy"
                            src="/assets/home/grow-skills/designing/photoshop.svg"
                            alt="photoshop"
                          />
                        </div>
                        <div className="explore-course d-flex flex-column align-items-center gap-2 flex-md-row align-items-lg-start gap-sm-4 pt-3">
                          <a href="/courses/graphic-design" className="explore-btn">
                            Explore
                          </a>
                          <div>
                            <h5 className="explore-course-name">
                              All Graphic &amp; UI/UX Designing
                            </h5>
                            <p className="explore-intern-course">Internships &amp; Courses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="parent-company">
        <div className="container">
          <div className="head-part">
            <div className="heading ">
              <img
                width={86}
                height={61}
                loading="lazy"
                src="/assets/home/parent-company/parent-company.png"
                alt="inverted-camas"
                className="quote-style"
              />
              <h2 className="head">
                We are not just trainers, we are <span>Real-Time Employees</span> form Our{" "}
                <span>Parent IT Company</span>
              </h2>
            </div>
            <div className="company-logo py-5">
              <img
                width={266}
                height={92}
                loading="lazy"
                src="/assets/home/parent-company/Reesan-Logo.png"
                alt="reesan-logo"
              />
            </div>
          </div>
          <div>
            <img
              width={4724}
              height={1511}
              loading="lazy"
              src="/assets/home/parent-company/reesanit-team.webp"
              alt="reesanit-team"
              className="img-fluid"
            />
          </div>
        </div>
      </section>
      <HaveQuestions />
      <section className="certificate-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-4">
              <div className="d-flex justify-content-center">
                <img
                  width={390}
                  height={528}
                  loading="lazy"
                  src="/assets/home/certification/Certificate.webp"
                  alt="certificate"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="elevate pt-3 pt-lg-0">
                <div className="elevate-text">
                  <h2>Elevate your presence</h2>
                  <h2>
                    with <span>Certification!</span>
                  </h2>
                </div>
                <div className="benefits d-flex flex-column flex-md-row justify-content-around ">
                  <div className="d-flex flex-column justify-content-center align-items-center gap-4">
                    <div className="benefit-icons">
                      <img
                        width={38}
                        height={49}
                        loading="lazy"
                        src="/assets/home/certification/certificate-award-icon.svg"
                        alt="award-icon"
                      />
                    </div>
                    <p className="benefit-text">
                      Industry-Recognized <br />
                      Certificate
                    </p>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center gap-4">
                    <div className="benefit-icons">
                      <img
                        width={39}
                        height={38}
                        loading="lazy"
                        src="/assets/home/certification/employee-icon.svg"
                        alt="emplyoee-icon"
                      />
                    </div>
                    <p className="benefit-text">
                      Stand Out in Job <br /> Market
                    </p>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center gap-4">
                    <div className="benefit-icons">
                      <img
                        width={38}
                        height={33}
                        loading="lazy"
                        src="/assets/home/certification/breifcase-icon.svg"
                        alt="breifcase-icon"
                      />
                    </div>
                    <p className="benefit-text">
                      Your Gateway <br /> to Career Advancement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="students-placed">
        <div className="container">
          <div className="head pb-4 pb-md-5">
            <div className="heading d-flex justify-content-center align-items-center  gap-3">
              <img
                width={120}
                height={29}
                loading="lazy"
                src="/assets/home/students-placed/head-style-left.png"
                alt="head-style-left"
                className="d-none d-md-block"
              />
              <h2 className="heading-text">
                Our Students <span>Placed</span>
              </h2>
              <img
                width={117}
                height={29}
                loading="lazy"
                src="/assets/home/students-placed/head-style-right.png"
                alt="head-style-right"
                className="d-none d-md-block"
              />
            </div>
            <p className="heading-tagline">IN COMAPANIES</p>
          </div>
          <OwlCarousel className="placed-carousel owl-carousel owl-theme" preset="placed-carousel">
            <div className="item">
              <div className="student-image">
                <img
                  src="/assets/home/students-placed/Naveen-Segu.webp"
                  className="card-img-top"
                  alt="Naveen"
                />
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="student-name mt-5">
                    <h5 className="name">Naveen</h5>
                    <p>Full Stack Developer</p>
                  </div>
                  <div className="company d-flex align-items-center justify-content-between">
                    <img
                      src="/assets/home/students-placed/Naveen-Segu-logo.png"
                      alt="company-logo"
                    />
                    <p className="package">
                      8.5<span>LPA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="student-image">
                <img
                  src="/assets/home/students-placed/rohit.png"
                  className="card-img-top"
                  alt="Rohit"
                />
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="student-name mt-5">
                    <h5 className="name">Sai Rohit</h5>
                    <p>DIGITAL MARKETING EXECUTIVE</p>
                  </div>
                  <div className="company d-flex  align-items-center justify-content-between">
                    <img
                      width={162}
                      height={53}
                      src="/assets/home/students-placed/y-axis-logo.webp"
                      alt="y-axis-logo"
                    />
                    <p className="package">
                      3.2<span>LPA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="student-image">
                <img
                  src="/assets/home/students-placed/divya.png"
                  className="card-img-top"
                  alt="Divya"
                />
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="student-name mt-5">
                    <h5 className="name">Divya</h5>
                    <p>ASSOCIATIVE RECRUITER</p>
                  </div>
                  <div className="company d-flex  align-items-center justify-content-between">
                    <img src="/assets/home/students-placed/iconma-logo.svg" alt="iconma-logo" />
                    <p className="package">
                      2.9<span>LPA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="student-image">
                <img
                  src="/assets/home/students-placed/Kalyalni.webp"
                  className="card-img-top"
                  alt="kalyani"
                />
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="student-name mt-5">
                    <h5 className="name">Kalyani</h5>
                    <p>SEO EXECUTIVE</p>
                  </div>
                  <div className="company d-flex align-items-center justify-content-between">
                    <img
                      width={167}
                      height={47}
                      src="/assets/home/students-placed/punarjan-ayurvedic-hospitals-logo.webp"
                      alt="punarjan-logo"
                    />
                    <p className="package">
                      2.76<span>LPA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="student-image">
                <img
                  src="/assets/home/students-placed/Anjana-Devi0.webp"
                  className="card-img-top"
                  alt="anjanadevi"
                />
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="student-name mt-5">
                    <h5 className="name">Anjanadevi</h5>
                    <p>Jr Frontend Developer</p>
                  </div>
                  <div className="company d-flex align-items-center justify-content-between">
                    <img src="/assets/home/students-placed/anjana-logo.svg" alt="nexzera-logo" />
                    <p className="package">
                      1.80<span>LPA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="student-image">
                <img
                  src="/assets/home/students-placed/Bibeejan0.webp"
                  className="card-img-top"
                  alt="Bibeejan"
                />
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="student-name mt-5">
                    <h5 className="name">Bibeejan</h5>
                    <p>SEO Specialist</p>
                  </div>
                  <div className="company d-flex align-items-center justify-content-between">
                    <img
                      src="/assets/home/students-placed/Bibeejan-logo_2.webp"
                      alt="Tyconstory-logo"
                    />
                    <p className="package">
                      1.4<span>LPA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
      <section className="student-says">
        <div className="container">
          <h2 className="heading">
            What our <span> Students Say!</span>
          </h2>
          <div className="row justify-content-center">
            <div className="col-12">
              <OwlCarousel
                className="video-carousel owl-carousel owl-theme"
                preset="video-carousel"
              >
                <div className="chavika video-review">
                  <div className="item-video " data-merge="1">
                    <a className="owl-video " href="https://www.youtube.com/watch?v=GZ4ig72fxYk" />
                  </div>
                </div>
                <div className="nandini video-review">
                  <div className="item-video " data-merge="1">
                    <a className="owl-video " href="https://www.youtube.com/watch?v=KaTjcByzPBc" />
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      <section className="reviews">
        <div className="container">
          <div className="heading">
            <img
              width={193}
              height={141}
              loading="lazy"
              src="/assets/home/reviews/heading-style.png"
              alt="heading-style"
              className="heading-style-img"
            />
            <h2 className="heading-text mb-0">
              Reviews <span className="from">from</span>
            </h2>
            <h2 className="heading-text">
              W3 Technologies <span className="bg-red"> Students</span>
            </h2>
          </div>
          <div className="row ">
            <div className="col-12">
              <OwlCarousel
                className="reviews-carousel owl-carousel owl-theme"
                preset="reviews-carousel"
              >
                <div className="item">
                  <div className="review">
                    <div className="reviewer-img">
                      <img src="/assets/home/reviews/rohit.webp" alt="Rohit" />
                    </div>
                    <div className="review-content d-flex flex-column flex-sm-row  align-items-start gap-3">
                      <img src="/assets/home/reviews/review-text-style.svg" alt="white-colun" />
                      <div>
                        <p className="review-text">
                          The digital marketing course at W3Technologies was incredibly insightful
                          and practical. The instructors were very knowledgeable and engaging,
                          making complex topics easy to grasp. The hands-on projects were
                          particularly beneficial in applying theoretical knowledge to real-world
                          scenarios. Overall, it was a valuable learning experience that has
                          equipped me well for pursuing a career in digital marketing.
                        </p>
                        <h4 className="reviewer-name">Sai Rohit</h4>
                        <p className="reviewer-position">DIGITAL MARKETING EXECUTIVE</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="review">
                    <div className="reviewer-img">
                      <img src="/assets/home/reviews/Naveen-Segu.webp" alt="Naveen" />
                    </div>
                    <div className="review-content d-flex flex-column flex-sm-row  align-items-start gap-3">
                      <img src="/assets/home/reviews/review-text-style.svg" alt="white-colun" />
                      <div>
                        <p className="review-text">
                          The Full Stack Development course at W3Technologies was an exceptional
                          learning experience. The instructors were highly skilled and made even the
                          most challenging concepts accessible and understandable. The course&apos;s
                          focus on hands-on projects allowed me to apply what I learned in a
                          practical setting, which was incredibly valuable. Overall, it was an
                          empowering experience that has thoroughly prepared me for a successful
                          career in Full Stack Development.
                        </p>
                        <h4 className="reviewer-name">Naveen Segu</h4>
                        <p className="reviewer-position">Full Stack Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="review">
                    <div className="reviewer-img">
                      <img src="/assets/home/reviews/Anjana-Devi.webp" alt="Anjana Devi" />
                    </div>
                    <div className="review-content d-flex flex-column flex-sm-row  align-items-start gap-3">
                      <img src="/assets/home/reviews/review-text-style.svg" alt="white-colun" />
                      <div>
                        <p className="review-text">
                          The Frontend Development course at W3Technologies was an outstanding
                          experience. The instructors were experts in their field, breaking down
                          complex concepts into easy-to-understand lessons. The emphasis on
                          practical, hands-on projects was invaluable, allowing me to translate
                          theory into real-world applications. This course has provided me with the
                          confidence and skills needed to excel in a career in Frontend Development
                        </p>
                        <h4 className="reviewer-name">Anjanadevi</h4>
                        <p className="reviewer-position">Jr Frontend Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="review">
                    <div className="reviewer-img">
                      <img src="/assets/home/reviews/Divya-V.webp" alt="Divya" />
                    </div>
                    <div className="review-content d-flex flex-column flex-sm-row  align-items-start gap-3">
                      <img src="/assets/home/reviews/review-text-style.svg" alt="white-colun" />
                      <div>
                        <p className="review-text">
                          The MS Office course at W3Technologies was incredibly informative and
                          practical. The instructors made learning the software straightforward and
                          accessible, even for beginners. The course was packed with hands-on
                          exercises that helped me master essential tools like Word, Excel, and
                          PowerPoint. This training has significantly improved my productivity and
                          efficiency, equipping me with skills that are crucial for any professional
                          environment.
                        </p>
                        <h4 className="reviewer-name">Divya</h4>
                        <p className="reviewer-position">ASSOCIATIVE RECRUITER</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="review">
                    <div className="reviewer-img">
                      <img src="/assets/home/reviews/Bibeejan-Sk.webp" alt="Divya" />
                    </div>
                    <div className="review-content d-flex flex-column flex-sm-row  align-items-start gap-3">
                      <img src="/assets/home/reviews/review-text-style.svg" alt="white-colun" />
                      <div>
                        <p className="review-text">
                          The Digital Marketing Internship at W3Technologies was an enriching and
                          hands-on experience. The mentors were highly knowledgeable, providing
                          valuable insights into the latest industry trends and strategies. The
                          real-world projects allowed me to apply theoretical knowledge effectively,
                          enhancing my skills in SEO, social media marketing, and content creation.
                          This internship has significantly prepared me for a successful career in
                          digital marketing
                        </p>
                        <h4 className="reviewer-name">Bibeejan</h4>
                        <p className="reviewer-position">SEO Specialist</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="review">
                    <div className="reviewer-img">
                      <img src="/assets/home/reviews/Rekha-Sree.webp" alt="Rekhasree" />
                    </div>
                    <div className="review-content d-flex flex-column flex-sm-row  align-items-start gap-3">
                      <img src="/assets/home/reviews/review-text-style.svg" alt="white-colun" />
                      <div>
                        <p className="review-text">
                          The Graphic Design Internship at W3Technologies was a transformative
                          experience. The mentors were skilled professionals who guided me through
                          the intricacies of design principles and tools. Working on real client
                          projects allowed me to refine my creativity and technical skills,
                          particularly in Adobe Creative Suite. This internship has given me the
                          confidence and expertise to excel in the graphic design industry
                        </p>
                        <h4 className="reviewer-name">Rekha sree</h4>
                        <p className="reviewer-position">Graphic Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="review">
                    <div className="reviewer-img">
                      <img src="/assets/home/reviews/Sameera-SK.webp" alt="Sameera" />
                    </div>
                    <div className="review-content d-flex flex-column flex-sm-row  align-items-start gap-3">
                      <img src="/assets/home/reviews/review-text-style.svg" alt="white-colun" />
                      <div>
                        <p className="review-text">
                          The Digital Marketing course at W3Technologies was an exceptional learning
                          journey. The instructors were industry experts who made complex strategies
                          and tools easy to understand. The course was filled with practical
                          exercises that helped me apply what I learned to real-world digital
                          marketing campaigns. This experience has thoroughly prepared me to thrive
                          in the digital marketing field.
                        </p>
                        <h4 className="reviewer-name">Sameera</h4>
                        <p className="reviewer-position">Digital Marketer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="review">
                    <div className="reviewer-img">
                      <img src="/assets/home/reviews/Sravani-Bai.webp" alt="Sravani" />
                    </div>
                    <div className="review-content d-flex flex-column flex-sm-row  align-items-start gap-3">
                      <img src="/assets/home/reviews/review-text-style.svg" alt="white-colun" />
                      <div>
                        <p className="review-text">
                          The Web Development course at W3Technologies was a game-changer for me.
                          The instructors broke down intricate coding concepts into digestible
                          lessons, making the learning process smooth and enjoyable. The hands-on
                          projects were especially valuable, allowing me to build and deploy real
                          websites. This course has provided me with the skills and confidence to
                          kickstart my career in web development.
                        </p>
                        <h4 className="reviewer-name">Sravani</h4>
                        <p className="reviewer-position">Jr Web Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      <div className="services">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 col-xl-4">
              <div className="head">
                <p>
                  We Provide <br className="d-none d-lg-block" /> <span>Services</span> on
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-4">
              <div className="card service-card">
                <div className="service ">
                  <img
                    width={93}
                    height={70}
                    loading="lazy"
                    src="/assets/home/services/web-application-icon.svg"
                    alt="web-application"
                    className="img-fluid"
                  />
                  <p className="service-name">web Application</p>
                </div>
                <div className="card-body">
                  <p className="service-info">
                    We Transform your ideas &amp; needs into robust web applications through
                    tailored development solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-4">
              <div className="card service-card">
                <div className="service ">
                  <img
                    width={63}
                    height={70}
                    loading="lazy"
                    src="/assets/home/services/web-design-icon.svg"
                    alt="web-design"
                    className="img-fluid"
                  />
                  <p className="service-name">web Design</p>
                </div>
                <div className="card-body">
                  <p className="service-info">
                    Creating visually stunning and user-centric web designs to elevate your online
                    presence.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-4">
              <div className="card service-card">
                <div className="service ">
                  <img
                    width={83}
                    height={83}
                    loading="lazy"
                    src="/assets/home/services/digital-marketing-icon.webp"
                    alt="digital-marketing"
                    className="img-fluid"
                  />
                  <p className="service-name">Digital Marketing</p>
                </div>
                <div className="card-body">
                  <p className="service-info">
                    Driving growth through targeted digital strategies tailored to amplify your
                    brand.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-4">
              <div className="card service-card">
                <div className="service ">
                  <img
                    width={83}
                    height={83}
                    loading="lazy"
                    src="/assets/home/services/seo-icon.svg"
                    alt="seo"
                    className="img-fluid"
                  />
                  <p className="service-name">
                    SEO <br /> <span className="full-form">Search Engine Optimization</span>
                  </p>
                </div>
                <div className="card-body">
                  <p className="service-info">
                    Optimizing websites to boost search engine visibility and drive organic traffic
                    growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-4">
              <div className="card service-card">
                <div className="service ">
                  <img
                    width={78}
                    height={78}
                    loading="lazy"
                    src="/assets/home/services/smo-icon.svg"
                    alt="smo"
                    className="img-fluid"
                  />
                  <p className="service-name">
                    SMO <br /> <span className="full-form">Social Media Optimization</span>
                  </p>
                </div>
                <div className="card-body">
                  <p className="service-info">
                    Enhancing brand awareness and engagement through strategic social media
                    optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="service-contact-btn">
            <a href="/contact" className="cont-btn">
              Contact US
            </a>
            <p>for service</p>
          </div>
        </div>
      </div>
      <section className="clients">
        <div className="container">
          <div className="head">
            <h2>
              Our <span>Clients</span> we work with
            </h2>
          </div>
          <div className="client-logos">
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/axzons.png"
              alt="axzons"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/corsult.png"
              alt="corsult"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/vertex.png"
              alt="vertex"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/aetos.png"
              alt="artos"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/safwan.png"
              alt="safwan"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/kdssg.png"
              alt="kdssg"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/pickleball.png"
              alt="pickleball"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/hotstone.png"
              alt="hotstone"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/visonics.png"
              alt="visonics"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/ashbe.png"
              alt="Ashbe"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/riet.png"
              alt="riet"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/behara.png"
              alt="behara"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/swarnandhra.png"
              alt="swarnandhra"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/visakha.png"
              alt="visakha"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/sv-college.png"
              alt="svce"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/haramayn.png"
              alt="haramayan"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/dmk.png"
              alt="dmk"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/digdo.png"
              alt="digdo"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/law-office.png"
              alt="law-anne"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/mars-marketers.png"
              alt="mars"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/mksn.png"
              alt="mksn"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/mid-court.png"
              alt="mid-ourt"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/foodbank.png"
              alt="foodbank"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/tennis-club.png"
              alt="tennishub"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/xit.png"
              alt="xitsolutions"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/iac.png"
              alt="iac"
              className="logo"
            />{" "}
            <img
              width={208}
              height={85}
              loading="lazy"
              src="/assets/home/clients/natures-living.png"
              alt="nature-living"
              className="logo"
            />
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
