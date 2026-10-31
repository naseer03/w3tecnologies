import CourseForm from "@/components/forms/CourseForm";
import CourseFormSection from "@/components/sections/CourseFormSection";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "@/styles/courses/course-stack.css";
import CourseFaqs, { type Faq } from "@/components/sections/CourseFaqs";
import CourseSeo, { courseMetadata } from "@/components/seo/CourseSeo";

export const metadata = courseMetadata("graphic-design");

const faqs: Faq[] = [
  {
    q: "What is the primary focus of this graphic design course?",
    a: "This course focuses on teaching the fundamentals and advanced techniques of graphic design using Adobe Photoshop and Illustrator. You will learn to create and edit images, design logos, develop illustrations, and produce professional-quality graphics.",
  },
  {
    q: "Do I need prior experience in graphic design to take this course?",
    a: "No prior experience is required. This course is designed to accommodate beginners as well as those with some knowledge of graphic design. It covers basic concepts and progresses to more advanced techniques.",
  },
  {
    q: "What are the main differences between Adobe Photoshop and Illustrator?",
    a: "Adobe Photoshop is primarily used for photo editing, image manipulation, and raster-based design. Illustrator, on the other hand, is used for creating vector-based graphics such as logos, icons, and illustrations. Each tool has its strengths, and this course will teach you when and how to use both effectively.",
  },
  {
    q: "How will learning Photoshop and Illustrator benefit my career?",
    a: "Proficiency in Photoshop and Illustrator is highly valued in the graphic design industry. These skills open up career opportunities in various fields such as advertising, branding, web design, multimedia production, and more. They are essential tools for any graphic designer.",
  },
  {
    q: "What projects will I work on during this course?",
    a: "You will work on a variety of projects including photo retouching, digital painting, creating logos, designing posters, and developing vector illustrations. These hands-on projects will help you build a diverse portfolio showcasing your skills.",
  },
  {
    q: "Can I get a certification upon completing this course?",
    a: "Yes, many graphic design courses offer a certification upon successful completion. This certification can enhance your resume and demonstrate your proficiency in Adobe Photoshop and Illustrator to potential employers.",
  },
  {
    q: "What resources will be available during the course?",
    a: "Resources may include video tutorials, step-by-step guides, project files, assignments, and access to online forums for peer support. Instructors may also provide one-on-one assistance and feedback to help you improve your skills.",
  },
  {
    q: "What career opportunities are available for graphic designers proficient in Photoshop and Illustrator?",
    a: "Career opportunities include roles such as Graphic Designer, Digital Illustrator, Web Designer, UX/UI Designer, Art Director, and Creative Director. These skills are also valuable for freelance work and starting your own design business.",
  },
  {
    q: "How long does it take to become proficient in Photoshop and Illustrator?",
    a: "The time to become proficient varies depending on your learning pace and dedication. Generally, it can take a few months to a year of consistent practice and learning to master the essential tools and techniques.",
  },
  {
    q: "Is this course suitable for freelancers and entrepreneurs?",
    a: "Yes, this course is suitable for freelancers and entrepreneurs who want to create professional-quality graphics for their own projects or clients. The skills learned will help you produce high-quality designs and enhance your creative capabilities.",
  },
  {
    q: "What is the importance of learning graphic design in today's job market?",
    a: "Graphic design is crucial in today's job market as businesses rely heavily on visual communication to connect with their audience. Skilled graphic designers are in demand for creating compelling visuals that enhance brand identity, marketing efforts, and user experiences.",
  },
  {
    q: "How can I practice what I learn in this course?",
    a: "Practice is essential to mastering graphic design. You can practice by working on personal projects, participating in design challenges, volunteering for design work, and completing the assignments provided in the course. Additionally, seeking feedback from peers and instructors can help you improve.",
  },
];

