import CourseForm from "@/components/forms/CourseForm";
import CourseFormSection from "@/components/sections/CourseFormSection";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "@/styles/courses/course-stack.css";
import CourseFaqs, { type Faq } from "@/components/sections/CourseFaqs";
import CourseSeo, { courseMetadata } from "@/components/seo/CourseSeo";

export const metadata = courseMetadata("ms-office");

const faqs: Faq[] = [
  {
    q: "What is included in the MS Office suite?",
    a: "The MS Office suite typically includes Microsoft Word, Excel, PowerPoint, Outlook, Access, and OneNote. Some versions may also include additional tools like Publisher and Skype for Business.",
  },
  {
    q: "What is included in the MS Office suite?",
    a: "No, prior experience with MS Office is not required. The course is designed to accommodate beginners as well as those looking to enhance their skills. It will cover the basics and progress to more advanced features.",
  },
  {
    q: "Which version of MS Office will be used in the course?",
    a: "The course will generally use the latest version of MS Office available at the time. However, most of the skills and techniques taught are applicable to older versions as well. Specific version details will be provided at the start of the course.",
  },
  {
    q: "Is MS Office compatible with both Windows and Mac?",
    a: "Yes, MS Office is compatible with both Windows and Mac operating systems. However, there may be slight differences in the interface and features between the two versions, which the course will address as needed.",
  },
  {
    q: "Can I get a certification upon completing the MS Office course?",
    a: "Yes, many MS Office courses offer a certification upon successful completion. This certification can be valuable for showcasing your skills to potential employers and enhancing your resume.",
  },
  {
    q: "What are the key skills I will learn in this MS Office course?",
    a: "Key skills include creating and formatting documents in Word, building and analyzing spreadsheets in Excel, designing presentations in PowerPoint, managing emails and calendars in Outlook, and utilizing databases in Access. You will also learn tips and tricks to increase your productivity.",
  },
  {
    q: "How will learning MS Office benefit my career?",
    a: "Proficiency in MS Office is a highly valued skill in many industries. It enhances your productivity, allows for efficient data management and analysis, improves your ability to create professional documents and presentations, and is often a requirement for many job positions.",
  },
  {
    q: "How long does it take to complete the MS Office course?",
    a: "The duration of an MS Office course can vary, but it typically takes a few weeks to a few months to complete, depending on the depth and intensity of the course. Specific timelines will be provided by the course provider.",
  },
  {
    q: "What resources will be available to help me learn MS Office?",
    a: "Resources may include video tutorials, written guides, hands-on exercises, quizzes, and access to online forums for peer support. Additionally, instructors may provide one-on-one assistance and feedback.",
  },
  {
    q: "Can I access MS Office on mobile devices?",
    a: "Yes, Microsoft offers mobile versions of Word, Excel, PowerPoint, and Outlook for both iOS and Android devices. These apps allow you to view, edit, and create documents on the go, although some advanced features may be limited compared to the desktop versions.",
  },
];

