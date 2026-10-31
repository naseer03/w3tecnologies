import CourseForm from "@/components/forms/CourseForm";
import CourseFormSection from "@/components/sections/CourseFormSection";
import CourseIncludes from "@/components/sections/CourseIncludes";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "@/styles/courses/course-stack.css";
import CourseFaqs, { type Faq } from "@/components/sections/CourseFaqs";
import CourseSeo, { courseMetadata } from "@/components/seo/CourseSeo";

export const metadata = courseMetadata("wordpress");

const faqs: Faq[] = [
  {
    q: "What is WordPress, and why should I learn it?",
    a: "WordPress is a powerful and widely-used content management system (CMS) that allows you to create, manage, and customize websites without extensive coding knowledge. Learning WordPress is essential for building professional websites, blogs, and e-commerce stores, making it a valuable skill for web development and digital marketing",
  },
  {
    q: "Do I need prior web development knowledge to take this course?",
    a: "Prior web development knowledge is helpful but not required. This course is designed for beginners and will guide you through the basics before moving on to more advanced features and customization techniques.",
  },
  {
    q: "What will I learn in a WordPress course?",
    a: "You will learn how to install and set up WordPress, customize themes, manage plugins, create and manage content, design layouts, optimize for SEO, and secure your website. The course will also cover advanced topics like custom theme development and e-commerce integration.",
  },
  {
    q: "How long does it take to become proficient in WordPress?",
    a: "The time to become proficient in WordPress depends on your learning pace and practice. Typically, with consistent effort, you can expect to build a strong foundation in a few weeks, and with additional practice, become proficient within a few months.",
  },
  {
    q: "What career opportunities are available for those skilled in WordPress?",
    a: "Career opportunities include roles such as Web Developer, WordPress Developer, Front-End Developer, Web Designer, and Content Manager. WordPress skills are in high demand across various industries, especially in digital marketing, e-commerce, and media",
  },
  {
    q: "Will I receive a certification upon completing the WordPress course?",
    a: "Many WordPress courses offer a certification upon successful completion. This certification can validate your skills, enhance your resume, and increase your employability in the web development and digital marketing job markets",
  },
  {
    q: "What tools and technologies will I use in this course?",
    a: "You will use tools like the WordPress dashboard, page builders (such as Elementor or Gutenberg), and plugins for SEO, security, and e-commerce. You may also learn to work with integrated development environments (IDEs).",
  },
  {
    q: "How is WordPress different from other content management systems?",
    a: "WordPress is known for its ease of use, flexibility, and large community support. Compared to other CMS platforms like Joomla, Drupal, or Wix, WordPress offers a balance of user-friendliness and powerful customization options, making it suitable for both beginners and experienced developers.",
  },
  {
    q: "Can I work on real-world projects during this course?",
    a: "Yes, this course includes practical projects where you will build real-world websites, including blogs, business sites, and online stores. These projects help you apply the concepts learned, gain hands-on experience, and build a portfolio to showcase your skills",
  },
  {
    q: "What is the importance of learning WordPress for modern web development?",
    a: "Learning WordPress is crucial for modern web development because it powers over 40% of all websites on the internet. Its versatility and ease of use make it a preferred choice for businesses, bloggers, and developers alike, ensuring your skills remain relevant and in demand.",
  },
];

