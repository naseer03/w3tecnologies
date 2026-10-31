import CourseForm from "@/components/forms/CourseForm";
import CourseFormSection from "@/components/sections/CourseFormSection";
import CourseIncludes from "@/components/sections/CourseIncludes";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "@/styles/courses/course-stack.css";
import CourseFaqs, { type Faq } from "@/components/sections/CourseFaqs";
import CourseSeo, { courseMetadata } from "@/components/seo/CourseSeo";

export const metadata = courseMetadata("tally-prime-nellore");

const faqs: Faq[] = [
  {
    q: "What is Tally Prime, and why should I learn it?",
    a: "Tally Prime is a popular accounting software used by businesses for managing financial transactions, inventory, and payroll. Learning Tally Prime is beneficial because it helps streamline accounting processes, ensures compliance with financial regulations, and enhances employability in accounting and finance roles.",
  },
  {
    q: "Do I need any prior accounting knowledge to learn Tally Prime?",
    a: "While having basic accounting knowledge can be helpful, it is not mandatory to learn Tally Prime. The course is designed to teach you both accounting concepts and the practical use of Tally Prime from the ground up.",
  },
  {
    q: "What are the key features of Tally Prime?",
    a: "Key features of Tally Prime include financial accounting, inventory management, tax compliance (GST, VAT), payroll processing, multi-currency support, banking integration, and advanced reporting capabilities. These features help businesses manage their finances efficiently",
  },
  {
    q: "How long does it take to learn Tally Prime?",
    a: "The time required to learn Tally Prime varies depending on the depth of the course and your learning pace. Generally, it can take anywhere from a few weeks to a couple of months to become proficient in using Tally Prime for various accounting tasks.",
  },
  {
    q: "Will I receive a certification upon completing the Tally Prime course?",
    a: "Many Tally Prime courses offer a certification upon successful completion. This certification can enhance your resume and demonstrate your proficiency in using Tally Prime to potential employers.",
  },
  {
    q: "Is Tally Prime suitable for small businesses?",
    a: "Yes, Tally Prime is suitable for businesses of all sizes, including small and medium enterprises (SMEs). It offers scalable solutions that cater to the needs of small businesses, helping them manage their financial data, comply with tax regulations, and generate insightful reports.",
  },
  {
    q: "Can Tally Prime be used for managing inventory?",
    a: "Yes, Tally Prime includes robust inventory management features that allow you to track stock levels, manage purchase and sales orders, handle multiple stock categories, and generate various inventory reports to help you make informed business decisions.",
  },
  {
    q: "How can Tally Prime help with GST compliance?",
    a: "Tally Prime is designed to help businesses comply with GST regulations by automating GST calculations, generating GST returns, and providing accurate GST reports. This ensures that businesses can manage their GST obligations efficiently and accurately.",
  },
  {
    q: "What resources will be available during the Tally Prime course?",
    a: "The course may provide various resources such as video tutorials, practical exercises, case studies, user manuals, and access to a Tally Prime software demo. Instructors may also offer personalized guidance and support throughout the course.",
  },
  {
    q: "What resources will be available during the Tally Prime course?",
    a: "You can practice by using the Tally Prime software to enter sample transactions, create financial statements, manage inventory, and generate reports. Additionally, completing the exercises and assignments provided in the course will help reinforce your learning.",
  },
];

