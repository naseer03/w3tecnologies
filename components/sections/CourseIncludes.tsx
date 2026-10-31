const items = [
  { icon: "technology-training", alt: "technology-training", title: "Technology Training" },
  { icon: "projects", alt: "Real-time-projects", title: "Real Time Projects" },
  { icon: "doubt-solving", alt: "doubt-solving", title: "1:1 Doubt solving" },
  { icon: "lern-to-crack", alt: "learn -to-crack-interviews", title: "Learn to Crack Interviews" },
  { icon: "mock-interviews", alt: "Mock-interviews", title: "Panel Mock Interview" },
];

/** "What this course includes?" cards (was includes/course-includes.php). */
export default function CourseIncludes() {
  return (
    <section className="course-includes">
      <div className="container">
        <div className="head">
          <h2>
            <span>What </span> this Course includes ?
          </h2>
        </div>
        <div className="cards-part">
          <div className="row align-items-center justify-content-center">
            {items.map((item) => (
              <div key={item.icon} className="col-12 col-lg-4">
                <div className="card m-3 ">
                  <div className="d-flex flex-column align-items-center gap-3">
                    <img src={`/assets/course-includes/${item.icon}.svg`} className="img-fluid" alt={item.alt} />
                    <h5 className="card-title">{item.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
