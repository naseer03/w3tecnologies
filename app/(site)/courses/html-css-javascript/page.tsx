import CourseForm from "@/components/forms/CourseForm";
import CourseIncludes from "@/components/sections/CourseIncludes";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "@/styles/courses/course-stack.css";
import CourseFaqs, { type Faq } from "@/components/sections/CourseFaqs";
import CourseSeo, { courseMetadata } from "@/components/seo/CourseSeo";

export const metadata = courseMetadata("html-css-javascript");

const faqs: Faq[] = [
  {
    q: "What is HTML, CSS, and JavaScript, and why are they important?",
    a: "HTML, CSS, and JavaScript are the essential technologies for building websites. HTML structures the web content, CSS styles it, and JavaScript makes it interactive, allowing you to create user-friendly and engaging web pages.",
  },
  {
    q: "Do I need prior coding experience for this course?",
    a: "No prior coding experience is required. This course is designed for beginners and will start from the basics of web development",
  },
  {
    q: "What career opportunities can I explore after completing this course?",
    a: "Upon completing this course, you can pursue roles such as Front-End Developer, UI/UX Developer, and JavaScript Developer. These skills are in high demand across the tech industry.",
  },
  {
    q: "How long does it take to become proficient in HTML, CSS, and JavaScript?",
    a: "With consistent practice, you can become proficient within 3-4 months. The key is to work on real-world projects to apply your learning.",
  },
  {
    q: "What tools and software will be used during the course?",
    a: "We will use code editors like Visual Studio Code, Google Chrome Developer Tools for debugging, and GitHub for version control and project hosting.",
  },
];