export default function TallyPrimeNellorePage() {
  return (
    <>
      <CourseSeo courseSlug="tally-prime-nellore" />
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
              <CourseForm courseSlug="tally-prime-nellore" />
            </div>
          </div>
        </div>
      </div>
      <main className="course-stack">
        <div className="courses-main-banner-sec">
          <SiteHeader />
          <div className="container">
            <div className="course-banner-sec-heading">
              <div className="course-banner-heading-main">
                <h1>
                  Tally
                  <span className="visually-hidden"> Prime Course in Nellore</span>
                </h1>
                <div className="course-banner-sub">
                  <span>Prime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="about-course-sec-main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>
                  <span>About</span> Tally Prime
                </h2>
                <p>
                  <span>Tally is powerful accounting software</span>, which is driven by a technology called concurrent
                  multi-lingual accelerated technology engine. It is easy to use software and is designed to simply
                  complex day to day activities associated in an enterprise.
                </p>
                <p>
                  Tally provides comprehensive solution around accounting principles, inventory and data integrity.
                  Tally also has feature encompassing global business. Tally software comes with easy to use interface
                  thus making it operationally simple.
                </p>
                <p>
                  Tally accounting software provides a solution around inventory management, stock management,
                  invoicing, purchase order management, discounting, stock valuation methodology
                </p>
              </div>
            </div>
            <button type="button" className="model-blk-btn" data-bs-toggle="modal" data-bs-target="#centeredModal">
              {" "}
              <span>Download</span> | Tally Prime Course Syllabus{" "}
            </button>
          </div>
        </section>
        <CourseIncludes />
        <CourseFormSection courseSlug="tally-prime-nellore" />
        <section className="course-breakdown-main-sec">
          <div className="container">
            <h2>
              Tally Prime Course <br />
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
                  <span>Download</span> | Tally Prime Course Syllabus{" "}
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
                        Company Info Menu{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Select Company</li>
                          <li>Shut company</li>
                          <li>Create company</li>
                          <li>Alter company</li>
                          <li>Security control</li>
                          <li>Change tally vault</li>
                          <li>Split company data</li>
                          <li>Backup</li>
                          <li>Restore</li>
                          <li>Tally audit feature</li>
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
                        Accounting Information{" "}
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Accounting Configuration &amp; Features</li>
                          <li>Group Creation</li>
                          <li>Multiple Group Creation</li>
                          <li>Ledger Creation</li>
                          <li>Multiple Ledger Creation</li>
                          <li>New Voucher Creation</li>
                          <li>Advance Ledger Creation</li>
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
                        Inventory Information{" "}
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Inventory configuration &amp; features</li>
                          <li>Inventory info. Menu</li>
                          <li>Stock groups</li>
                          <li>Stock categories</li>
                          <li>Stock item</li>
                          <li>Unit of measurement</li>
                          <li>Bills of materials</li>
                          <li>Locations / Godowns</li>
                          <li>Batches &amp; Expiry</li>
                          <li>Inventory voucher types</li>
                          <li>HSN Code Updates</li>
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
                        Voucher Entry{" "}
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Accounting voucher</li>
                          <li>Inventory voucher</li>
                          <li>optional &amp; non-accounting voucher</li>
                          <li>Order processing</li>
                          <li>Advanced voucher entry</li>
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
                        Advanced Accounting Features{" "}
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Cost category &amp; cost centres</li>
                          <li>Budgets</li>
                          <li>Interest calculations</li>
                          <li>Cheque printing</li>
                          <li>Credit limits</li>
                          <li>Scenario management</li>
                          <li>Reorder levels &amp; reorder quantity</li>
                          <li>Price level &amp; price lists</li>
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
                        Quick setup{" "}
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Tally .net</li>
                          <li>Excise for manufactures</li>
                          <li>Excise for dealer</li>
                          <li>Value-Added Tax</li>
                          <li>Tax deducted at source</li>
                          <li>Tax collected at source</li>
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
                        Taxation{" "}
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Excise for manufacture</li>
                          <li>Service tax</li>
                          <li>Tax deducted at source(TDS)&amp;TCS</li>
                          <li>Value added tax(VAT)</li>
                          <li>Central state tax(CST)</li>
                          <li>Payroll features of Tally</li>
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
                        Data management &amp; Administration{" "}
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Backup &amp; Restore</li>
                          <li>Split a company, export &amp; Import of data</li>
                          <li>E-Capabilities (E-mail a report from tally)</li>
                          <li>Uploading the reports generated from tally</li>
                          <li>Tally ODBC, Inward connectivity</li>
                          <li>Security controls</li>
                          <li>Tally Audit Feature</li>
                          <li>Tally Vault</li>
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
                        Reports{" "}
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Display financial statements</li>
                          <li>Display profit &amp; loss A/c</li>
                          <li>Display trial balance</li>
                          <li>Display registers &amp; ledgers</li>
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
                        Online Taxation Return{" "}
                      </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Fill online ITR(Income Tax Return) download and filling forms</li>
                          <li>Fill online VAT,CST Return</li>
                          <li>Excise Return &amp; Forms</li>
                          <li>Online service tax return</li>
                          <li>TCS,TDS return</li>
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
                        Introduction to GST{" "}
                      </button>
                    </h2>
                    <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Concept of GST</li>
                          <li>Rate of GST</li>
                          <li>GST in other countries</li>
                          <li>Categories of GST</li>
                          <li>Other concepts</li>
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
                        GST (Goods &amp; Services Tax){" "}
                      </button>
                    </h2>
                    <div id="collapseTwelve" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Start Using Tally.ERP9 For GST Compliance</li>
                          <li>Activating GST For Your Company</li>
                          <li>Setting Up GST Rates</li>
                          <li>Updating Stock Items and Stock Groups for GST Compliance</li>
                          <li>Updating a Service Ledger for GST Compliance</li>
                          <li>Updating Sales and Purchase Ledgers for GST Compliance</li>
                          <li>Updating Party GSTIN</li>
                          <li>Creating GST Ledgers</li>
                          <li>Creating Income and Expense Ledgers</li>
                          <li>Recording Sales and Printing Invoices</li>
                          <li>Recording Purchases</li>
                          <li>Recording a Tax Payment</li>
                          <li>Transferring Tax Credits of VAT, excise and service tax to GST</li>
                          <li>Sales - Nil Rated, Exempt, SEZ, and Deemed Export</li>
                          <li>Recording Sales Returns</li>
                          <li>Recording Purchase Returns</li>
                          <li>Recording Export Sales</li>
                          <li>Reverse Charge under GST</li>
                          <li>Recording an Advance Receipt from Customer</li>
                          <li>Recording an Advance Payment to Supplier</li>
                          <li>Recording Journal Vouchers for Adjustments Against Tax Credit</li>
                          <li>Recording a Journal Voucher for TDS Adjustment</li>
                          <li>Recording a Journal Voucher for TCS Adjustment</li>
                          <li>Recording a Journal Voucher for Refund of Tax Credit</li>
                          <li>Recording a Journal Voucher for ISD Credit</li>
                          <li>Recording a Journal Voucher for Transitional Credit</li>
                          <li>Recording Journal Vouchers for Other Liabilities</li>
                          <li>Recording Journal Vouchers for Reversal of Tax Credit</li>
                          <li>GSTR-1</li>
                          <li>Returns Summary</li>
                          <li>Particulars (Computation Details)</li>
                          <li>Summary of Exceptions</li>
                          <li>Table-wise GSTR-1</li>
                          <li>Status Reconciliation</li>
                          <li>Exporting GSTR-1</li>
                          <li>Challan Reconciliation</li>
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