export default function GraphicDesignPage() {
  return (
    <>
      <CourseSeo courseSlug="graphic-design" />
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
              <CourseForm courseSlug="graphic-design" />
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
                  Graphic
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
                  <span>About</span> Graphic Designing
                </h2>
                <p>
                  <span>Graphic design</span> is the practice of creating and using visual or textual content to
                  communicate ideas to an audience or elicit a specific effect.
                </p>
                <p>
                  Visuals in this context can take on many forms. From a company logo, event flyer, newspaper layout,
                  business website, mobile app, or video game, graphic design encompasses many different media and
                  sub-categories.
                </p>
                <p>
                  Graphic designs are often created with a specific goal in mind, usually relating to a company or
                  business plan. The design choices should align with this goal to produce a visually pleasing yet
                  practical creation: graphic design is like art but guided by business objectives.
                </p>
              </div>
            </div>
            <button type="button" className="model-blk-btn" data-bs-toggle="modal" data-bs-target="#centeredModal">
              {" "}
              <span>Download</span> | Graphic Designing Course Syllabus{" "}
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
                <div className="col-12 col-lg-4">
                  <div className="card m-3 ">
                    <div className="d-flex flex-column align-items-center gap-3">
                      <img
                        width={130}
                        height={130}
                        loading="lazy"
                        src="/assets/course-includes/designing/canva.svg"
                        className="img-fluid"
                        alt="canva"
                      />
                      <h5 className="card-title">canva</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CourseFormSection courseSlug="graphic-design" />
        <section className="course-breakdown-main-sec">
          <div className="container">
            <h2>
              Graphic Designing Course <br />
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
                  <span>Download</span> | Graphic Designing Course Syllabus{" "}
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
                        Introduction to the Principles of Designing{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>
                            Student will be introduced to the Graphic Design Industry through magazines, brochures,
                            internet etc
                          </li>
                          <li>Get acquainted with the history of Graphic Designing</li>
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
                        Elements of Design{" "}
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>
                            Students will get an insight into the principles and elements of design, their use and
                            applications in the goal of solving various design problems.
                          </li>
                          <li>
                            Students will study different graphic elements :-{" "}
                            <ul className="ps-5">
                              <li>Lines</li>
                              <li>Colour</li>
                              <li>Shape</li>
                              <li>Space</li>
                              <li>Texture</li>
                              <li>Value</li>
                            </ul>
                          </li>
                          <li>
                            They will learn to see, feel and interpret the elements of Design through projects and thus
                            develop the necessary skills required in the field of Visual Communication.
                          </li>
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
                        Typography{" "}
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>
                            Students will learn to create a business proposal and branding for that business. They will
                            learn:-{" "}
                            <ul className="ps-5">
                              <li>Anatomy of a letter</li>
                              <li>Typefaces</li>
                              <li>Typographic Measurements</li>
                              <li>Typographic Standards</li>
                              <li>Typographic Guidelines</li>
                            </ul>
                          </li>
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
                        Colour for Designers{" "}
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Understanding the importance and use of colour in design.</li>
                          <li>colour theory</li>
                          <li>research and effective combinations for effective visual communication.</li>
                          <li>digital colours</li>
                          <li>generating colours on the computer.</li>
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
                        Digital and Applied Illustration{" "}
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>
                            Introduction to the techniques for creating digital illustrations through the application of
                            two dimensional vector images
                          </li>
                          <li>
                            Students are trained to use Adobe Illustrator and Adobe Photoshop softwares to produce
                            digital images which may be required for book covers, magazines covers, film posters, album
                            covers, packaging, advertising, editorials and digital painting etc.
                          </li>
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
                        Image Processing{" "}
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>
                            Introduction to the techniques of image editing and photo-retouching using Adobe Photoshop
                            as a design tool.
                          </li>
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
                        Graphic Production{" "}
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>
                            Students will develop the skills and vocabulary necessary to prepare a project for print
                            production.
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
                        Publication Design{" "}
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>
                            Students will learn the subject of design for professional publications which includes
                            magazines, with an emphasis placed on developing innovative modern concepts for defined
                            target audiences.
                          </li>
                          <li>Students will learn how to assemble and work as a full-functioning publication team .</li>
                          <li>
                            Students will apply the principles they learned in page layout, advanced layout and
                            production and graphic production by using dynamic grid systems, professional binding
                            techniques, choosing appropriate paper stocks and working with special printing effects and
                            finishes.
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
                        Adobe Photoshop{" "}
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <p>
                          Creates original Art &amp; converts it to desired file formats and platforms Retouch,
                          manipulate &amp; enhance photographs of Digital arts for Photo-Albums Create special effects
                          for Images to give it a pro look on Brochures.
                        </p>
                        <div className="d-lg-flex">
                          <ul className="ps-4">
                            <li>The Toolbox , Menus</li>
                            <li>Workplaces, Shortcuts</li>
                            <li>Different Selection Tools</li>
                            <li>Transform Tools</li>
                            <li>Image Mixing Tools</li>
                            <li>Image retouching Tools</li>
                            <li>Gradient, pattern Tools</li>
                            <li>Create Different Shaping Tools</li>
                            <li>Typing Tools</li>
                            <li>Shape &amp; Path Different</li>
                            <li>Create Brush</li>
                            <li>Create Pattern</li>
                            <li>Create Custom Shape</li>
                            <li>Rename a Layer</li>
                            <li>Position the Layers</li>
                            <li>Layer Opacity</li>
                          </ul>
                          <ul className="ps-4">
                            <li>Link Layers</li>
                            <li>Invisible Layers</li>
                            <li>Duplicate Layers</li>
                            <li>Selection Layers</li>
                            <li>Layer Styles</li>
                            <li>Merge Layers</li>
                            <li>Layer Mask</li>
                            <li>Vector Mask</li>
                            <li>Clipping Mask</li>
                            <li>Smart Object Layer</li>
                            <li>Filter Gallery</li>
                            <li>Blur Gallery</li>
                            <li>Light Effects</li>
                            <li>Create Texture</li>
                            <li>Create Text Effects</li>
                            <li>Lens Effects</li>
                          </ul>
                        </div>
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
                        Adobe Illustrator{" "}
                      </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <div className="d-lg-flex">
                          <ul className="ps-4">
                            <li>Design a logo, Business card</li>
                            <li>Create Holidays, a Christmas card</li>
                            <li>Design a character, Package Designing, Banner Designing</li>
                            <li>Tracing Work, Layout Work</li>
                            <li>Ruler, Guides, Grids, Workspace</li>
                            <li>Toolbox, Pen tool, Basic Shapes</li>
                            <li>Editing shapes, Grouping, Transform</li>
                            <li>Shape Distort Tools</li>
                            <li>Symbol Editing Tools</li>
                            <li>Graph Tools, Type Tools, Brush Tool, Gradient Tool</li>
                            <li>Live paint,Live trace</li>
                            <li>Path Blend,Envelope</li>
                            <li>Edit Menu, Select Menu</li>
                            <li>Illustrator filters, Distort, Stylize</li>
                          </ul>
                          <ul className="ps-4">
                            <li>Photoshop Filters</li>
                            <li>Illustrator effects</li>
                            <li>Convert to shape</li>
                            <li>Distort,Transform</li>
                            <li>Effects gallery</li>
                            <li>Create 3D Glass,Pen</li>
                            <li>3D properties</li>
                            <li>Apply Symbols</li>
                            <li>Create New Symbols</li>
                            <li>3D Logo</li>
                            <li>3D Rotation</li>
                            <li>3D Shine, Matt effects</li>
                            <li>Convert 3D to Shape</li>
                          </ul>
                        </div>
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
