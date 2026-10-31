export type NavLink = { href: string; label: string };

/** "Explore Courses" mega-menu, one array per column. */
export const courseMenu: NavLink[][] = [
  [
    { href: "/courses/c", label: "C programming" },
    { href: "/courses/cpp", label: "C++ Programming" },
    { href: "/courses/c-cpp", label: "C and C++ " },
    { href: "/courses/python", label: "Python" },
    { href: "/courses/java", label: "Java " },
    { href: "/courses/dsa", label: "DSA" },
  ],
  [
    { href: "/courses/html-css-javascript", label: "HTML, CSS & JavaScript" },
    { href: "/courses/react-js", label: "React JS" },
    { href: "/courses/node-js", label: "Node.js" },
    { href: "/courses/mongodb", label: "MongoDB" },
    { href: "/courses/mern-stack", label: "MERN Stack" },
    { href: "/courses/back-end-development", label: "Back-End Development" },
  ],
  [
    { href: "/courses/php-mysql", label: "PHP & MySql" },
    { href: "/courses/laravel", label: "Laravel" },
    { href: "/courses/python-fullstack", label: "Python Full Stack" },
    { href: "/courses/sql", label: "SQL" },
    { href: "/courses/wordpress", label: "Wordpress" },
    { href: "/courses/data-analytics", label: "Data Analytics" },
  ],
  [
    { href: "/courses/digital-marketing", label: "Digital Marketing" },
    { href: "/courses/graphic-design", label: "Graphic Designing" },
    { href: "/courses/ui-ux-design", label: "UI/UX Designing" },
    { href: "/courses/video-editing", label: "Video Editing" },
    { href: "/courses/2d-animation", label: "2D Animation" },
    { href: "/courses/ms-office", label: "Ms Office" },
    { href: "/courses/tally-prime-nellore", label: "Tally Prime" },
  ],
];

export const serviceMenu: NavLink[] = [
  { href: "/services/web-development-service", label: "Web Development" },
  { href: "/services/internships", label: "Internship Programs" },
  { href: "/services/digital-marketing-agency-nellore", label: "Digital Marketing" },
];