export default function HtmlCssJavascriptPage() {
  return (
    <>
      <CourseSeo courseSlug="html-css-javascript" />
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
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body p-0">
              <CourseForm courseSlug="html-css-javascript" />
            </div>
          </div>
        </div>
      </div>
      <main className="course-stack">
        <div className="courses-main-banner-sec">
          <SiteHeader />
          <div className="container">
            <div className="course-banner-sec-heading">
              <img src="/assets/courses/html-css-js/html.svg" alt="HTML" width={101} height={54} />{" "}
              <img src="/assets/courses/html-css-js/css.svg" alt="CSS" width={124} height={47} />
              <div className="course-banner-heading-main course-banner-long-heading">
                <h1>
                  HTML, CSS and JavaScript
                  <span className="visually-hidden"> Course in Nellore</span>
                </h1>
              </div>
              <img src="/assets/courses/html-css-js/javascript.svg" alt="JavaScript" width={161} height={54} />{" "}
              <img src="/assets/courses/html-css-js/bootstrap.svg" alt="Bootstrap" width={119} height={63} />
            </div>
          </div>
        </div>
        <section className="about-course-sec-main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>
                  <span>About</span> HTML, CSS and JavaScript
                </h2>
                <p>
                  The <span> HTML, CSS, and JavaScript </span> Course by <span> W3Technologies </span>is designed to
                  provide trainees with a comprehensive foundation in web development. The course covers the essential
                  technologies used to build interactive, user-friendly, and visually appealing websites. By focusing on{" "}
                  <span>HTML</span> for structuring content,<span> CSS </span> for styling, and <span>JavaScript</span>{" "}
                  for adding dynamic functionality, this training equips trainees with the skills needed to create
                  responsive and well-designed web interfaces.
                </p>
              </div>
            </div>
            <button type="button" className="model-blk-btn" data-bs-toggle="modal" data-bs-target="#centeredModal">
              {" "}
              <span>Download</span> | HTML-CSS-Javascript Course Syllabus{" "}
            </button>
          </div>
        </section>
        <CourseIncludes />
        <div className="course-form-sec">
          <div className="container">
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header" />
                  <div className="modal-body" id="modal-body-msg" />
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="head">
              <h2>
                <span>Want more details</span> about the
              </h2>
              <h2>HTML, CSS and Javascript course?</h2>
            </div>
            <div className="row mt-5">
              <div className="col-12 col-lg-6 order-2 order-lg-1">
                <h3 className="pb-2 fill-form d-none d-lg-block">Fill out the form</h3>
                <p className="text">
                  Our counsellors will get in touch with you at your preferred time. You can have all your queries
                  answered.
                </p>
                <p className="pt-2 text">
                  Once you decide that SLA is the perfect fit for your training needs, our counselors will guide you
                  through the process every step of the way.
                </p>
                <ul className="query-list">
                  <li>
                    <p>Course time</p>
                  </li>
                  <li>
                    <p>Course Syllabus</p>
                  </li>
                  <li>
                    <p>Course Fees</p>
                  </li>
                  <li>
                    <p>or any other questions...</p>
                  </li>
                </ul>
                <div className="call-us">
                  <h2 className="call-text">You can also give us a Call</h2>
                  <a href="tel:+917416939333" className="telNo-btn">
                    <img src="/assets/home/banner/phone-icon.svg" alt="" />
                    <span className="tel-no">+91 741-693-9333</span>{" "}
                  </a>
                </div>
              </div>
              <div className="col-12 col-lg-6 order-1 order-lg-2">
                <h3 className=" fill-form d-lg-none d-block text-center">Fill out the form</h3>
                <CourseForm courseSlug="html-css-javascript" />
              </div>
            </div>
          </div>
        </div>
        <section className="course-breakdown-main-sec">
          <div className="container">
            <h2>
              HTML, CSS and JavaScript Course <br />
              <span>Breakdown</span>
            </h2>
            <div className="course-breakdown-main-card">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="courses-breakdown-card">
                    <h3>100%</h3>
                    <p>Hands-on Training</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="courses-breakdown-card courses-breakdown-even-card">
                    <h3>3-5</h3>
                    <p>Real Time Projects</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="courses-breakdown-card">
                    <h3>70-100</h3>
                    <p>Practical Assignments</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="courses-breakdown-card courses-breakdown-even-card">
                    <h3>3+</h3>
                    <p>Assessments / Mock Interviews</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-details-main">
              <div className="course-details-card">
                <img width={48} height={48} loading="lazy" src="/assets/courses/calendar-icon.svg" alt="week" />
                <p>Mon - Fri</p>
              </div>
              <div className="course-details-card">
                <img width={41} height={41} loading="lazy" src="/assets/courses/online-icon.svg" alt="online-offline" />
                <p>Online/Offline</p>
              </div>
              <div className="course-details-card">
                <img width={40} height={40} loading="lazy" src="/assets/courses/time-icon.svg" alt="1 hour real time" />
                <p>
                  <span>1 Hour</span> Real time interactive teaching
                </p>
              </div>
              <div className="course-details-card">
                <img
                  width={34}
                  height={40}
                  loading="lazy"
                  src="/assets/courses/real-time.svg"
                  alt="2 hours real time task"
                />
                <p>
                  <span>2 Hours</span> Real time Task
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="course-details-sec-main">
          <div className="container">
            <div className="row align-items-center text-center mb-4">
              <div className="col-12 col-lg-5">
                <h2>Course Syllabus</h2>
              </div>
              <div className="col-12 col-lg-7 text-xl-end">
                <button
                  type="button"
                  className="course-syllabus-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#centeredModal"
                >
                  {" "}
                  <span>Download</span> | HTML-CSS-Javascript Course Syllabus{" "}
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h2>HTML</h2>
                <div className="accordion course-syllabus-accordion" id="accordionExample">
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">1</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        {" "}
                        Introduction to HTML{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>What is HTML?</li>
                          <li>HTML Document Structure</li>
                          <li>Basic HTML Tags</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">2</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        {" "}
                        Core HTML Topics{" "}
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>HTML Headings</li>
                          <li>HTML Paragraphs</li>
                          <li>HTML Formatting</li>
                          <li>HTML Blocks</li>
                          <li>HTML Images</li>
                          <li>HTML Attributes</li>
                          <li>HTML Links</li>
                          <li>HTML Lists</li>
                          <li>HTML Comments</li>
                          <li>HTML Styles</li>
                          <li>HTML Classes</li>
                          <li>Iframe Tag</li>
                          <li>Tables and Forms</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">3</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        {" "}
                        HTML5 Features{" "}
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>HTML5 Semantics</li>
                          <li>Multimedia Tags</li>
                          <li>New form input types and attributes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h2>CSS</h2>
                <div className="accordion course-syllabus-accordion" id="accordionExample2">
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">1</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCssOne"
                        aria-expanded="true"
                        aria-controls="collapseCssOne"
                      >
                        {" "}
                        Introduction to CSS{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseCssOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>What is CSS?</li>
                          <li>Linking CSS to HTML</li>
                          <li>Inline, Internal, and External Stylesheets</li>
                          <li>CSS Syntax, Selectors and Specificity</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">2</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCssTwo"
                        aria-expanded="false"
                        aria-controls="collapseCssTwo"
                      >
                        {" "}
                        Core CSS Topics{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseCssTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Box Model</li>
                          <li>Colors and Backgrounds</li>
                          <li>Display Property</li>
                          <li>Positioning Elements</li>
                          <li>Floats and Clearing</li>
                          <li>Typography</li>
                          <li>Gradients</li>
                          <li>Pseudo-classes and Pseudo-elements</li>
                          <li>Transform Properties</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">3</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCssThree"
                        aria-expanded="false"
                        aria-controls="collapseCssThree"
                      >
                        {" "}
                        CSS Transitions and Animations{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseCssThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Transition Propertites</li>
                          <li>Creating Smooth Transitions</li>
                          <li>Keyframes and Animations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">4</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCssFour"
                        aria-expanded="false"
                        aria-controls="collapseCssFour"
                      >
                        {" "}
                        Responsive Design with CSS{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseCssFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Flexbox and Grid Layout</li>
                          <li>Media Queries</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h2>JavaScript</h2>
                <div className="accordion course-syllabus-accordion" id="accordionExample3">
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">1</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCssOne"
                        aria-expanded="true"
                        aria-controls="collapseCssOne"
                      >
                        {" "}
                        Introduction to JavaScript{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseCssOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample3"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Understanding the basics of Javascript</li>
                          <li>Basic Syntax and Variables</li>
                          <li>Data types and Operators</li>
                          <li>Conditional Statements and Loops</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">2</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCssTwo"
                        aria-expanded="false"
                        aria-controls="collapseCssTwo"
                      >
                        {" "}
                        Core concepts{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseCssTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample3"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Comments</li>
                          <li>Variables and Scope</li>
                          <li>Events and Eventlistners</li>
                          <li>JavaScript DOM</li>
                          <li>Functions</li>
                          <li>Hoisting</li>
                          <li>Clousers</li>
                          <li>Working with Arrays, Strings and Objects</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">3</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCssThree"
                        aria-expanded="false"
                        aria-controls="collapseCssThree"
                      >
                        {" "}
                        Advanced Topics in JavaScript{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseCssThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample3"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>JavaScript ES6+</li>
                          <li>Asynchronous JavaScript</li>
                          <li>Higher order Functions</li>
                          <li>Call back functions ,Promises and Async Await</li>
                          <li>Working with APIs and JSON</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CourseFaqs items={faqs} />
      </main>
      <SiteFooter />
    </>
  );
}
