import { Fragment } from "react";
import CourseForm from "@/components/forms/CourseForm";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import CourseSeo from "@/components/seo/CourseSeo";
import type { CourseSlug } from "@/lib/courses";
import CourseFaqs, { type Faq } from "./CourseFaqs";
import CourseFormSection from "./CourseFormSection";
import CourseIncludes from "./CourseIncludes";

export type CourseContent = {
  slug: CourseSlug;
  banner: {
    /** Big banner heading, e.g. "Data". */
    title: string;
    /** Two stacked words beside it, e.g. ["Analytics", "Course"]. Omit for a single long heading. */
    sub?: [string, string];
    /** Completes the H1 for search engines and screen readers, e.g. " Analytics Course in Nellore". */
    h1Suffix: string;
    /** Four topic pills around the heading: two before, two after. */
    icons: { src: string; alt: string; width: number; height: number }[];
  };
  about: {
    heading: string;
    /** Paragraphs; wrap words in *asterisks* to highlight them in red, as on the other course pages. */
    paragraphs: string[];
  };
  /** Name used on the "Download | … Syllabus" buttons. */
  syllabusName: string;
  breakdown: { title: string; stats: { value: string; label: string }[] };
  modules: { title: string; topics: string[] }[];
  faqs: Faq[];
};

/** The figures every W3 Technologies course page shows in its breakdown. */
export const STANDARD_STATS = [
  { value: "100%", label: "Hands-on Training" },
  { value: "3-5", label: "Real Time Projects" },
  { value: "70-100", label: "Practical Assignments" },
  { value: "3+", label: "Assessments / Mock Interviews" },
];

/** Renders *highlighted* words as the red <span> the course stylesheet uses. */
function Highlighted({ text }: { text: string }) {
  return text
    .split(/\*([^*]+)\*/)
    .map((part, i) => (i % 2 ? <span key={i}>{part}</span> : <Fragment key={i}>{part}</Fragment>));
}

const schedule = [
  { icon: "calendar-icon", width: 48, height: 48, alt: "week", text: <>Mon - Fri</> },
  { icon: "online-icon", width: 41, height: 41, alt: "online-offline", text: <>Online/Offline</> },
  {
    icon: "time-icon",
    width: 40,
    height: 40,
    alt: "1 hour real time",
    text: (
      <>
        <span>1 Hour</span> Real time interactive teaching
      </>
    ),
  },
  {
    icon: "real-time",
    width: 34,
    height: 40,
    alt: "2 hours practice time",
    text: (
      <>
        <span>2 Hours</span> Practice Time
      </>
    ),
  },
];

/** Course page in the same layout as the hand-built course pages (styles/courses/course-stack.css). */
export default function CoursePage({ content }: { content: CourseContent }) {
  const { slug, banner, about, syllabusName, breakdown, modules, faqs } = content;
  const pill = (i: number) => {
    const icon = banner.icons[i];
    return <img src={icon.src} alt={icon.alt} width={icon.width} height={icon.height} />;
  };

  return (
    <>
      <CourseSeo courseSlug={slug} />
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
              <CourseForm courseSlug={slug} />
            </div>
          </div>
        </div>
      </div>

      <main className="course-stack">
        <div className="courses-main-banner-sec">
          <SiteHeader />
          <div className="container">
            <div className="course-banner-sec-heading">
              {pill(0)} {pill(1)}
              <div
                className={`course-banner-heading-main${banner.sub ? "" : " course-banner-long-heading"}`}
                style={banner.sub ? { whiteSpace: "nowrap" } : undefined}
              >
                <h1>
                  {banner.title}
                  <span className="visually-hidden">{banner.h1Suffix}</span>
                </h1>
                {banner.sub && (
                  <div className="course-banner-sub">
                    <span>{banner.sub[0]}</span> <span>{banner.sub[1]}</span>
                  </div>
                )}
              </div>
              {pill(2)} {pill(3)}
            </div>
          </div>
        </div>

        <section className="about-course-sec-main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>
                  <span>About</span> {about.heading}
                </h2>
                {about.paragraphs.map((p, i) => (
                  <p key={i}>
                    <Highlighted text={p} />
                  </p>
                ))}
              </div>
            </div>
            <button type="button" className="model-blk-btn" data-bs-toggle="modal" data-bs-target="#centeredModal">
              <span>Download</span> | {syllabusName} Syllabus
            </button>
          </div>
        </section>

        <CourseIncludes />
        <CourseFormSection courseSlug={slug} />

        <section className="course-breakdown-main-sec">
          <div className="container">
            <h2>
              {breakdown.title} <br />
              <span>Breakdown</span>
            </h2>
            <div className="course-breakdown-main-card">
              <div className="row">
                {breakdown.stats.map((stat, i) => (
                  <div key={stat.label} className={`col-12 col-md-6 col-lg-${12 / breakdown.stats.length}`}>
                    <div className={`courses-breakdown-card${i % 2 ? " courses-breakdown-even-card" : ""}`}>
                      <h3>{stat.value}</h3>
                      <p>{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="course-details-main">
              {schedule.map((item) => (
                <div key={item.icon} className="course-details-card">
                  <img
                    src={`/assets/courses/${item.icon}.svg`}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                  />
                  <p>{item.text}</p>
                </div>
              ))}
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
                  <span>Download</span> | {syllabusName} Course Syllabus
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="accordion course-syllabus-accordion" id="accordionExample">
                  {modules.map((module, i) => {
                    const id = `collapse${i + 1}`;
                    const open = i === 0;
                    return (
                      <div key={id} className="accordion-item course-details-accordion-main">
                        <span className="accordion-count">{i + 1}</span>
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-button ${open ? "" : "collapsed "}course-details-button`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${id}`}
                            aria-expanded={open}
                            aria-controls={id}
                          >
                            {module.title}
                          </button>
                        </h2>
                        <div
                          id={id}
                          className={`accordion-collapse collapse${open ? " show" : ""}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body courses-syllabus-body">
                            <ul>
                              {module.topics.map((topic) => (
                                <li key={topic}>{topic}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
