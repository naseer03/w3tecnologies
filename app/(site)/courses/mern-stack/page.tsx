import CourseForm from "@/components/forms/CourseForm";
import CourseIncludes from "@/components/sections/CourseIncludes";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "@/styles/courses/course-stack.css";
import CourseFaqs, { type Faq } from "@/components/sections/CourseFaqs";
import CourseSeo, { courseMetadata } from "@/components/seo/CourseSeo";

export const metadata = courseMetadata("mern-stack");

const faqs: Faq[] = [
  {
    q: "What is the MERN stack?",
    a: "The MERN stack is a combination of four technologies used for web development: MongoDB, Express.js, React.js, and Node.js. Together, these technologies enable full-stack development using JavaScript for both the front-end and back-end.",
  },
  {
    q: "Do I need prior programming experience to take this course?",
    a: "While having some programming experience, particularly with JavaScript, can be helpful, it is not mandatory. This course is designed to accommodate beginners as well as those with some coding knowledge, covering fundamental concepts and progressing to more advanced topics.",
  },
  {
    q: "What will I learn in a MERN stack development course?",
    a: "You will learn how to build dynamic web applications using MongoDB for the database, Express.js for the server-side framework, React.js for the front-end library, and Node.js for the runtime environment. The course will cover setting up the development environment, CRUD operations, RESTful APIs, authentication, and deploying applications.",
  },
  {
    q: "How long does it take to become proficient in MERN stack development?",
    a: "The time to become proficient varies based on your learning pace and the course's depth. Generally, it can take several months to a year of consistent practice and learning to master the necessary skills for MERN stack development.",
  },
  {
    q: "What career opportunities are available for MERN stack developers?",
    a: "Career opportunities include roles such as Fullstack Developer, Frontend Developer, Backend Developer, Web Developer, and Software Engineer. MERN stack skills are in high demand in industries such as tech, finance, healthcare, and e-commerce.",
  },
  {
    q: "Will I receive a certification upon completing the MERN stack development course?",
    a: "Many MERN stack development courses offer a certification upon successful completion. This certification can validate your skills and knowledge, enhancing your resume and increasing your employability in the job market.",
  },
  {
    q: "Can I build real-world applications during this course?",
    a: "Yes, this course includes practical projects where you will build real-world applications. These projects help you apply the concepts learned, gain hands-on experience, and build a portfolio to showcase your skills to potential employers.",
  },
  {
    q: "Is the MERN stack suitable for freelancers and entrepreneurs?",
    a: "Absolutely. The MERN stack is highly suitable for freelancers and entrepreneurs who want to build and manage their own web applications. The ability to handle both front-end and back-end development makes you more versatile and self-sufficient.",
  },
  {
    q: "What is the importance of learning the MERN stack for modern web development?",
    a: "Learning the MERN stack is important for modern web development because it covers the entire spectrum of web application development using a single language, JavaScript. This consistency can lead to faster development times, easier debugging, and a more cohesive development process.",
  },
];

export default function MernStackPage() {
  return (
    <>
      <CourseSeo courseSlug="mern-stack" />
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
              <CourseForm courseSlug="mern-stack" />
            </div>
          </div>
        </div>
      </div>
      <main className="course-stack">
        <div className="courses-main-banner-sec">
          <SiteHeader />
          <div className="container">
            <div className="course-banner-sec-heading">
              <img src="/assets/courses/ReactJs.svg" alt="reactjs" />{" "}
              <img src="/assets/courses/ExpressJs.svg" alt="expressjs" />
              <div className="course-banner-heading-main">
                <h1>
                  MERN
                  <span className="visually-hidden"> Stack Developer Course in Nellore</span>
                </h1>
                <div className="course-banner-sub">
                  <span>Full Stack</span> <span>Development</span>
                </div>
              </div>
              <img src="/assets/courses/MongoDB.svg" alt="mangoDB" />{" "}
              <img src="/assets/courses/Node.js.svg" alt="nodejs" />
            </div>
          </div>
        </div>
        <section className="about-course-sec-main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>
                  <span>About</span> MERN Full Stack Development
                </h2>
                <p>
                  The term <span>MERN</span> stands for <span>MongoDB, Express, React, and Node.js</span> which are the
                  four technologies that make up the stack. When creating highly dynamic and scalable online apps,
                  developers find that the MERN stack offers a streamlined development environment. Knowing the MERN
                  stack can lead to great job prospects in the IT industry, as the demand for dynamic and data-intensive
                  web applications is expanding.
                </p>
              </div>
            </div>
            <button type="button" className="model-blk-btn" data-bs-toggle="modal" data-bs-target="#centeredModal">
              {" "}
              <span>Download</span> | MERN Full Stack Syllabus{" "}
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
              <h2>mern Full-Stack Developer course?</h2>
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
                <CourseForm courseSlug="mern-stack" />
              </div>
            </div>
          </div>
        </div>
        <section className="course-breakdown-main-sec">
          <div className="container">
            <h2>
              MERN Full-Stack Developer Course <br />
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
            <div className="row align-items-center text-center">
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
                  <span>Download</span> | MERN Full-Stack Developer Course Syllabus{" "}
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
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
                        Basic frontend{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>JavaScript</li>
                          <li>Adv. JavaScript</li>
                          <li>Bootstrap</li>
                          <li>SASS</li>
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
                        React{" "}
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>React Introduction</li>
                          <li>Lists &amp; keys</li>
                          <li>State &amp; Hooks</li>
                          <li>Context API</li>
                          <li>React router</li>
                          <li>React bootstrap</li>
                          <li>Material UI</li>
                          <li>Server-side deployment</li>
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
                        Backend{" "}
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>NodeJs</li>
                          <li>EXpressJs</li>
                          <li>Rest API</li>
                          <li>Unit-Testing</li>
                          <li>Deployment</li>
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
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        {" "}
                        Database{" "}
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>MYSQL</li>
                          <li>MongoDB</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">5</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        {" "}
                        Tools{" "}
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>GitHub</li>
                          <li>Docker</li>
                          <li>Kubernetes</li>
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
