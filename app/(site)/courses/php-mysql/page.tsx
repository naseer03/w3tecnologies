import CourseForm from "@/components/forms/CourseForm";
import CourseFormSection from "@/components/sections/CourseFormSection";
import CourseIncludes from "@/components/sections/CourseIncludes";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "@/styles/courses/course-stack.css";
import CourseFaqs, { type Faq } from "@/components/sections/CourseFaqs";
import CourseSeo, { courseMetadata } from "@/components/seo/CourseSeo";

export const metadata = courseMetadata("php-mysql");

const faqs: Faq[] = [
  {
    q: "What is PHP, and why should I learn it?",
    a: "PHP is a popular server-side scripting language used primarily for web development. Learning PHP can enhance your ability to create dynamic and interactive websites, and it is widely used in the industry, powering many large-scale web applications.",
  },
  {
    q: "Do I need prior programming experience to take this course?",
    a: "Basic knowledge of HTML and general programming concepts can be helpful but is not mandatory. This course is designed to accommodate beginners and will cover PHP fundamentals before progressing to more advanced topics.",
  },
  {
    q: "What career opportunities are available for PHP developers?",
    a: "Career opportunities include roles such as Web Developer, Fullstack Developer, Backend Developer, and PHP Developer. PHP skills are in high demand across various industries, including tech, finance, e-commerce, and digital agencies.",
  },
  {
    q: "Will I receive a certification upon completing the PHP course?",
    a: "Many PHP courses offer a certification upon successful completion. This certification can validate your skills and knowledge, enhancing your resume and increasing your employability in the job market.",
  },
  {
    q: "Is PHP still relevant in today's web development landscape?",
    a: "Yes, PHP remains highly relevant and is used by many popular websites and content management systems, including WordPress, Drupal, and Joomla. It continues to evolve with regular updates and improvements, making it a reliable choice for web development.",
  },
  {
    q: "Can I build real-world applications during this course?",
    a: "Yes, this course includes practical projects where you will build real-world applications. These projects help you apply the concepts learned, gain hands-on experience, and build a portfolio to showcase your skills to potential employers.",
  },
  {
    q: "How does PHP compare to other server-side languages?",
    a: "PHP is known for its ease of use, extensive documentation, and large community support. Compared to other server-side languages like Python, Ruby, or Node.js, PHP is particularly suited for web development and integrates seamlessly with HTML.",
  },
  {
    q: "What is the importance of learning PHP for modern web development?",
    a: "Learning PHP is important for modern web development because it is widely used, especially in content management systems and e-commerce platforms. It provides the tools to build robust, dynamic websites and applications efficiently.",
  },
  {
    q: "Is PHP suitable for freelancers and entrepreneurs?",
    a: "Yes, PHP is highly suitable for freelancers and entrepreneurs who want to build and manage their own web applications. Its flexibility, wide usage, and extensive support make it an excellent choice for developing custom solutions.",
  },
];

