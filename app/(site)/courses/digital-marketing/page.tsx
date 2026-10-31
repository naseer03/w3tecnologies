import CourseForm from "@/components/forms/CourseForm";
import CourseFormSection from "@/components/sections/CourseFormSection";
import CourseIncludes from "@/components/sections/CourseIncludes";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "@/styles/courses/course-stack.css";
import CourseFaqs, { type Faq } from "@/components/sections/CourseFaqs";
import CourseSeo, { courseMetadata } from "@/components/seo/CourseSeo";

export const metadata = courseMetadata("digital-marketing");

const faqs: Faq[] = [
  {
    q: "What is digital marketing, and why is it important?",
    a: "Digital marketing is the practice of promoting products or services using digital channels such as search engines, social media, email, and websites. It is important because it allows businesses to reach a larger audience, target specific demographics, measure results, and engage with customers in real-time.",
  },
  {
    q: "Do I need a background in marketing to learn digital marketing?",
    a: "No, you don't need a background in marketing to learn digital marketing. The course is designed to teach you from the basics to advanced strategies, making it accessible to beginners from various fields. However, having an interest in marketing concepts can be beneficial.",
  },
  {
    q: "What are the key components of digital marketing?",
    a: "The key components of digital marketing include Search Engine Optimization (SEO), Search Engine Marketing (SEM), Content Marketing, Social Media Marketing, Pay-Per-Click (PPC) Advertising, Email Marketing, and Analytics. Each component plays a vital role in creating a comprehensive digital marketing strategy.",
  },
  {
    q: "How long does it take to become proficient in digital marketing?",
    a: "The time to become proficient in digital marketing varies depending on your learning pace and dedication. Generally, it can take a few months to a year to learn and apply the fundamental concepts effectively. Continuous learning and practice are essential as the digital marketing landscape evolves.",
  },
  {
    q: "What tools and software are commonly used in digital marketing?",
    a: "Common tools and software used in digital marketing include Google Analytics, Google Ads, Facebook Ads Manager, Hootsuite, SEMrush, Ahrefs, MailChimp, HubSpot, Canva, and WordPress. These tools help in managing campaigns, analyzing data, and optimizing marketing efforts.",
  },
  {
    q: "How do I measure the success of a digital marketing campaign?",
    a: "The success of a digital marketing campaign is measured using key performance indicators (KPIs) such as website traffic, conversion rates, click-through rates (CTR), engagement rates, return on investment (ROI), and customer acquisition costs. Tools like Google Analytics and social media insights help track these metrics.",
  },
  {
    q: "What is SEO, and why is it crucial for digital marketing?",
    a: "SEO, or Search Engine Optimization, is the practice of optimizing your website and content to rank higher in search engine results pages (SERPs). It is crucial for digital marketing because higher rankings increase visibility, drive organic traffic, and enhance the credibility of your website.",
  },
  {
    q: "Can digital marketing be effective for small businesses?",
    a: "Yes, digital marketing can be highly effective for small businesses. It allows small businesses to reach a broader audience, compete with larger companies, and target specific customer segments cost-effectively. With the right strategy, small businesses can achieve significant growth through digital marketing.",
  },
  {
    q: "What are the career opportunities in digital marketing?",
    a: "Career opportunities in digital marketing are vast and varied. Some roles include Digital Marketing Specialist, SEO Specialist, Content Marketer, Social Media Manager, PPC Specialist, Email Marketing Manager, Analytics Expert, and Digital Marketing Manager. The field offers opportunities for growth and specialization.",
  },
  {
    q: "How do social media platforms play a role in digital marketing?",
    a: "Social media platforms play a crucial role in digital marketing by providing channels to reach and engage with audiences, build brand awareness, and drive traffic to websites. Platforms like Facebook, Instagram, Twitter, LinkedIn, and TikTok allow businesses to create targeted campaigns, interact with customers, and analyze engagement.",
  },
  {
    q: "What is content marketing, and how does it work?",
    a: "Content marketing involves creating and sharing valuable, relevant, and consistent content to attract and engage a target audience. It works by providing information and solutions that meet the needs of potential customers, building trust and authority, and ultimately driving profitable customer actions.",
  },
  {
    q: "Why is email marketing still relevant today?",
    a: "Email marketing remains relevant because it allows businesses to communicate directly with their audience in a personalized manner. It is cost-effective, highly measurable, and can generate significant ROI. Email marketing is effective for nurturing leads, building customer relationships, and promoting products or services.",
  },
  {
    q: "How can I stay updated with the latest trends in digital marketing?",
    a: "Staying updated with the latest trends in digital marketing involves following industry blogs, attending webinars and conferences, participating in online courses, joining professional networks, and subscribing to newsletters from reputable sources like HubSpot, Moz, Neil Patel, and Search Engine Journal.",
  },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <CourseSeo courseSlug="digital-marketing" />
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
              <CourseForm courseSlug="digital-marketing" />
            </div>
          </div>
        </div>
      </div>
      <main className="course-stack">
        <div className="courses-main-banner-sec">
          <SiteHeader />
          <div className="container">
            <div className="course-banner-sec-heading">
              <img src="/assets/courses/digital-marketing/seo.svg" alt="seo" />{" "}
              <img src="/assets/courses/digital-marketing/sem.svg" alt="sem" />
              <div className="course-banner-heading-main">
                <h1>
                  Digital
                  <span className="visually-hidden"> Marketing Course in Nellore</span>
                </h1>
                <div className="course-banner-sub">
                  <span>Marketing</span> <span> with AI</span>
                </div>
              </div>
              <img src="/assets/courses/digital-marketing/smm.svg" alt="smm" />{" "}
              <img src="/assets/courses/digital-marketing/smo.svg" alt="smo" />
            </div>
          </div>
        </div>
        <section className="about-course-sec-main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>
                  <span>About</span> Digital Marketing
                </h2>
                <p>
                  <span>Digital Marketing</span> is the use of websites, apps, mobile devices, social media, search
                  engines, and other digital means to promote and sell products and services.
                </p>
                <p>
                  Digital marketing involves many of the same principles as traditional marketing and is often
                  considered an additional way for companies to approach consumers and understand their behavior.
                  Companies often combine traditional and digital marketing techniques in their strategies. But digital
                  marketing also comes with its own set of challenges. Digital marketing started to become popular with
                  the widespread adoption of the internet in the 1990s.
                </p>
                <p>
                  Digital marketing, also called online marketing, is the promotion of brands to connect with potential
                  customers using the internet and other forms of digital communication. This includes not only email,
                  social media, and web-based advertising, but also text and multimedia messages as a marketing channel.
                </p>
              </div>
            </div>
            <button type="button" className="model-blk-btn" data-bs-toggle="modal" data-bs-target="#centeredModal">
              {" "}
              <span>Download</span> | Digital Marketing Syllabus{" "}
            </button>
          </div>
        </section>
        <CourseIncludes />
        <CourseFormSection courseSlug="digital-marketing" />
        <section className="course-breakdown-main-sec">
          <div className="container">
            <h2>
              Digital Marketing Course <br />
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
                  <span>Download</span> | Digital Marketing Course Syllabus{" "}
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
                        SEO{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>On page SEO</li>
                          <li>Off page SEO</li>
                          <li>Technical SEO</li>
                          <li>Local SEO</li>
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
                        Content marketing{" "}
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Blog creation</li>
                          <li>Blogging SEO</li>
                          <li>Long-term content strategy</li>
                          <li>Research &amp; Identifying Audience Needs</li>
                          <li>Methods</li>
                          <li>Modifying lists</li>
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
                        SMO{" "}
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Facebook</li>
                          <li>Instagram</li>
                          <li>Youtube</li>
                          <li>Linkedin</li>
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
                        SMM &amp; SEM{" "}
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Google Ads</li>
                          <li>Youtube Ads</li>
                          <li>Meta Ads (Fb, Instagram .. etc)</li>
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
                        Email &amp; WhatsApp marketing
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Email template</li>
                          <li>Email marketing tools</li>
                          <li>Whatsapp template</li>
                          <li>Whatsapp marketing tools</li>
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
                        Affiliate Networks &amp; Professional Ventures{" "}
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Affiliated &amp; influencer marketing</li>
                          <li>Freelancing jobs</li>
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
