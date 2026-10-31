import CourseForm from "@/components/forms/CourseForm";
import CourseFormSection from "@/components/sections/CourseFormSection";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "@/styles/courses/course-stack.css";
import CourseFaqs, { type Faq } from "@/components/sections/CourseFaqs";
import CourseSeo, { courseMetadata } from "@/components/seo/CourseSeo";

export const metadata = courseMetadata("cpp");

const faqs: Faq[] = [
  {
    q: "Is C++ a good language to start learning programming?",
    a: "Yes, C++ is a great language to start learning programming, especially if you want to understand both procedural and object-oriented programming concepts. It is a versatile language used in various domains like game development, system software, and applications requiring high performance.",
  },
  {
    q: "What are the key features of C++?",
    a: "Key features of C++ include object-oriented programming, rich standard library, performance and efficiency, low-level memory manipulation, support for generic programming with templates, and strong type checking. These features make C++ suitable for a wide range of applications..",
  },
  {
    q: "How is C++ different from C?",
    a: "C++ is an extension of C and includes all features of C along with additional features like classes, inheritance, polymorphism, and templates. C++ supports object-oriented programming, while C is a procedural programming language. This makes C++ more suitable for complex software development.",
  },
  {
    q: "Where is C++ used in the industry?",
    a: "C++ is used in various industries for developing operating systems, game engines, desktop applications, real-time systems, embedded systems, and performance-critical applications. It is also used in finance, telecommunications, and scientific research for simulation and modeling.",
  },
  {
    q: "Is C++ relevant for modern software development?",
    a: "Yes, C++ remains highly relevant for modern software development. It is widely used in applications where performance and resource management are critical. The language continues to evolve with new standards (e.g., C++11, C++14, C++17, C++20) that introduce modern programming features and improvements.",
  },
  {
    q: "How long does it take to learn C++?",
    a: "The time required to learn C++ varies depending on your prior programming experience and commitment. Beginners may take several months to become proficient in C++, while those with experience in other programming languages might learn faster. Continuous practice and building projects can enhance learning.",
  },
  {
    q: "Can I use C++ for web development?",
    a: "While C++ is not commonly used for web development, it can be used to build web applications, particularly for backend services where performance is critical. Frameworks like CGI, Wt, and Crow allow C++ to be used in web development, but languages like JavaScript, Python, PHP, and Ruby are more commonly used.",
  },
  {
    q: "What is the role of Standard Template Library (STL) in C++?",
    a: "The Standard Template Library (STL) in C++ is a powerful set of template-based classes and functions that provide commonly used data structures and algorithms. It includes components like vectors, lists, stacks, queues, maps, and algorithms for searching, sorting, and manipulating data. STL enhances productivity and code reuse.",
  },
  {
    q: "Is C++ suitable for game development?",
    a: "Yes, C++ is one of the most popular languages for game development due to its performance and control over hardware. Many game engines, such as Unreal Engine and Unity, use C++ for their core development. It allows developers to create high-performance, resource-efficient games.",
  },
  {
    q: "What are some popular C++ libraries and frameworks?",
    a: "Popular C++ libraries and frameworks include Boost (a collection of portable C++ libraries), Qt (a framework for cross-platform GUI development), SFML (Simple and Fast Multimedia Library), OpenCV (computer vision library), and POCO (a collection of C++ class libraries for network-centric applications). These tools extend C++ capabilities and simplify development.",
  },
];

