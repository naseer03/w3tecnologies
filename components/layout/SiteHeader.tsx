"use client";

import { useEffect, useState } from "react";
import { courseMenu, serviceMenu, type NavLink } from "./nav-links";

// Links are plain <a> on purpose: every page has its own stylesheet, and several of them
// style bare selectors (h2, a, form, .banner). A full page load keeps each page's CSS isolated,
// exactly as the PHP site behaved.

function LinkColumns({ columns }: { columns: NavLink[][] }) {
  return columns.map((links, i) => (
    <ul key={i}>
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  ));
}

const Logo = () => (
  <a className="navbar-brand" href="/">
    <img src="/assets/nav/w3tech-logo.svg" alt="w3tec-logo" className="img-fluid" />
  </a>
);

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<"courses" | "services" | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = (menu: "courses" | "services") => setOpenMobileMenu((open) => (open === menu ? null : menu));
  const mobileMenuClass = (menu: "courses" | "services") =>
    `mbl-menu ${openMobileMenu === menu ? "" : "mbl-menu-hidden"}`;

  return (
    <header className={`header ${scrolled ? "scroll-header fixed-top" : ""}`} id="nav-header">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className="container">
            <div className="d-flex justify-content-between justify-content-lg-start">
              <Logo />
              <div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExampleone"
                  aria-controls="offcanvasExampleone"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <ul className="navbar-nav">
                    <li className="nav-link dropdown-menu-item courses">
                      <p className="explore-menu-link">Explore Courses</p>
                      <div className="megamenu-dropdown mbl-menu-none">
                        <div className="megamenu-main-dropdown">
                          <LinkColumns columns={courseMenu} />
                        </div>
                      </div>
                    </li>
                    <li className="nav-link dropdown-menu-item services-menu">
                      <p className="services-menu-link">Services</p>
                      <div className="megamenu-dropdown mbl-menu-none">
                        <div className="megamenu-main-dropdown">
                          <LinkColumns columns={[serviceMenu]} />
                        </div>
                      </div>
                    </li>
                    <li className="nav-link">
                      <a href="/about">Know About us</a>
                    </li>
                    <li className="nav-link">
                      <a href="/contact">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mobile navigation */}
            <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExampleone">
              <div className="offcanvas-header">
                <Logo />
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
              </div>
              <div className="offcanvas-body d-block d-lg-none">
                <ul>
                  <li className="nav-link courses-mbl ">
                    <p className="explore-course-link explore-course" onClick={() => toggle("courses")}>
                      Explore Courses
                    </p>
                    <div className={mobileMenuClass("courses")}>
                      <div className="mbl-menu-dropdown">
                        <LinkColumns columns={courseMenu} />
                      </div>
                    </div>
                  </li>
                  <li className="nav-link  services-mbl ">
                    <p className="services-menu-link services-menu" onClick={() => toggle("services")}>
                      Services
                    </p>
                    <div className={mobileMenuClass("services")}>
                      <div className="mbl-menu-dropdown">
                        <LinkColumns columns={[serviceMenu]} />
                      </div>
                    </div>
                  </li>
                  <li className="nav-link">
                    <a href="/about">Know About us</a>
                  </li>
                  <li className="nav-link">
                    <a href="/contact">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
