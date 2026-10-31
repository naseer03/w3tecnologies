import CourseForm from "@/components/forms/CourseForm";
import CourseFormSection from "@/components/sections/CourseFormSection";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "@/styles/courses/course-stack.css";
import CourseFaqs, { type Faq } from "@/components/sections/CourseFaqs";
import CourseSeo, { courseMetadata } from "@/components/seo/CourseSeo";

export const metadata = courseMetadata("ui-ux-design");

const faqs: Faq[] = [
  {
    q: "What is the difference between UI and UX design?",
    a: "UI (User Interface) design focuses on the look and feel of a product, including the design of screens, buttons, icons, and overall visual elements. UX (User Experience) design is about the overall experience a user has with a product, including usability, ease of navigation, and how the product meets the user's needs.",
  },
  {
    q: "Do I need a background in design to take this course?",
    a: "No, you don't need a background in design to take this course. It is designed for beginners as well as those with some design experience. The course will cover the basics and progress to more advanced concepts, making it accessible to all learners.",
  },
  {
    q: "What tools will I learn to use in this UI/UX design course?",
    a: "You will learn to use industry-standard tools such as Adobe XD, Sketch, Figma, InVision, and possibly others like Photoshop and Illustrator for creating UI elements. These tools will help you design and prototype user interfaces and experiences.",
  },
  {
    q: "How long does it take to become proficient in UI/UX design?",
    a: "The time to become proficient varies depending on your learning pace and dedication. Typically, it can take a few months to a year of consistent practice and learning to master the essential skills and tools needed for UI/UX design.",
  },
  {
    q: "What kind of projects will I work on during the course?",
    a: "You will work on projects such as creating wireframes, designing user interfaces, building interactive prototypes, conducting user research, and performing usability testing. These projects will help you build a portfolio showcasing your skills.",
  },
  {
    q: "What career opportunities are available for UI/UX designers?",
    a: "Career opportunities include roles such as UI Designer, UX Designer, Product Designer, Interaction Designer, UX Researcher, and UX Strategist. These skills are in high demand across various industries, including tech, healthcare, finance, and e-commerce.",
  },
  {
    q: "How does UI/UX design impact the success of a product?",
    a: "UI/UX design greatly impacts the success of a product by ensuring it is user-friendly, visually appealing, and meets the needs of its users. Good design can improve user satisfaction, increase engagement, and drive business growth by enhancing the overall user experience.",
  },
  {
    q: "Is this course suitable for freelancers and entrepreneurs?",
    a: "Yes, this course is suitable for freelancers and entrepreneurs who want to create user-friendly and visually appealing designs for their own projects or clients. The skills learned will help you produce high-quality designs and improve user experiences.",
  },
  {
    q: "Will I learn about user research and testing in this course?",
    a: "Yes, the course will cover user research methods such as interviews, surveys, and usability testing. You will learn how to gather insights from users, analyze data, and apply findings to improve your designs.",
  },
  {
    q: "Can I get a certification upon completing the UI/UX design course?",
    a: "Yes, many UI/UX design courses offer a certification upon successful completion. This certification can enhance your resume and demonstrate your proficiency in UI/UX design to potential employers.",
  },
  {
    q: "What is the importance of wireframing and prototyping in UI/UX design?",
    a: "Wireframing and prototyping are crucial steps in UI/UX design as they help visualize the structure and functionality of a product before development. Wireframes outline the layout, while prototypes allow for interactive testing and validation of design concepts.",
  },
  {
    q: "How can I build a strong portfolio for UI/UX design?",
    a: "Building a strong portfolio involves showcasing your best work, including projects that demonstrate your skills in user research, wireframing, prototyping, and visual design. Highlight your design process, include case studies, and provide context for each project. Continuously update your portfolio with new and improved designs.",
  },
];