export default function MsOfficePage() {
  return (
    <>
      <CourseSeo courseSlug="ms-office" />
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
              <CourseForm courseSlug="ms-office" />
            </div>
          </div>
        </div>
      </div>
      <main className="course-stack">
        <div className="courses-main-banner-sec">
          <SiteHeader />
          <div className="container">
            <div className="course-banner-sec-heading">
              <img src="/assets/courses/ms-office/word.svg" alt="word" />{" "}
              <img src="/assets/courses/ms-office/excel.svg" alt="excel" />
              <div className="course-banner-heading-main">
                <h1>
                  Ms Office
                  <span className="visually-hidden"> Course in Nellore</span>
                </h1>
              </div>
              <img src="/assets/courses/ms-office/Power-Point.svg" alt="power-point" />{" "}
              <img src="/assets/courses/ms-office/outlook.svg" alt="outlook" />
            </div>
          </div>
        </div>
        <section className="about-course-sec-main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>
                  <span>About</span> Ms-Office
                </h2>
                <p>
                  <span>Microsoft Office</span> is a suite of applications that helps people and businesses create
                  documents, analyze data, manage information, and communicate. The applications can handle a variety of
                  office functions, including
                </p>
                <div className="similarities">
                  <ul>
                    <li>
                      <span> Word processing:</span> Create, format, and edit documents, such as reports, letters, and
                      flyers
                    </li>
                    <li>
                      <span>Spreadsheets:</span> Create spreadsheets, use formulas, and make charts, such as simple
                      budgets and lists
                    </li>
                    <li>
                      <span>Presentations:</span> Create slides, add transitions, and design presentations
                    </li>
                    <li>
                      <span>Databases:</span> Build databases and store data in tables that can be related to other
                      tables
                    </li>
                    <li>
                      <span>Promotional material: </span>Design promotional material
                    </li>
                    <li>
                      <span>Communication: </span>Use an email client like Outlook
                    </li>
                    <li>
                      <span>Digital note-taking:</span> Use OneNote for digital note-taking
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <button type="button" className="model-blk-btn" data-bs-toggle="modal" data-bs-target="#centeredModal">
              {" "}
              <span>Download</span> | Ms-Office Course Syllabus{" "}
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
                        src="/assets/course-includes/ms-office/word.svg"
                        className="img-fluid"
                        alt="word"
                      />
                      <h5 className="card-title">Ms Word</h5>
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
                        src="/assets/course-includes/ms-office/excel.svg"
                        className="img-fluid"
                        alt="Excel"
                      />
                      <h5 className="card-title">Ms Excel</h5>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="card m-3">
                    <div className="d-flex flex-column align-items-center gap-3">
                      <img
                        width={130}
                        height={130}
                        loading="lazy"
                        src="/assets/course-includes/ms-office/ppt.svg"
                        className="img-fluid"
                        alt="ppt"
                      />
                      <h5 className="card-title">PowerPoint Presentation</h5>
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
                        src="/assets/course-includes/ms-office/teams.svg"
                        className="img-fluid"
                        alt="teams"
                      />
                      <h5 className="card-title">Teams</h5>
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
                        src="/assets/course-includes/ms-office/Ms-outlook.svg"
                        alt="outlook"
                      />
                      <h5 className="card-title">Outlook</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CourseFormSection courseSlug="ms-office" />
        <section className="course-breakdown-main-sec">
          <div className="container">
            <h2>
              Ms-Office Course <br />
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
                    <h3>30-50</h3>
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
                  <span>Download</span> | Ms-Office Course Syllabus{" "}
                </button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <div className="accordion course-syllabus-accordion mt-2" id="accordionExample">
                  <div className="accordion-item course-details-accordion-main">
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
                        MS WINDOWS, COMPUTER BASICS{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Computer Basic, Creating Folder, Paint</li>
                          <li>Directories, input units, Output unit</li>
                          <li>Central Processing Units</li>
                          <li>What is hard ware, what is Soft ware</li>
                          <li>Windows short cut keys</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <h2 className="mb-0">MS WORD</h2>
                <div className="accordion course-syllabus-accordion mt-2" id="accordionExample">
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">1</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsewordOne"
                        aria-expanded="true"
                        aria-controls="collapsewordOne"
                      >
                        {" "}
                        Text Basics{" "}
                      </button>
                    </h2>
                    <div
                      id="collapsewordOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Typing the text, Alignment of text</li>
                          <li>Editing Text: Cut, Copy, Paste, Select All, Clear</li>
                          <li>Find &amp; Replace Module</li>
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
                        data-bs-target="#collapsewordTwo"
                        aria-expanded="false"
                        aria-controls="collapsewordTwo"
                      >
                        {" "}
                        Text Formatting and saving file{" "}
                      </button>
                    </h2>
                    <div
                      id="collapsewordTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>New, Open, Close, Save, Save As</li>
                          <li>Formatting Text: Font Size, Font Style</li>
                          <li>Font Color, Use the Bold, Italic, and Underline</li>
                          <li>Change the Text Case</li>
                          <li>Line spacing, Paragraph spacing</li>
                          <li>Shading text and paragraph</li>
                          <li>Working with Tabs and Indents</li>
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
                        data-bs-target="#collapsewordThree"
                        aria-expanded="false"
                        aria-controls="collapsewordThree"
                      >
                        {" "}
                        Working with Objects{" "}
                      </button>
                    </h2>
                    <div
                      id="collapsewordThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Shapes, Clipart and Picture, Word Art, Smart Art</li>
                          <li>Columns and Orderings - To Add Columns to a Document</li>
                          <li>Change the Order of Objects</li>
                          <li>Page Number, Date &amp; Time</li>
                          <li>Inserting Text boxes</li>
                          <li>Inserting Word art</li>
                          <li>Inserting symbols</li>
                          <li>Inserting Chart</li>
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
                        data-bs-target="#collapsewordFour"
                        aria-expanded="false"
                        aria-controls="collapsewordFour"
                      >
                        {" "}
                        Header &amp; Footers{" "}
                      </button>
                    </h2>
                    <div
                      id="collapsewordFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Inserting custom Header and Footer</li>
                          <li>Inserting objects in the header and footer</li>
                          <li>Add section break to a document</li>
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
                        data-bs-target="#collapsewordFive"
                        aria-expanded="false"
                        aria-controls="collapsewordFive"
                      >
                        {" "}
                        Working with bullets and numbered lists{" "}
                      </button>
                    </h2>
                    <div
                      id="collapsewordFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Multilevel numbering and Bulleting</li>
                          <li>Creating List</li>
                          <li>Customizing List style</li>
                          <li>Page bordering</li>
                          <li>Page background</li>
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
                        data-bs-target="#collapsewordSix"
                        aria-expanded="false"
                        aria-controls="collapsewordSix"
                      >
                        {" "}
                        Tables{" "}
                      </button>
                    </h2>
                    <div
                      id="collapsewordSix"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Working with Tables, Table Formatting</li>
                          <li>Table Styles</li>
                          <li>Alignment option</li>
                          <li>Merge and split option</li>
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
                        data-bs-target="#collapsewordSeven"
                        aria-expanded="false"
                        aria-controls="collapsewordSeven"
                      >
                        {" "}
                        Styles and Content{" "}
                      </button>
                    </h2>
                    <div
                      id="collapsewordSeven"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Using Build- in Styles, Modifying Styles</li>
                          <li>Creating Styles, Creating a list style</li>
                          <li>Table of contents and references</li>
                          <li>Adding internal references</li>
                          <li>Adding a Footnote</li>
                          <li>Adding Endnote</li>
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
                        data-bs-target="#collapsewordEight"
                        aria-expanded="false"
                        aria-controls="collapsewordEight"
                      >
                        {" "}
                        Merging Documents{" "}
                      </button>
                    </h2>
                    <div
                      id="collapsewordEight"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Typing new address list</li>
                          <li>Importing address list from Excel file</li>
                          <li>Write and insert field</li>
                          <li>Merging with outlook contact</li>
                          <li>Preview Result</li>
                          <li>Merging to envelopes</li>
                          <li>Merging to label</li>
                          <li>Setting rules for merges</li>
                          <li>Finish &amp; Merge options</li>
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
                        data-bs-target="#collapsewordNine"
                        aria-expanded="false"
                        aria-controls="collapsewordNine"
                      >
                        {" "}
                        Sharing and Maintaining Document{" "}
                      </button>
                    </h2>
                    <div
                      id="collapsewordNine"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Changing Word Options</li>
                          <li>Changing the Proofing Tools</li>
                          <li>Managing Templates</li>
                          <li>Restricting Document Access</li>
                          <li>Using Protected View</li>
                          <li>Working with Templates</li>
                          <li>Managing Templates</li>
                          <li>Understanding building blocks</li>
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
                        data-bs-target="#collapsewordTen"
                        aria-expanded="false"
                        aria-controls="collapsewordTen"
                      >
                        {" "}
                        Proofing the document{" "}
                      </button>
                    </h2>
                    <div
                      id="collapsewordTen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Check Spelling As You Type.</li>
                          <li>Mark Grammar Errors As You Type.</li>
                          <li>Setting AutoCorrect Options</li>
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
                        data-bs-target="#collapsewordEleven"
                        aria-expanded="false"
                        aria-controls="collapsewordEleven"
                      >
                        {" "}
                        Printing{" "}
                      </button>
                    </h2>
                    <div
                      id="collapsewordEleven"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Page Setup, Setting margins</li>
                          <li>Print Preview, Print</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h2 className="mb-0">MS EXCEL</h2>
                <div className="accordion course-syllabus-accordion mt-0" id="accordionExample">
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">1</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExcelOne"
                        aria-expanded="true"
                        aria-controls="collapseExcelOne"
                      >
                        {" "}
                        Introduction to Excel{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseExcelOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Introduction to Excel interface</li>
                          <li>Understanding rows and columns, Naming Cells</li>
                          <li>Working with excel workbook and sheets</li>
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
                        data-bs-target="#collapseExcelTwo"
                        aria-expanded="false"
                        aria-controls="collapseExcelTwo"
                      >
                        {" "}
                        Formatting excel work book:{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseExcelTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>New, Open, Close, Save, Save As</li>
                          <li>Formatting Text: Font Size, Font Style</li>
                          <li>Font Color, Use the Bold, Italic, and Underline</li>
                          <li>Wrap text, Merge and Centre</li>
                          <li>Currency, Accounting and other formats</li>
                          <li>Modifying Columns, Rows &amp; Cells</li>
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
                        data-bs-target="#collapseExcelThree"
                        aria-expanded="false"
                        aria-controls="collapseExcelThree"
                      >
                        {" "}
                        Perform Calculations with Functions{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseExcelThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Creating Simple Formulas</li>
                          <li>Setting up your own formula</li>
                          <li>Date and Time Functions, Financial Functions</li>
                          <li>Logical Functions, Lookup and Reference</li>
                          <li>Functions Mathematical Functions</li>
                          <li>Statistical Functions, Text Functions.</li>
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
                        data-bs-target="#collapseExcelFour"
                        aria-expanded="false"
                        aria-controls="collapseExcelFour"
                      >
                        {" "}
                        Sort and Filter Data with Excel{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseExcelFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Sort and filtering data</li>
                          <li>Using number filter, Text filter</li>
                          <li>Custom filtering</li>
                          <li>Removing filters from columns</li>
                          <li>Conditional formatting</li>
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
                        data-bs-target="#collapseExcelFive"
                        aria-expanded="false"
                        aria-controls="collapseExcelFive"
                      >
                        {" "}
                        Create Effective Charts to Present Data Visually{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseExcelFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Inserting Column, Pie chart etc.</li>
                          <li>Create an effective chart with Chart Tool</li>
                          <li>Design, Format, and Layout options</li>
                          <li>Adding chart title</li>
                          <li>Changing layouts</li>
                          <li>Chart styles</li>
                          <li>Editing chart data range</li>
                          <li>Editing data series</li>
                          <li>Changing chart</li>
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
                        data-bs-target="#collapseExcelSix"
                        aria-expanded="false"
                        aria-controls="collapseExcelSix"
                      >
                        {" "}
                        Object Oriented Programming{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseExcelSix"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
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
                        data-bs-target="#collapseExcelSeven"
                        aria-expanded="false"
                        aria-controls="collapseExcelSeven"
                      >
                        {" "}
                        Analyze Data Using PivotTables and Pivot Charts{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseExcelSeven"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Understand PivotTables, Create a PivotTable</li>
                          <li>Framework Using the PivotTable and PivotChart</li>
                          <li>Create Pivot Chart from pivot Table.</li>
                          <li>Inserting slicer</li>
                          <li>Creating Calculated fields</li>
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
                        data-bs-target="#collapseExcelEight"
                        aria-expanded="false"
                        aria-controls="collapseExcelEight"
                      >
                        {" "}
                        Protecting and Sharing the work book{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseExcelEight"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Protecting a workbook with a password</li>
                          <li>Allow user to edit ranges</li>
                          <li>Track changes</li>
                          <li>Working with Comments</li>
                          <li>Insert Excel Objects and Charts in Word Document and Power point Presentation.</li>
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
                        data-bs-target="#collapseExcelNine"
                        aria-expanded="false"
                        aria-controls="collapseExcelNine"
                      >
                        {" "}
                        Use Macros to Automate Tasks{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseExcelNine"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Creating and Recording Macros</li>
                          <li>Assigning Macros to the work sheets</li>
                          <li>Saving Macro enabled workbook</li>
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
                        data-bs-target="#collapseExcelTen"
                        aria-expanded="false"
                        aria-controls="collapseExcelTen"
                      >
                        {" "}
                        Proofing and Printing{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseExcelTen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Page setup, Setting print area, Print titles</li>
                          <li>Inserting custom Header and Footer</li>
                          <li>Inserting objects in the header and footer</li>
                          <li>Page Setup, Setting margins, Print Preview, Print</li>
                          <li>Enable back ground error checking</li>
                          <li>Setting AutoCorrect Options</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h2 className="mb-0">MS POWERPOINT</h2>
                <div className="accordion course-syllabus-accordion mt-0" id="accordionExample">
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">1</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsePPTOne"
                        aria-expanded="true"
                        aria-controls="collapsePPTOne"
                      >
                        {" "}
                        Setting Up PowerPoint Environment:{" "}
                      </button>
                    </h2>
                    <div
                      id="collapsePPTOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>New, Open, Close, Save, Save As</li>
                          <li>Typing the text, Alignment of text</li>
                          <li>Formatting Text: Font Size, Font Style</li>
                          <li>Font Color, Use the Bold, Italic, and Underline</li>
                          <li>Cut, Copy, Paste, Select All, Clear text</li>
                          <li>Find &amp; Replace</li>
                          <li>Working with Tabs and Indents</li>
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
                        data-bs-target="#collapsePPTTwo"
                        aria-expanded="false"
                        aria-controls="collapsePPTTwo"
                      >
                        {" "}
                        Creating slides and applying themes{" "}
                      </button>
                    </h2>
                    <div id="collapsePPTTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Inserting new slide</li>
                          <li>Changing layout of slides</li>
                          <li>Duplicating slides</li>
                          <li>Copying and pasting slide</li>
                          <li>Applying themes to the slide layout</li>
                          <li>Changing theme color</li>
                          <li>Slide background</li>
                          <li>Formatting slide background</li>
                          <li>Using slide views</li>
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
                        data-bs-target="#collapsePPTThree"
                        aria-expanded="false"
                        aria-controls="collapsePPTThree"
                      >
                        {" "}
                        Working with bullets and numbering{" "}
                      </button>
                    </h2>
                    <div
                      id="collapsePPTThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Multilevel numbering and Bulleting</li>
                          <li>Creating List</li>
                          <li>Page bordering</li>
                          <li>Page background</li>
                          <li>Aligning text</li>
                          <li>Text directions</li>
                          <li>Columns option</li>
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
                        data-bs-target="#collapseExcelFour"
                        aria-expanded="false"
                        aria-controls="collapsePPTFour"
                      >
                        {" "}
                        Working with Objects{" "}
                      </button>
                    </h2>
                    <div
                      id="collapsePPTFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Shapes, Clipart and Picture, Word Art, Smart Art</li>
                          <li>Change the Order of Objects</li>
                          <li>Inserting slide header and footer</li>
                          <li>Inserting Text boxes</li>
                          <li>Inserting shapes, using quick styles</li>
                          <li>Inserting Word art</li>
                          <li>Inserting symbols</li>
                          <li>Inserting Chart</li>
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
                        data-bs-target="#collapsePPTFive"
                        aria-expanded="false"
                        aria-controls="collapsePPTFive"
                      >
                        {" "}
                        Hyperlinks and Action Buttons{" "}
                      </button>
                    </h2>
                    <div
                      id="collapsePPTFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Inserting Hyperlinks and Action Buttons</li>
                          <li>Edit Hyperlinks and Action Button</li>
                          <li>Word Art and Shapes</li>
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
                        data-bs-target="#collapsePPTSix"
                        aria-expanded="false"
                        aria-controls="collapsePPTSix"
                      >
                        {" "}
                        Working With Movies and Sounds{" "}
                      </button>
                    </h2>
                    <div id="collapsePPTSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Inserting Movie From a Computer File</li>
                          <li>Inserting Audio file</li>
                          <li>Audio Video playback and format options</li>
                          <li>Video options, Adjust options</li>
                          <li>Reshaping and bordering Video</li>
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
                        data-bs-target="#collapsePPTSeven"
                        aria-expanded="false"
                        aria-controls="collapsePPTSeven"
                      >
                        {" "}
                        Using SmartArt and Tables{" "}
                      </button>
                    </h2>
                    <div
                      id="collapsePPTSeven"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Working with Tables, Table Formatting</li>
                          <li>Table Styles</li>
                          <li>Alignment option</li>
                          <li>Merge and split option Converting text to smart art</li>
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
                        data-bs-target="#collapsePPTEight"
                        aria-expanded="false"
                        aria-controls="collapsePPTEight"
                      >
                        {" "}
                        Animation and Slide Transition{" "}
                      </button>
                    </h2>
                    <div
                      id="collapsePPTEight"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Default Animation, Custom Animation</li>
                          <li>Modify a Default or Custom Animation</li>
                          <li>Reorder Animation Using Transitions</li>
                          <li>Apply a Slide Transition, Modifying a transition, Advancing to the Next Slide</li>
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
                        data-bs-target="#collapsePPTNine"
                        aria-expanded="false"
                        aria-controls="collapsePPTNine"
                      >
                        {" "}
                        Using slide Master{" "}
                      </button>
                    </h2>
                    <div
                      id="collapsePPTNine"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Using slide master</li>
                          <li>Inserting layout option</li>
                          <li>Creating custom layout</li>
                          <li>Inserting place holders</li>
                          <li>Formatting place holders</li>
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
                        data-bs-target="#collapseExcelTen"
                        aria-expanded="false"
                        aria-controls="collapseExcelTen"
                      >
                        {" "}
                        Slide show option{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseExcelTen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Start slide show</li>
                          <li>Start show from the current slide</li>
                          <li>Rehearse timing</li>
                          <li>Creating custom slide show</li>
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
                        data-bs-target="#collapsePPTEleven"
                        aria-expanded="false"
                        aria-controls="collapsePPTEleven"
                      >
                        {" "}
                        Proofing and Printing{" "}
                      </button>
                    </h2>
                    <div
                      id="collapsePPTEleven"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Check Spelling As You Type</li>
                          <li>Setting AutoCorrect Options</li>
                          <li>Save as video</li>
                          <li>Save as JPEG files</li>
                          <li>Save as PowerPoint Show file</li>
                          <li>Print Preview, Print</li>
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
