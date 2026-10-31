import CourseForm from "@/components/forms/CourseForm";
import CourseFormSection from "@/components/sections/CourseFormSection";
import CourseIncludes from "@/components/sections/CourseIncludes";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "@/styles/courses/course-stack.css";
import CourseFaqs, { type Faq } from "@/components/sections/CourseFaqs";
import CourseSeo, { courseMetadata } from "@/components/seo/CourseSeo";

export const metadata = courseMetadata("python-fullstack");

const faqs: Faq[] = [
  {
    q: "What is Python Fullstack development?",
    a: "Python Fullstack development involves building both the front-end and back-end of web applications using Python and associated technologies. This includes designing user interfaces, managing databases, and creating server-side logic.",
  },
  {
    q: "Do I need prior programming experience to take this course?",
    a: "While having some programming experience can be helpful, it is not necessary. This course is designed for both beginners and those with some coding knowledge. It covers basic to advanced concepts in a step-by-step manner.",
  },
  {
    q: "What will I learn in a Python Fullstack development course?",
    a: "You will learn front-end technologies like HTML, CSS, and JavaScript, and back-end development using Python frameworks such as Django or Flask. The course also covers database management, RESTful API development, version control with Git, and deployment techniques.",
  },
  {
    q: "How long does it take to become proficient in Python Fullstack development?",
    a: "The time to become proficient varies based on your learning pace and the course's depth. Generally, it can take several months to a year of consistent practice and learning to master the necessary skills for fullstack development",
  },
  {
    q: "What tools and technologies will I use in this course?",
    a: "You will use front-end tools like HTML, CSS, JavaScript, and frameworks like React or Angular. For back-end development, you'll use Python with frameworks like Django or Flask. You'll also work with databases such as PostgreSQL or MongoDB, version control with Git, and deployment platforms like Heroku or AWS",
  },
  {
    q: "What career opportunities are available for Python Fullstack developers?",
    a: "Python Fullstack developers can pursue roles such as Fullstack Developer, Backend Developer, Frontend Developer, Web Developer, and Software Engineer. These skills are in high demand across various industries, including tech, finance, healthcare, and e-commerce",
  },
  {
    q: "Will I receive a certification upon completing the Python Fullstack development course?",
    a: "Many Python Fullstack development courses offer a certification upon successful completion. This certification can validate your skills and knowledge, enhancing your resume and increasing your employability in the job market",
  },
  {
    q: "Can I build real-world applications during this course?",
    a: "Yes, this course includes practical projects where you will build real-world applications. These projects help you apply the concepts learned, gain hands-on experience, and build a portfolio to showcase your skills to potential employers.",
  },
  {
    q: "Is Python Fullstack development suitable for freelancers and entrepreneurs?",
    a: "Absolutely. Python Fullstack development skills are highly valuable for freelancers and entrepreneurs who want to build and manage their own web applications. The ability to handle both front-end and back-end development can make you more versatile and self-sufficient",
  },
  {
    q: "What is the importance of learning both front-end and back-end development?",
    a: "Learning both front-end and back-end development makes you a versatile developer capable of handling all aspects of web development. This comprehensive skill set allows you to build complete web applications, troubleshoot issues across the stack, and collaborate effectively with other developers.",
  },
];

export default function PythonFullstackPage() {
  return (
    <>
      <CourseSeo courseSlug="python-fullstack" />
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
              <CourseForm courseSlug="python-fullstack" />
            </div>
          </div>
        </div>
      </div>
      <main className="course-stack">
        <div className="courses-main-banner-sec">
          <SiteHeader />
          <div className="container">
            <div className="course-banner-sec-heading">
              <img src="/assets/courses/full-stack/front-end.svg" alt="front-end" />{" "}
              <img src="/assets/courses/full-stack/back-end.svg" alt="backend" />
              <div className="course-banner-heading-main">
                <h1>
                  Python
                  <span className="visually-hidden"> Full Stack Developer Course in Nellore</span>
                </h1>
                <div className="course-banner-sub">
                  <span>Fullstack</span> <span>Development</span>
                </div>
              </div>
              <img src="/assets/courses/full-stack/framework.svg" alt="framework" />{" "}
              <img src="/assets/courses/full-stack/database.svg" alt="database " />
            </div>
          </div>
        </div>
        <section className="about-course-sec-main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>
                  <span>About</span> Python Fullstack
                </h2>
                <p>
                  Python full-stack developer is a web developer who uses Python as their main programming language to
                  handle all aspects of building a web application. They build the user interface that is the front end
                  as well as the back end of the website where server logic is stored using Python. For front-end
                  development, they generally use languages like HTML, CSS, and JavaScript but now a new front-end
                  Python framework is also used which is named PyScript. For the backend tasks frameworks like Django or
                  Flask are used. These developers bridge the gap between the client and the server which ensures the
                  website is fully functional across the entire application
                </p>
              </div>
            </div>
            <button type="button" className="model-blk-btn" data-bs-toggle="modal" data-bs-target="#centeredModal">
              {" "}
              <span>Download</span> | Python Fullstack course Syllabus{" "}
            </button>
          </div>
        </section>
        <CourseIncludes />
        <CourseFormSection courseSlug="python-fullstack" />
        <section className="course-breakdown-main-sec">
          <div className="container">
            <h2>
              Python Full Stack Course <br />
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
                  <span>Download</span> | Python Fullstack Course Syllabus{" "}
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
                        Core python{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Operators</li>
                          <li>Data types</li>
                          <li>Control statements</li>
                          <li>String handling</li>
                          <li>Data structures</li>
                          <li>Functions</li>
                          <li>Packages</li>
                          <li>Collections</li>
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
                        ADV. Python{" "}
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Oops</li>
                          <li>Regular expressions</li>
                          <li>Exception handling</li>
                          <li>PDBC (Database)</li>
                          <li>Network/ socket programming</li>
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
                        Database{" "}
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Mysql &amp; monogoDB</li>
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
                        python for data science{" "}
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Numpy</li>
                          <li>Pandas</li>
                          <li>Matplotlib</li>
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
                        Frameworks
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Django</li>
                          <li>Flask</li>
                          <li>Rest API</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">6</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        {" "}
                        User Interface{" "}
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>JavaScript</li>
                          <li>Bootstrap</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">7</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        {" "}
                        Angular
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Introduction to Angular</li>
                          <li>Typescript</li>
                          <li>Components Overview</li>
                          <li>Components &amp; Data-binding</li>
                          <li>Directives</li>
                          <li>Services &amp; Dependency Injection</li>
                          <li>Transport Output using Pipes</li>
                          <li>Changing Pages with Routing</li>
                          <li>Template Driven Forms</li>
                          <li>Reactive Forms</li>
                          <li>Making HTTP Requests</li>
                          <li>Authentication and Route Protection</li>
                          <li>Angular Modules and Optimizing Apps</li>
                          <li>HttpClient</li>
                          <li>Angular Animations</li>
                          <li>Unit Testing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">8</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEight"
                        aria-expanded="false"
                        aria-controls="collapseEight"
                      >
                        {" "}
                        Tools{" "}
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Git &amp; GitHub</li>
                          <li>Docker</li>
                          <li>Unit Testing</li>
                          <li>Integration Testing</li>
                          <li>AWS Basics</li>
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
