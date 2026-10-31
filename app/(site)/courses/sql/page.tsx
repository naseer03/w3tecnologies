import CourseForm from "@/components/forms/CourseForm";
import CourseFormSection from "@/components/sections/CourseFormSection";
import CourseIncludes from "@/components/sections/CourseIncludes";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "@/styles/courses/course-stack.css";
import CourseFaqs, { type Faq } from "@/components/sections/CourseFaqs";
import CourseSeo, { courseMetadata } from "@/components/seo/CourseSeo";

export const metadata = courseMetadata("sql");

const faqs: Faq[] = [
  {
    q: "What is MySQL, and why should I learn it?",
    a: "MySQL is a widely-used open-source relational database management system (RDBMS). Learning MySQL is essential for managing and interacting with databases, which is a critical skill in web development, data analysis, and various IT fields.",
  },
  {
    q: "Do I need prior database knowledge to take this course?",
    a: "Prior database knowledge is helpful but not mandatory. This course is designed for beginners and will cover fundamental concepts before progressing to more advanced topics.",
  },
  {
    q: "What will I learn in a MySQL course?",
    a: "You will learn about relational database concepts, SQL (Structured Query Language), database design, data manipulation, querying databases, indexing, and advanced features like stored procedures, triggers, and views.",
  },
  {
    q: "How long does it take to become proficient in MySQL?",
    a: "The time to become proficient varies based on your learning pace and dedication. Generally, it can take a few weeks to a few months of consistent practice and learning to master the essential skills needed for MySQL.",
  },
  {
    q: "What career opportunities are available for those skilled in MySQL?",
    a: "Career opportunities include roles such as Database Administrator (DBA), Data Analyst, Backend Developer, Data Engineer, and Fullstack Developer. MySQL skills are in high demand across various industries, including tech, finance, healthcare, and e-commerce.",
  },
  {
    q: "Will I receive a certification upon completing the MySQL course?",
    a: "Many MySQL courses offer a certification upon successful completion. This certification can validate your skills and knowledge, enhancing your resume and increasing your employability in the job market.",
  },
  {
    q: "How is MySQL different from other database management systems?",
    a: "MySQL is known for its performance, reliability, and ease of use. Compared to other database systems like PostgreSQL, Oracle, or SQL Server, MySQL is often favored for web applications and is widely supported by web hosting services.",
  },
  {
    q: "Can I work on real-world projects during this course?",
    a: "Yes, this course includes practical projects where you will work on real-world scenarios. These projects help you apply the concepts learned, gain hands-on experience, and build a portfolio to showcase your skills to potential employers.",
  },
  {
    q: "What is the importance of learning MySQL for modern web development?",
    a: "Learning MySQL is important for modern web development because it is a foundational skill for managing and querying databases. Many web applications rely on MySQL for storing and retrieving data efficiently.",
  },
];

export default function SqlPage() {
  return (
    <>
      <CourseSeo courseSlug="sql" />
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
              <CourseForm courseSlug="sql" />
            </div>
          </div>
        </div>
      </div>
      <main className="course-stack">
        <div className="courses-main-banner-sec">
          <SiteHeader />
          <div className="container">
            <div className="course-banner-sec-heading">
              <img src="/assets/courses/sql/tables.svg" alt="tables" />{" "}
              <img src="/assets/courses/sql/joins.svg" alt="joins" />
              <div className="course-banner-heading-main">
                <h1>
                  MYSQL
                  <span className="visually-hidden"> Database Course in Nellore</span>
                </h1>
              </div>
              <img src="/assets/courses/sql/functions.svg" alt="crud" />{" "}
              <img src="/assets/courses/sql/crud.svg" alt="crud" />{" "}
              <img src="/assets/courses/sql/views.svg" alt="views" className="d-none d-sm-block" />
            </div>
          </div>
        </div>
        <section className="about-course-sec-main">
          <div className="container">
            <div className="row">
              <div className="col-12 ">
                <h2>
                  <span>About</span> MySQL
                </h2>
                <p>
                  MySQL is popular among all databases, and is ranked as the 2nd most popular database, only slightly
                  trailing Oracle Database. Among open source databases, MySQL is the most popular database in use
                  today. Known as one of the most reliable and performative databases out there, it was named after it’s
                  founders daughter My, and is known for organizing data into one or more data tables in which data
                  types are related to each other. These relations help structure data, as SQL is a language programmers
                  use for creation, modification and extraction of data from a relational database.
                </p>
                <p>
                  MySQL uses standalone clients that allow users to interact with MySQL, and also to use it with other
                  programs for applications that need relational database capabilities. MySQL&apos;s reputation for
                  reliability has led to its inclusion in the popular LAMP stack (Linux, Apache, MySQL, Python/Perl/PHP)
                  and is also used as the default DBMS in popular CMS options like Drupal, Joomla, phpBB, and WordPress.
                </p>
                <button type="button" className="model-blk-btn" data-bs-toggle="modal" data-bs-target="#centeredModal">
                  {" "}
                  <span>Download</span> | MySQL Syllabus{" "}
                </button>
              </div>
            </div>
          </div>
        </section>
        <CourseIncludes />
        <CourseFormSection courseSlug="sql" />
        <section className="course-breakdown-main-sec">
          <div className="container">
            <h2>
              MySQL Course <br />
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
                  <span>Download</span> | MySQL Course Syllabus{" "}
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
                        MYSQL Concepts{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Introduction</li>
                          <li>Types of database systems</li>
                          <li>Entity and Relationship</li>
                          <li>Sql basics</li>
                          <li>Primary key</li>
                          <li>Foreign key</li>
                          <li>DDL statements</li>
                          <li>Normalization</li>
                          <li>DML statements</li>
                          <li>Sorting Data</li>
                          <li>Group by</li>
                          <li>Having</li>
                          <li>Exists</li>
                          <li>Any</li>
                          <li>All</li>
                          <li>Null functions</li>
                          <li>Aliases</li>
                          <li>Wildcards</li>
                          <li>Concat function</li>
                          <li>Concat function</li>
                          <li>count function</li>
                          <li>Avg function</li>
                          <li>Sum function</li>
                          <li>Like</li>
                          <li>Where</li>
                          <li>And or not</li>
                          <li>Max function</li>
                          <li>In</li>
                          <li>Case expression</li>
                          <li>Order by</li>
                          <li>Joins</li>
                          <li>Types of joins</li>
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