export default function WordpressPage() {
  return (
    <>
      <CourseSeo courseSlug="wordpress" />
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
              <CourseForm courseSlug="wordpress" />
            </div>
          </div>
        </div>
      </div>
      <main className="course-stack">
        <div className="courses-main-banner-sec">
          <SiteHeader />
          <div className="container">
            <div className="course-banner-sec-heading">
              <img src="/assets/courses/wordpress/themes.svg" alt="themes" />{" "}
              <img src="/assets/courses/wordpress/plugins.svg" alt="plugins" />
              <div className="course-banner-heading-main">
                <h1>
                  Wordpress
                  <span className="visually-hidden"> Development Course in Nellore</span>
                </h1>
              </div>
              <img src="/assets/courses/wordpress/page-builder.svg" alt="page-builder" />{" "}
              <img src="/assets/courses/wordpress/post.svg" alt="post" />
            </div>
          </div>
        </div>
        <section className="about-course-sec-main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>
                  <span>About</span> Wordpress
                </h2>
                <p>
                  <span>
                    The WordPress software is a powerful CMS (content management system) used for building websites.
                  </span>{" "}
                  There are many wonderful aspects to WordPress and high among them are its flexibility and
                  extensibility. Its secret? WordPress is open source software. This means it has a large community
                  constantly contributing to its development and creating tools which provide additional functionality
                  to its users. If you want to learn more about the WordPress open source project, the About WordPress
                  is a good place to start.
                </p>
              </div>
            </div>
            <button type="button" className="model-blk-btn" data-bs-toggle="modal" data-bs-target="#centeredModal">
              {" "}
              <span>Download</span> | WordPress Course Syllabus{" "}
            </button>
          </div>
        </section>
        <CourseIncludes />
        <CourseFormSection courseSlug="wordpress" />
        <section className="course-breakdown-main-sec">
          <div className="container">
            <h2>
              WordPress Course <br />
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
                  <span>Download</span> | Wordpress Course Syllabus{" "}
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
                        Creating a WordPress{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Site (Installing WordPress) Installing WordPress with a Web Host’s “1-Click Install”</li>
                          <li>Manually Installing WordPress</li>
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
                        Logging Into the WordPress Admin &amp; General Site Settings{" "}
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Logging Into the WordPress Admin</li>
                          <li>Comments</li>
                          <li>General WordPress Settings</li>
                          <li>Editing Your Profile</li>
                          <li>Setting Your Profile Picture (Gravatar)</li>
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
                        Writing Posts &amp; Formatting Text{" "}
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Posts versus Pages</li>
                          <li>Creating a New Blog Post</li>
                          <li>Using the Visual Editor</li>
                          <li>Pasting Without Formatting &amp; Clearing Formatting</li>
                          <li>Formatting Headings</li>
                          <li>Formatting Bulleted &amp; Numbered Lists</li>
                          <li>Formatting Quotes</li>
                          <li>Publishing a Post</li>
                          <li>Deleting a Post</li>
                          <li>Restoring a Post from the Trash (or Deleting it Delete Permanently)</li>
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
                        Publishing a Post (Making it Live){" "}
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Publishing a Post (Making it Live)</li>
                          <li>Status</li>
                          <li>Visibility</li>
                          <li>Publish Date &amp; Time</li>
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
                        Adding a Read More Link to a Post{" "}
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Adding the Read More Tag</li>
                          <li>Changing the Text in the More Tag</li>
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
                        Creating Links (Hyperlinks){" "}
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Linking to Another Website</li>
                          <li>Opening a Link in a New Tab</li>
                          <li>Linking to a Page Within Your Site</li>
                          <li>Editing &amp; Removing Links</li>
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
                        Adding Images &amp; Managing the Media Library{" "}
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>SynAdding an Image to a Post or Page tax</li>
                          <li>Editing Images (Manually Resizing, Cropping, &amp; Rotating)</li>
                          <li>Media Settings (Customizing the Size of Thumbnail, Medium, &amp; Large)</li>
                          <li>Adding a Featured Image</li>
                          <li>Uploading Images &amp; Files Directly Into the Media Library</li>
                          <li>Editing &amp; Deleting Images in the Media Library</li>
                          <li>Deleting Unused Images (Cleaning Out the Media Library)</li>
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
                        Adding an Image Gallery{" "}
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Adding an Image Gallery</li>
                          <li>Editing an Existing Image Gallery</li>
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
                        Adding Video{" "}
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Embedding YouTube Videos</li>
                          <li>Uploading a Video File</li>
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
                        Categories, Tags, &amp; Reading Settings{" "}
                      </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Categories &amp; Tags Explained</li>
                          <li>Creating &amp; Editing Categories</li>
                          <li>Changing the “Uncategorized” Default Category Name</li>
                          <li>Setting the Default Category</li>
                          <li>Creating &amp; Editing Tags</li>
                          <li>Changing Categories/Tags for Multiple Posts</li>
                          <li>Reading Settings</li>
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
                        Widgets
                      </button>
                    </h2>
                    <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Editing &amp; Adding Widgets</li>
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
                        Making Pages{" "}
                      </button>
                    </h2>
                    <div id="collapseTwelve" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Pages versus Posts</li>
                          <li>Creating a New Page</li>
                          <li>Publishing a Page (Making it Live)</li>
                          <li>Deleting a Page</li>
                          <li>Changing the Page Order</li>
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
                        Menus{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseThirteen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>About Menus &amp; Locations</li>
                          <li>Adding &amp; Removing Links in Menus</li>
                          <li>Creating Submenus</li>
                          <li>Opening Menu Links in a New Tab</li>
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
                        Installing Themes{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseForteen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>What Are WordPress Themes?</li>
                          <li>Where Do I Get WordPress Themes?</li>
                          <li>Installing &amp; Activating a Theme Manually</li>
                          <li>Uploading &amp; Activating a Theme</li>
                          <li>Deleting a Theme</li>
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
                        Customizing Theme Appearance{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseFifteen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Customizing Appearance</li>
                          <li>Customizing the Site Identity (Logo, Title, &amp; Tagline)</li>
                          <li>Adding a Site Icon (Favicon)</li>
                          <li>Customizing the Header</li>
                          <li>Customizing Colors</li>
                          <li>Changing the Template Layout for a Page/Post</li>
                          <li>Changing a Template Layout</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">16</span>
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
                        WordPress Plugins: About, Installing, &amp; Updating{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseSixteen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>About WordPress Plugins</li>
                          <li>Installing a WordPress Plugin</li>
                          <li>Updating Plugins</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">17</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeventeen"
                        aria-expanded="false"
                        aria-controls="collapseSeventeen"
                      >
                        {" "}
                        WordPress Plugins You May Want to Install
                      </button>
                    </h2>
                    <div
                      id="collapseSeventeen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Recommended WordPress Plugins</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">18</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEighteen"
                        aria-expanded="false"
                        aria-controls="collapseEighteen"
                      >
                        {" "}
                        SEO (Search Engine Optimization){" "}
                      </button>
                    </h2>
                    <div
                      id="collapseEighteen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Creating SEO-Friendly Permalinks (URLs) for the Site</li>
                          <li>Customizing the URL of an Individual Page/Post</li>
                          <li>Setting Titles &amp; Meta Descriptions with an SEO Plugin</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item course-details-accordion-main">
                    <span className="accordion-count">19</span>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed course-details-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseNinteen"
                        aria-expanded="false"
                        aria-controls="collapseNinteen"
                      >
                        {" "}
                        Customizing WordPress{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseNinteen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body courses-syllabus-body">
                        <ul>
                          <li>Page Builders: Customizable Page Layouts</li>
                          <li>Theme Builders: Control the Website’s Look</li>
                          <li>Child Themes</li>
                          <li>Custom Post Types</li>
                          <li>Advanced Custom Fields</li>
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
