import CourseForm from "@/components/forms/CourseForm";
import CourseFormSection from "@/components/sections/CourseFormSection";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "@/styles/courses/course-stack.css";
import CourseFaqs, { type Faq } from "@/components/sections/CourseFaqs";
import CourseSeo, { courseMetadata } from "@/components/seo/CourseSeo";

export const metadata = courseMetadata("python");

const faqs: Faq[] = [
  {
    q: "Is Python suitable for beginners?",
    a: "Yes, Python is very suitable for beginners due to its simple and readable syntax. It allows new programmers to focus on learning programming concepts without getting bogged down by complex syntax.",
  },
  {
    q: "What are the key differences between Python 2 and Python 3?",
    a: "The key differences include improvements in syntax and standard libraries in Python 3. Python 3 has better Unicode support, improved integer division, and more consistent libraries. Python 2 is no longer supported, so it is recommended to use Python 3.",
  },
  {
    q: "How can I install Python on my computer?",
    a: 'You can install Python by downloading the installer from the official Python website (python.org) and running it. Make sure to check the box that says "Add Python to PATH" during installation. You can also use package managers like Homebrew for macOS or apt-get for Linux.',
  },
  {
    q: "What is the best IDE for Python development?",
    a: "Some popular IDEs for Python development include PyCharm, Visual Studio Code, and Jupyter Notebook. Each has its own set of features, and the best choice depends on your specific needs and preferences",
  },
  {
    q: "How can I debug my Python code?",
    a: "You can debug your Python code using built-in tools like the pdb module for command-line debugging or using IDEs like PyCharm and Visual Studio Code, which have integrated debugging tools. Adding print statements to your code is also a simple way to debug.",
  },
  {
    q: "What are virtual environments and why should I use them?",
    a: "Virtual environments in Python are isolated environments that allow you to manage dependencies for different projects separately. They prevent conflicts between packages and ensure that each project has the correct dependencies. You can create a virtual environment using venv or virtualenv modules.",
  },
  {
    q: "How can I manage packages in Python?",
    a: "You can manage packages in Python using pip, which is the package installer for Python. You can install, upgrade, and remove packages using pip commands. For example, pip install package_name installs a package.",
  },
  {
    q: "What are Python libraries and frameworks, and why are they important?",
    a: "Python libraries are collections of modules and functions that provide specific functionality, while frameworks are collections of libraries that offer a structure for application development. They are important because they simplify development by providing pre-written code for common tasks. Examples include NumPy, Pandas, Django, and Flask.",
  },
  {
    q: "How can I improve the performance of my Python code?",
    a: "You can improve the performance of your Python code by optimizing algorithms, using efficient data structures, leveraging built-in functions and libraries, and avoiding unnecessary computations. Profiling tools like cProfile can help identify bottlenecks in your code.",
  },
  {
    q: "What is the Pythonic way of writing code?",
    a: "Writing Pythonic code means following Python's conventions and best practices, such as using clear and descriptive variable names, following the PEP 8 style guide, using list comprehensions for concise code, and writing functions that do one thing well.",
  },
];