export default function PhpMysqlPage() {
  return (
    <>
      <CourseSeo courseSlug="php-mysql" />
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
              <CourseForm courseSlug="php-mysql" />
            </div>
          </div>
        </div>
      </div>
      <main className="course-stack">
        <div className="courses-main-banner-sec">
          <SiteHeader />
          <div className="container">
            <div className="course-banner-sec-heading">
              <img src="/assets/courses/php/include.svg" alt="include" />{" "}
              <img src="/assets/courses/php/mysql.svg" alt="mysql" />
              <div className="course-banner-heading-main">
                <h1>
                  PHP &amp; MySQL
                  <span className="visually-hidden"> Course in Nellore</span>
                </h1>
              </div>
              <img src="/assets/courses/php/sessions.svg" alt="sessions" />{" "}
              <img src="/assets/courses/php/joins.svg" alt="joins" />
            </div>
          </div>
        </div>
        <section className="about-course-sec-main">
          <div className="container">
            <div className="row">
              <div className="col-12 ">
                <h2>
                  <span>About</span> PHP &amp; MySQL
                </h2>
                <p>
                  PHP is a server-side scripting language, which is used to manage dynamic web pages, databases and
                  build websites with features like session tracking and e-commerce. On a day of 1995, Rasmus Lerdorf
                  unleashed the first version of “Hypertext Preprocessor” also known as the PHP language. It is also
                  integrated with several popular databases like MySQL, PostgreSQL, Microsoft SQL Server, Oracle etc.
                </p>
                <button type="button" className="model-blk-btn" data-bs-toggle="modal" data-bs-target="#centeredModal">
                  {" "}
                  <span>Download</span> | PHP &amp; MySQL Syllabus{" "}
                </button>
              </div>
            </div>
          </div>
        </section>
        <CourseIncludes />
        <CourseFormSection courseSlug="php-mysql" />
        <section className="course-breakdown-main-sec">
          <div className="container">
            <h2>
              PHP &amp; MySQL Course <br />
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
                  <span>Download</span> | PHP &amp; MySQL Course Syllabus{" "}
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
                        An Introduction to PHP{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>History of PHP</li>
                          <li>Versions and Differences between them</li>
                          <li>Practicality</li>
                          <li>Power</li>
                          <li>Installation and configuring Apache and PHP</li>
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
                        PHP Basics{" "}
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Styles of PHP Tags</li>
                          <li>Comments in PHP</li>
                          <li>Output functions in PHP</li>
                          <li>Datatypes in PHP</li>
                          <li>Configuration Settings</li>
                          <li>Error Types</li>
                          <li>Variables in PHP</li>
                          <li>Constants in PHP</li>
                          <li>Control Structures</li>
                          <li>Functions</li>
                          <li>Arrays</li>
                          <li>Include Functions</li>
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
                        Regular Expressions{" "}
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Validating text boxes,emails,phone number,etc</li>
                          <li>Creating custom regular expressions</li>
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
                        Object-Oriented Programming in PHP{" "}
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Classes, Objects, Fields, Properties, _set(), Constants, Methods</li>
                          <li>Encapsulation</li>
                          <li>Inheritance and types</li>
                          <li>Polymorphism</li>
                          <li>Constructor and Destructor</li>
                          <li>Static Class Members, Instance of Keyword, Helper Functions</li>
                          <li>Object Cloning and Copy</li>
                          <li>Reflections</li>
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
                        PHP with MySQL{" "}
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Integration with MySQL</li>
                          <li>MySQL functions</li>
                          <li>Gmail Data Grid options</li>
                          <li>SQL Injection</li>
                          <li>Uploading and downloading images in Database</li>
                          <li>Registration and Login forms with validations</li>
                          <li>Pagging and Sorting.</li>
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
                        Working with the Files and Operating System{" "}
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>File Functions</li>
                          <li>Open, Create and Delete files</li>
                          <li>Create Directories and Manipulate them</li>
                          <li>Information about Hard Disk</li>
                          <li>Directory Functions</li>
                          <li>Calculating File, Directory and Disk Sizes</li>
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
                        Error and Exception Handling{" "}
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Error Logging</li>
                          <li>Configuration Directives</li>
                          <li>PHP’s Exception Class</li>
                          <li>Throw New Exception</li>
                          <li>Custom Exceptions</li>
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
                        Authentication{" "}
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>HTTP Authentication</li>
                          <li>PHP Authentication</li>
                          <li>Authentication Methodologies</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">9</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseNine"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                      >
                        {" "}
                        Cookies{" "}
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Why Cookies</li>
                          <li>Types of Cookies</li>
                          <li>How to Create and Access Cookies</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">10</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTen"
                        aria-expanded="false"
                        aria-controls="collapseTen"
                      >
                        {" "}
                        Sessions{" "}
                      </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Session Variables</li>
                          <li>Creating and Destroying a Session</li>
                          <li>Retrieving and Setting the Session ID</li>
                          <li>Encoding and Decoding Session Data</li>
                          <li>Auto-Login</li>
                          <li>Recently Viewed Document Index</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">11</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEleven"
                        aria-expanded="false"
                        aria-controls="collapseEleven"
                      >
                        {" "}
                        Web Services{" "}
                      </button>
                    </h2>
                    <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Why Web Services</li>
                          <li>RSS Syntax</li>
                          <li>SOAP</li>
                          <li>How to Access Web Services</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">12</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwleve"
                        aria-expanded="false"
                        aria-controls="collapseTwleve"
                      >
                        {" "}
                        MySQL Concepts{" "}
                      </button>
                    </h2>
                    <div id="collapseTwleve" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Introduction</li>
                          <li>Storage Engines</li>
                          <li>Functions</li>
                          <li>Operators</li>
                          <li>Constraints</li>
                          <li>DDL commands</li>
                          <li>DML Commands</li>
                          <li>DCL Command</li>
                          <li>TCL Commands</li>
                          <li>Views</li>
                          <li>Joins</li>
                          <li>Cursors</li>
                          <li>Indexing</li>
                          <li>Stored Procedures</li>
                          <li>Mysql with PHP Programming</li>
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