export default function CppPage() {
  return (
    <>
      <CourseSeo courseSlug="cpp" />
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
              <CourseForm courseSlug="cpp" />
            </div>
          </div>
        </div>
      </div>
      <main className="course-stack">
        <div className="courses-main-banner-sec">
          <SiteHeader />
          <div className="container">
            <div className="course-banner-sec-heading">
              <img src="/assets/courses/cpp/Programming.svg" alt="programming" />{" "}
              <img src="/assets/courses/cpp/data-types.svg" alt="datatypes" />
              <div className="course-banner-heading-main">
                <h1>
                  C++
                  <span className="visually-hidden"> Programming Course in Nellore</span>
                </h1>
                <div className="course-banner-sub">
                  <span>Programming</span> <span>language</span>
                </div>
              </div>
              <img src="/assets/courses/cpp/functions.svg" alt="functions" />{" "}
              <img src="/assets/courses/cpp/opps.svg" alt="oops" />
            </div>
          </div>
        </div>
        <section className="about-course-sec-main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>
                  <span>About</span> C++ language
                </h2>
                <p>
                  <span>C++ </span>is a statically typed, compiled, general-purpose, case-sensitive, free-form
                  programming language that supports <span>procedural, object-oriented, and generic programming</span>
                </p>
                <p>
                  <span>C++</span> is regarded as a middle-level language, as it comprises a combination of both
                  high-level and low-level language features.
                </p>
              </div>
            </div>
            <button type="button" className="model-blk-btn" data-bs-toggle="modal" data-bs-target="#centeredModal">
              {" "}
              <span>Download</span> | C++ Language Syllabus{" "}
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
        <CourseFormSection courseSlug="cpp" />
        <section className="course-breakdown-main-sec">
          <div className="container">
            <h2>
              C++ Language Course <br />
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
                  <span>Download</span> | C++ Language Course Syllabus{" "}
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
                        Introduction C++{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>History, Features</li>
                          <li>Rules of C++ programming</li>
                          <li>Structure of C++ program</li>
                          <li>C++ Tokens</li>
                          <li>Identifiers, Keywords, Constants, Operators, Special characters</li>
                          <li>C++ Data types</li>
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
                        Basic programming{" "}
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Console I/O Statements(cin, cout)</li>
                          <li>Programs to perform various calculations</li>
                          <li>Operators</li>
                          <li>Programs to implement various operators</li>
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
                        Control statements{" "}
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Conditional Control Statements</li>
                          <li>If-else , switch-case</li>
                          <li>Loops</li>
                          <li>While, do while, for</li>
                          <li>Implementing programs on conditional &amp; loops</li>
                          <li>break, continue, goto keywords</li>
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
                        Arrays{" "}
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Definition, advantages</li>
                          <li>Array types</li>
                          <li>Single dimension</li>
                          <li>Double dimension</li>
                          <li>Declaration, accessing array data</li>
                          <li>Implementation of array operations</li>
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
                        Functions
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Definition, advantages, types of functions, classification</li>
                          <li>Implementing various kinds of functions</li>
                          <li>Unconditional Branching using goto statement</li>
                          <li>Inline functions</li>
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
                        Object Oriented Programming{" "}
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Defining a Class ,creating Objects</li>
                          <li>Accessing Data Members using objects</li>
                          <li>Calling Member Functions using objects</li>
                          <li>
                            Implementing Array of Objects, objects as parameters &amp; return type, new , this operators
                          </li>
                          <li>Scope resolution operator</li>
                          <li>access specifiers(private, public, protected)</li>
                          <li>Implementing Static Data Members</li>
                          <li>Implementing Static Member Functions</li>
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
                        Function Overloading{" "}
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>What is function over loading</li>
                          <li>About operator keyword, rules of operator overloading</li>
                          <li>Overloading various operators</li>
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
                        Constructors &amp; Destructors
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Definition, uses</li>
                          <li>Types (Default Constructor, Parameter Constructor, Copy Constructor)</li>
                          <li>Destructors</li>
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
                        Friend Function &amp; Friend classes{" "}
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Friend Function definition, usage of friend keyword</li>
                          <li>Implementing of friend functions in various scenarios</li>
                          <li>Friend Class definition, usage</li>
                          <li>Standard String Library Functions</li>
                          <li>Implementing of friend class</li>
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
                        Inheritance{" "}
                      </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Definition, Advantages</li>
                          <li>Types of Inheritances (Single, Hierarchical, Multilevel, Multiple Hybrid)</li>
                          <li>Implementing various kinds of inheritances</li>
                          <li>Implementing various constructors in inheritance</li>
                          <li>Implementing function over riding</li>
                          <li>Implementing various access levels in inheritance</li>
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
                        Virtual Functions &amp; Abstract Classes{" "}
                      </button>
                    </h2>
                    <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Definition, requirement,</li>
                          <li>How to implement</li>
                          <li>Pure virtual function definition</li>
                          <li>Implementing abstract classes</li>
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
                        Templates{" "}
                      </button>
                    </h2>
                    <div id="collapseTwelve" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Template Definition</li>
                          <li>Generic Function</li>
                          <li>Generic Class</li>
                          <li>Template function Overloading</li>
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
                        I/O Streams &amp; Files
                      </button>
                    </h2>
                    <div
                      id="collapseThirteen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Streams Hierarchy</li>
                          <li>Input Streams &amp; Output Streams</li>
                          <li>What is File?</li>
                          <li>
                            Implementing various file operations on basic data types(write, read, append and modify)
                          </li>
                          <li>
                            Implementing various file operations on object data types(write, read, append and modify)
                          </li>
                          <li>Random Access Files(seekp, seekg, tellp, tellg)</li>
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
                        Formatted IO
                      </button>
                    </h2>
                    <div
                      id="collapseForteen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>IO Flags</li>
                          <li>IO Functions</li>
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
                        Exception Handling{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseFifteen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Try, catch, throw</li>
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