export default function PythonPage() {
  return (
    <>
      <CourseSeo courseSlug="python" />
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
              <CourseForm courseSlug="python" />
            </div>
          </div>
        </div>
      </div>
      <main className="course-stack">
        <div className="courses-main-banner-sec">
          <SiteHeader />
          <div className="container">
            <div className="course-banner-sec-heading">
              <img src="/assets/courses/python/operators.svg" alt="operators" />{" "}
              <img src="/assets/courses/python/tuples.svg" alt="tuples" />
              <div className="course-banner-heading-main">
                <h1>
                  Python
                  <span className="visually-hidden"> Programming Course in Nellore</span>
                </h1>
              </div>
              <img src="/assets/courses/python/generators.svg" alt="generators" />{" "}
              <img src="/assets/courses/python/dictionaries.svg" alt="dictionaries" />
            </div>
          </div>
        </div>
        <section className="about-course-sec-main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>
                  <span>About</span> Python
                </h2>
                <p>
                  <span>Python</span> has become one of the most popular programming languages in recent years.
                  It&apos;s been used in everything from machine learning to building websites and software testing.
                  Developers and non-developers alike find it useful
                </p>
                <p>
                  Python, one of the most popular programming languages in the world, has created everything from
                  Netflix’s recommendation algorithm to the software that controls self-driving cars. Python is a
                  general-purpose language, used to create a range of applications, including data science, software and
                  web development, automation, and improving the ease of everyday tasks.
                </p>
              </div>
            </div>
            <button type="button" className="model-blk-btn" data-bs-toggle="modal" data-bs-target="#centeredModal">
              {" "}
              <span>Download</span> | Python Syllabus{" "}
            </button>
          </div>
        </section>
        <section className="course-includes">
          <div className="container">
            <div className="head">
              <h2>
                <span>What </span> this Course includes ?
              </h2>
            </div>
            <div className="cards-part">
              <div className="row align-items-center justify-content-center">
                <div className="col-12 col-lg-4 ">
                  <div className="card m-3 ">
                    <div className="d-flex flex-column align-items-center gap-3">
                      <img
                        src="/assets/course-includes/technology-training.svg"
                        className="img-fluid"
                        alt="technology-training"
                      />
                      <h5 className="card-title">Technology Training</h5>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="card m-3 ">
                    <div className="d-flex flex-column align-items-center gap-3">
                      <img
                        src="/assets/course-includes/practice-assignments.svg"
                        className="img-fluid"
                        alt="pratice-assignments"
                      />
                      <h5 className="card-title">Practice Assignments</h5>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="card m-3 ">
                    <div className="d-flex flex-column align-items-center gap-3">
                      <img src="/assets/course-includes/doubt-solving.svg" className="img-fluid" alt="doubt-solving" />
                      <h5 className="card-title">1:1 Doubt solving</h5>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="card m-3 ">
                    <div className="d-flex flex-column align-items-center gap-3">
                      <img
                        width={115}
                        height={141}
                        loading="lazy"
                        src="/assets/course-includes/lern-to-crack.svg"
                        className="img-fluid"
                        alt="learn -to-crack-interviews"
                      />
                      <h5 className="card-title">Learn to Crack Interviews</h5>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="card m-3 ">
                    <div className="d-flex flex-column align-items-center gap-3">
                      <img
                        width={135}
                        height={132}
                        loading="lazy"
                        src="/assets/course-includes/mock-interviews.svg"
                        className="img-fluid"
                        alt="Mock-interviews"
                      />
                      <h5 className="card-title">Panel Mock Interview</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CourseFormSection courseSlug="python" />
        <section className="course-breakdown-main-sec">
          <div className="container">
            <h2>
              Python Course <br />
              <span>Breakdown</span>
            </h2>
            <div className="course-breakdown-main-card">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="courses-breakdown-card">
                    <h3>100%</h3>
                    <p>Hands-on Training</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="courses-breakdown-card courses-breakdown-even-card">
                    <h3>70-100</h3>
                    <p>Practical Assignments</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="courses-breakdown-card">
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
                  <span>2 Hours</span> Practice Time
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
                  <span>Download</span> | Python Course Syllabus{" "}
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
                        Python Introduction and Setting up the Environment{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Introduction to Programming</li>
                          <li>Choosing Python</li>
                          <li>Setting up Python environment</li>
                          <li>Python IDEs</li>
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
                        Python Basic Syntax and Data Types{" "}
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Input/output</li>
                          <li>Comments</li>
                          <li>Variables</li>
                          <li>Data types</li>
                          <li>Typecasting</li>
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
                        Operators in Python{" "}
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Arithmetic</li>
                          <li>Assignment</li>
                          <li>Comparison</li>
                          <li>Logical</li>
                          <li>Identity</li>
                          <li>Membership</li>
                          <li>Bitwise operators</li>
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
                        Strings in Python{" "}
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Creating</li>
                          <li>Formatting</li>
                          <li>Indexing</li>
                          <li>Slicing</li>
                          <li>String methods</li>
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
                        Control Flow Statements{" "}
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Creating</li>
                          <li>Properties</li>
                          <li>Indexing</li>
                          <li>Slicing</li>
                          <li>Methods</li>
                          <li>Modifying lists</li>
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
                        Tuples in Python{" "}
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Syntax</li>
                          <li>Properties</li>
                          <li>Indexing</li>
                          <li>Slicing</li>
                          <li>Methods</li>
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
                        Sets in Python{" "}
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Syntax</li>
                          <li>Updating</li>
                          <li>Operations</li>
                          <li>Methods</li>
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
                        Dictionaries in Python{" "}
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Syntax</li>
                          <li>Keys/values</li>
                          <li>Accessing</li>
                          <li>Function Pointers</li>
                          <li>Methods</li>
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
                        Python Conditional Statements{" "}
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>If</li>
                          <li>if-else</li>
                          <li>if-elif-else</li>
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
                        Loops in Python{" "}
                      </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>while</li>
                          <li>for</li>
                          <li>break</li>
                          <li>continue</li>
                          <li>pass</li>
                          <li>range</li>
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
                        List and Dictionary Comprehensions{" "}
                      </button>
                    </h2>
                    <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Syntax</li>
                          <li>Uses</li>
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
                        data-bs-target="#collapseTwelve"
                        aria-expanded="false"
                        aria-controls="collapseTwelve"
                      >
                        {" "}
                        Functions in Python{" "}
                      </button>
                    </h2>
                    <div id="collapseTwelve" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Creating</li>
                          <li>Calling</li>
                          <li>Arguments</li>
                          <li>Variables</li>
                          <li>Recursion</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">13</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThirteen"
                        aria-expanded="false"
                        aria-controls="collapseThirteen"
                      >
                        {" "}
                        Anonymous Functions{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseThirteen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Lambda functions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">14</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseForteen"
                        aria-expanded="false"
                        aria-controls="collapseForteen"
                      >
                        {" "}
                        Generators in Python
                      </button>
                    </h2>
                    <div
                      id="collapseForteen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Creating</li>
                          <li>Using generators</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">15</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFifteen"
                        aria-expanded="false"
                        aria-controls="collapseFifteen"
                      >
                        {" "}
                        Modules in Python
                      </button>
                    </h2>
                    <div
                      id="collapseFifteen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Creating</li>
                          <li>Importing</li>
                          <li>Built-in modules</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">16</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSixteen"
                        aria-expanded="false"
                        aria-controls="collapseSixteen"
                      >
                        {" "}
                        Packages &amp; Data Analysis{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseSixteen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Creating packages</li>
                          <li>NumPy</li>
                          <li>Pandas</li>
                          <li>Matplotlib</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">17</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeventeen"
                        aria-expanded="false"
                        aria-controls="collapseSeventeen"
                      >
                        {" "}
                        Date &amp; Time
                      </button>
                    </h2>
                    <div
                      id="collapseSeventeen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Date</li>
                          <li>Time</li>
                          <li>datetime modules</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">18</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEighteen"
                        aria-expanded="false"
                        aria-controls="collapseEighteen"
                      >
                        {" "}
                        Regex in Python
                      </button>
                    </h2>
                    <div
                      id="collapseEighteen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>re module</li>
                          <li>Common functions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">19</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseNinteen"
                        aria-expanded="false"
                        aria-controls="collapseNinteen"
                      >
                        {" "}
                        Files in Python{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseNinteen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Opening</li>
                          <li>Reading</li>
                          <li>Writing</li>
                          <li>Closing files</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">20</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwenty"
                        aria-expanded="false"
                        aria-controls="collapseTwenty"
                      >
                        {" "}
                        Python object oriented{" "}
                      </button>
                    </h2>
                    <div id="collapseTwenty" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Overview of OOP</li>
                          <li>The self variable</li>
                          <li>Constructor</li>
                          <li>Types Of Variables</li>
                          <li>Namespaces</li>
                          <li>Creating Classes and Objects</li>
                          <li>Inheritance</li>
                          <li>Polymorphism</li>
                          <li>Data abstraction</li>
                          <li>Encapsulation</li>
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
