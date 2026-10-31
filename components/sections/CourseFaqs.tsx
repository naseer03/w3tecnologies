import JsonLd from "@/components/JsonLd";

export type Faq = { q: string; a: string | string[] };

const paragraphs = (a: Faq["a"]) => (Array.isArray(a) ? a : [a]);

/**
 * "Course FAQ'S" accordion. The same list is published as FAQPage structured data,
 * which search engines and AI assistants read when answering questions about the course.
 */
export default function CourseFaqs({ items }: { items: Faq[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: paragraphs(item.a).join("\n\n") },
    })),
  };

  return (
    <section className="course-faqs-main-sec">
      <JsonLd data={schema} />
      <div className="container">
        <h2>
          Course <span>FAQ’S</span>
        </h2>
        <div className="accordion course-faqs-accordion" id="courseFaqsAccordion">
          {items.map((item, i) => {
            const id = `courseFaq${i + 1}`;
            const open = i === 0;
            return (
              <div key={id} className="accordion-item course-faqs-item">
                <h2 className="accordion-header course-faqs-header">
                  <button
                    className={`accordion-button ${open ? "" : "collapsed "}course-faqs-button`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${id}`}
                    aria-expanded={open}
                    aria-controls={id}
                  >
                    {item.q}
                  </button>
                </h2>
                <div
                  id={id}
                  className={`accordion-collapse collapse${open ? " show" : ""}`}
                  data-bs-parent="#courseFaqsAccordion"
                >
                  <div className="accordion-body course-faqs-body">
                    {paragraphs(item.a).map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