export default function UiUxDesignPage() {
  return (
    <>
      <CourseSeo courseSlug="ui-ux-design" />
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
              <CourseForm courseSlug="ui-ux-design" />
            </div>
          </div>
        </div>
      </div>
      <main className="course-stack">
        <div className="courses-main-banner-sec">
          <SiteHeader />
          <div className="container">
            <div className="course-banner-sec-heading">
              <img src="/assets/courses/graphic-designing/figma.svg" alt="figma" />{" "}
              <img src="/assets/courses/graphic-designing/illustrator.svg" alt="illustrator" />
              <div className="course-banner-heading-main">
                <h1>
                  UI/UX
                  <span className="visually-hidden"> Design Course in Nellore</span>
                </h1>
                <div className="course-banner-sub">
                  <span>Designing</span>
                </div>
              </div>
              <img src="/assets/courses/graphic-designing/photoshop.svg" alt="photoshop" />{" "}
              <img src="/assets/courses/graphic-designing/xd.svg" alt="xd" />
            </div>
          </div>
        </div>
        <section className="about-course-sec-main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>
                  <span>About</span> UI/UX Designing
                </h2>
                <p>
                  <span>UI/UX designing</span> is a popular course that focuses on the creation of user-friendly and
                  visually appealing interfaces. The course also covers the design of websites and applications.
                  Students pursuing UI/UX design courses will learn various topics such as research, prototyping, HTML,
                  CSS, wireframing, and user testing.
                </p>
                <p>
                  UI/UX design courses are popular in the field of Design and play a key role in creating digital
                  products that are safe and secure. Some of the career options available after completing UI/UX design
                  courses include roles as aspiring designers, web developers, UX consultants, UI designers, and UX
                  researchers.
                </p>
              </div>
            </div>
            <button type="button" className="model-blk-btn" data-bs-toggle="modal" data-bs-target="#centeredModal">
              {" "}
              <span>Download</span> | UI/UX Designing Course Syllabus{" "}
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
                        width={130}
                        height={130}
                        loading="lazy"
                        src="/assets/course-includes/designing/Ai.svg"
                        className="img-fluid"
                        alt="ai"
                      />
                      <h5 className="card-title">Illustrator</h5>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="card m-3 ">
                    <div className="d-flex flex-column align-items-center gap-3">
                      <img
                        width={130}
                        height={130}
                        loading="lazy"
                        src="/assets/course-includes/designing/figma.svg"
                        className="img-fluid"
                        alt="figama"
                      />
                      <h5 className="card-title">Figma</h5>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="card m-3 ">
                    <div className="d-flex flex-column align-items-center gap-3">
                      <img
                        width={130}
                        height={130}
                        loading="lazy"
                        src="/assets/course-includes/designing/Ps.svg"
                        className="img-fluid"
                        alt="ps"
                      />
                      <h5 className="card-title">Photo Shop</h5>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="card m-3 ">
                    <div className="d-flex flex-column align-items-center gap-3">
                      <img
                        width={130}
                        height={130}
                        loading="lazy"
                        src="/assets/course-includes/designing/xd.svg"
                        className="img-fluid"
                        alt="xd"
                      />
                      <h5 className="card-title">Xd</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CourseFormSection courseSlug="ui-ux-design" />
        <section className="course-breakdown-main-sec">
          <div className="container">
            <h2>
              UI/UX Designing Course <br />
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
                  <span>Download</span> | UI/UX Designing Course Syllabus{" "}
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
                        How &amp; when to use common UI patterns{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Menus Tabs</li>
                          <li>Bottom tab bar</li>
                          <li>Buttons (including “Call to action” or CTA)</li>
                          <li>Accordion</li>
                          <li>Carousel</li>
                          <li>Breadcrumbs</li>
                          <li>Modals</li>
                          <li>Forms</li>
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
                        Create Visual Designs &amp; Clickable Prototypes{" "}
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>
                            Learn how to use Figma to create clickable prototypes to show users for testing, or for
                            clients to see your work.
                          </li>
                          <li>Design the UI (user interface of websites, apps, etc) in Figma.</li>
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
                        Intersection of Design, Technology, &amp; Business{" "}
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>
                            Through critical analysis understand how user experience as a field sits in the intersection
                            of different areas of the product
                          </li>
                          <li>What is the difference between User Experience Design and User Interface Design?</li>
                          <li>Learn about heuristics and apply heuristic evaluation to websites</li>
                          <li>Competitive Research</li>
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
                        Knowing Your User{" "}
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>
                            Learn how to structure and conduct user interviews to better identify the needs and current
                            behaviors of the user
                          </li>
                          <li>
                            Understand how to engage the user to work through assumptions and preconceived notions that
                            arise during the process
                          </li>
                          <li>Write down assumptions for your class project.</li>
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
                        User Research Through Interviews{" "}
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Refine user interview questions</li>
                          <li>Interview classmates for your project</li>
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
                        Refining User Research and Creating Personas{" "}
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>
                            Create user personas from the interviews to represent the goals and behaviors of the users
                            within the system
                          </li>
                          <li>Develop user scenarios to show when and how the user engages with the system</li>
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
                        Synthesis of User Research, Journey Maps, and User Flows{" "}
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Continue to synthesize results of user research to find patterns</li>
                          <li>Create a journey map for your project.</li>
                          <li>Think through the different features of the system by building user flows.</li>
                          <li>
                            Take the written narrative to the next level through sketching and improvising using
                            techniques such as storyboarding and bodystorming
                          </li>
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
                        Wireframing, Sketching, Prototyping{" "}
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>
                            Practice a sketching session for an existing website or mobile application of your choice.
                            Start with sketching on a whiteboard or your notebook
                          </li>
                          <li>Sketch wireframes for your class project.</li>
                          <li>
                            Learn the power of prototyping and testing an idea. Understand different methods of
                            prototyping and their levels of fidelity.
                          </li>
                          <li>
                            Discuss the motivation behind the prototyping, such as newly discovered user goals, business
                            needs and improved functionality.
                          </li>
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
                        Prototyping &amp; User Testing{" "}
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>User testing methods and strategies.</li>
                          <li>Do’s and don’ts of user testing.</li>
                          <li>Do a user test on your project with a classmate.</li>
                          <li>
                            Clearly list the assumptions and test your concepts. Work on multiple iterations of the
                            prototype based on the test results.
                          </li>
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
                        Iterating the Prototype and Further User Testing{" "}
                      </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Report conclusions based on user testing</li>
                          <li>User testing reports.</li>
                          <li>Rework the prototype based on user testing conclusions.</li>
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
                        Wireframing{" "}
                      </button>
                    </h2>
                    <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Why and How to Create Wireframes</li>
                          <li>Issues to Solve</li>
                          <li>Steps in Creating a Wireframe</li>
                          <li>Designing on a Grid System (like Bootstrap)</li>
                          <li>Get Critiques</li>
                          <li>Incorporate Feedback &amp; Improve Your Designs</li>
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
                        Wireframe to Refined Design{" "}
                      </button>
                    </h2>
                    <div id="collapseTwelve" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Display Text (Such as Headings) versus Body Text</li>
                          <li>Understanding the Mobile Experience</li>
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
                        Typography &amp; Fonts{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseThirteen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Display Text (Such as Headings) versus Body Text</li>
                          <li>Legibility</li>
                          <li>Type Trends</li>
                          <li>Typeface Selection &amp; Pairing</li>
                          <li>Where to Get Web Fonts</li>
                          <li>Ideal Line Height</li>
                          <li>Column Width (Line Length)</li>
                          <li>Hyphenation &amp; Justification</li>
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
                        Design Elements{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseForteen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Proximity</li>
                          <li>Similarity</li>
                          <li>Continuity</li>
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
                        data-bs-target="#collapseSixteen"
                        aria-expanded="false"
                        aria-controls="collapseSixteen"
                      >
                        {" "}
                        Multiple Screen Sizes{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseSixteen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Responsive Web Design</li>
                          <li>Mobile Considerations &amp; Limitations</li>
                          <li>Discoverability Challenges</li>
                          <li>Mobile Navigation</li>
                          <li>Phone vs Tablet App Design</li>
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
