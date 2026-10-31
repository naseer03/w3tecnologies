import { Fragment } from "react";
import { contact, fullAddress, socialLinks } from "@/lib/site";
import type { NavLink } from "./nav-links";

const courseGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "Full Stack Development Courses",
    links: [
      { href: "/courses/html-css-javascript", label: "Front-End Development" },
      { href: "/courses/back-end-development", label: "Back-End Development" },
      { href: "/courses/laravel", label: "PHP Full Stack" },
      { href: "/courses/python-fullstack", label: "Python Full Stack" },
      { href: "/courses/mern-stack", label: "MERN Full Stack" },
      { href: "/courses/sql", label: "Database Management" },
      { href: "/courses/html-css-javascript", label: "Javascript" },
      { href: "/courses/python", label: "Core Python" },
      { href: "/courses/python", label: "Advanced Python" },
      { href: "/courses/php-mysql", label: "PHP" },
      { href: "/courses/react-js", label: "ReactJS" },
      { href: "/courses/node-js", label: "Node.js" },
      { href: "/courses/sql", label: "MySQL" },
      { href: "/courses/mongodb", label: "MongoDB" },
    ],
  },
  {
    title: "Digital Marketing Courses",
    links: [
      "Search Engine Optimization (SEO)",
      "Search Engine Marketing (SEM)",
      "Social Media Optimization (SMO)",
      "Social Media Marketing (SMM)",
      "Content Marketing",
      "Email Marketing",
      "Whatsapp Marketing",
      "Affiliate Marketing",
    ].map((label) => ({ href: "/courses/digital-marketing", label })),
  },
  {
    title: "Designing Courses",
    links: [
      { href: "/courses/graphic-design", label: "Graphic Designing" },
      { href: "/courses/ui-ux-design", label: "UI/UX Designing" },
      { href: "/courses/video-editing", label: "Video Editing" },
      { href: "/courses/2d-animation", label: "2D Animation" },
      { href: "/courses/graphic-design", label: "Adobe Photoshop" },
      { href: "/courses/graphic-design", label: "Adobe Illustrator" },
      { href: "/courses/ui-ux-design", label: "Adobe XD" },
      { href: "/courses/ui-ux-design", label: "Figma" },
      { href: "/courses/video-editing", label: "Adobe Premiere Pro" },
      { href: "/courses/video-editing", label: "Adobe After Effects" },
    ],
  },
  {
    title: "Basic Courses",
    links: [
      { href: "/courses/c", label: "C-Language" },
      { href: "/courses/cpp", label: "C++" },
      { href: "/courses/c-cpp", label: "C and C++" },
      { href: "/courses/dsa", label: "DSA" },
      { href: "/courses/ms-office", label: "MS-Office" },
    ],
  },
];

function LinkList({ links, className }: { links: NavLink[]; className?: string }) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href}>
            <span>{link.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function SiteFooter() {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <a href="/">
                <img src="/assets/footer/w3tech-logo-white.svg" alt="w3-tech-logo" className="img-fluid" />
              </a>
              <div className="learn-with-w3">
                <p>Learn with w3 technologies</p>
                <p>to start your career</p>
              </div>
              <div className="d-flex gap-4">
                {socialLinks.map(({ href, icon }) => (
                  <a key={icon} href={href}>
                    <img src={`/assets/footer/${icon}.svg`} alt={icon} />
                  </a>
                ))}
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <div className="contact-us pt-4 pt-md-0">
                <h4>Contact us</h4>
                <div className="pt-2">
                  <ul className="contact-details">
                    <li className="phone">
                      <a href={contact.phoneHref}>
                        <img src="/assets/footer/phone-icon.svg" alt="phone-icon" className="contact-icon" />
                        <span>{contact.phone}</span>
                      </a>
                    </li>
                    <li className="email">
                      <a href={`mailto:${contact.email}`}>
                        <img src="/assets/footer/email-icon.svg" alt="email-icon" className="contact-icon" />
                        <span>{contact.email}</span>
                      </a>
                    </li>
                  </ul>
                  <div className="d-flex gap-4 location">
                    <img src="/assets/footer/location-icon.svg" alt="location-icon" className="contact-icon" />
                    <p className="address">{fullAddress}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-2">
              <div className="company pt-4 pt-lg-0">
                <h4>Company</h4>
                <LinkList
                  className="pt-2"
                  links={[
                    { href: "/about", label: "About Us" },
                    { href: "/blogs", label: "Blogs" },
                    { href: "/careers", label: "Careers" },
                  ]}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-2">
              <div className="support pt-4 pt-lg-0">
                <h4>Support</h4>
                <LinkList
                  className="pt-2"
                  links={[
                    { href: "/privacy-policy", label: "Privacy Policy" },
                    { href: "/terms-conditions", label: "Terms & Conditions" },
                    { href: "/contact", label: "Contact Us" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        {courseGroups.map((group) => (
          <Fragment key={group.title}>
            <hr />
            <div className="footer-courses">
              <h6 className="course-name">{group.title}</h6>
              <ul className="sub-courses ">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </Fragment>
        ))}
        <hr />
        <div className="footer-bottom pt-3 pt-md-4">
          <p className="copy-rights">
            © Copyright 2026, All Rights Reserved <a href="https://w3tec.com/">w3tecnologies</a>
          </p>
        </div>
      </div>
    </section>
  );
}
