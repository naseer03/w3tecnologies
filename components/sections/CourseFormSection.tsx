import CourseForm from "@/components/forms/CourseForm";
import { courses, type CourseSlug } from "@/lib/courses";

/** "Want more details about the … course?" section with the syllabus form (was includes/course-from-sec.php). */
export default function CourseFormSection({ courseSlug }: { courseSlug: CourseSlug }) {
  return (
    <div className="course-form-sec">
      <div className="container">
        <div className="head">
          <h2>
            <span>Want more details</span> about the
          </h2>
          <h2>{courses[courseSlug].name} course?</h2>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <h3 className="pb-2 fill-form d-none d-lg-block">Fill out the form</h3>
            <p className="text">
              Our counsellors will get in touch with you at your preferred time. You can have all your queries answered.
            </p>
            <p className="pt-2 text">
              Once you decide that SLA is the perfect fit for your training needs, our counselors will guide you through
              the process every step of the way.
            </p>
            <ul className="query-list">
              <li>
                <p>Course time</p>
              </li>
              <li>
                <p>Course Syllabus</p>
              </li>
              <li>
                <p>Course Fees</p>
              </li>
              <li>
                <p>or any other questions...</p>
              </li>
            </ul>
            <div className="call-us">
              <h2 className="call-text">You can also give us a Call</h2>
              <a href="tel:+917416939333" className="telNo-btn">
                <img src="/assets/home/banner/phone-icon.svg" alt="call" />
                <span className="tel-no">+91 741-693-9333</span>{" "}
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <h3 className=" fill-form d-lg-none d-block text-center">Fill out the form</h3>
            <CourseForm courseSlug={courseSlug} />
          </div>
        </div>
      </div>
    </div>
  );
}
