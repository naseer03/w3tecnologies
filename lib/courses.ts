export type Course = {
  /** Shown in "Want more details about the … course?" and stored with the enquiry. */
  name: string;
  /** Display name for structured data and breadcrumbs. */
  label: string;
  /** Syllabus emailed to the visitor, from private/coursepdfs. */
  pdf?: string;
  /** Search result title and description for the course page. */
  title: string;
  description: string;
};

export const courses = {
  c: {
    name: "c language",
    label: "C Programming Course",
    pdf: "c language.pdf",
    title: "C Programming Course in Nellore | W3 Technologies",
    description:
      "Discover the C language, a fundamental skill for programmers. Learn its concepts, syntax, & practical applications in system, application, & embedded development",
  },
  cpp: {
    name: "c++ language",
    label: "C++ Programming Course",
    pdf: "c++ language.pdf",
    title: "C++ Programming Course in Nellore | Beginner to Pro",
    description:
      "Learn C++ from beginner to pro at W3 Technologies, Nellore: data types, functions, OOP and more, with hands-on training, practical assignments and mock interviews.",
  },
  "c-cpp": {
    name: "c and c++ languages",
    label: "C and C++ Programming Course",
    pdf: "c and c++ languages.pdf",
    title: "C and C++ Programming Course in Nellore | W3 Technologies",
    description:
      "Learn C and C++ together at W3 Technologies, Nellore: procedural programming in C, then object-oriented programming in C++, with hands-on training and mock interviews.",
  },
  "digital-marketing": {
    name: "Digital Marketing",
    label: "Digital Marketing Course",
    pdf: "Digital Marketing.pdf",
    title: "Enhance Your Skills with Digital Marketing Course in Nellore",
    description:
      "Looking to enhance your skills with W3 technologies? Join our Certified digital marketing course in Nellore and become a digital marketing pro.",
  },
  dsa: {
    name: "DSA",
    label: "Data Structures and Algorithms (DSA) Course",
    pdf: "DSA.pdf",
    title: "Data Structures & Algorithms (DSA) Course in Nellore",
    description:
      "Master data structures and algorithms at W3 Technologies, Nellore: arrays, linked lists, stacks, graphs and problem solving to crack coding interviews.",
  },
  "graphic-design": {
    name: "Graphic Designing",
    label: "Graphic Design Course",
    pdf: "Graphic Designing.pdf",
    title: "Certified Graphic Design Course in Nellore | W3 Technologies",
    description:
      "Unleash your creativity with our certified graphic design course in Nellore. W3 Technologies offers comprehensive training & industry-recognized certification.",
  },
  "html-css-javascript": {
    name: "HTML, CSS and Javascript",
    label: "HTML, CSS and JavaScript Course",
    title: "HTML, CSS & JavaScript Course in Nellore | W3 Technologies",
    description:
      "Learn HTML, CSS and JavaScript from real-time experts at W3 Technologies, Nellore, and get guidance to clear UI developer interviews and land a job.",
  },
  java: {
    name: "Java",
    label: "Java Programming Course",
    pdf: "Java.pdf",
    title: "Java Programming Course in Nellore | W3 Technologies",
    description:
      "Join the Java programming course in Nellore: core Java, OOP, strings, arrays and multithreading, with hands-on training, practical assignments and mock interviews.",
  },
  laravel: {
    name: "Laravel PHP Fullstack",
    label: "Laravel PHP Full Stack Course",
    pdf: "Laravel.pdf",
    title: "Laravel PHP Full Stack Course in Nellore | W3 Technologies",
    description:
      "Become a PHP full stack developer with Laravel at W3 Technologies, Nellore: routing, controllers, models and RESTful APIs, built through real-time projects.",
  },
  "mern-stack": {
    name: "mern Full-Stack Developer",
    label: "MERN Stack Developer Course",
    pdf: "mern Full-Stack Developer.pdf",
    title: "MERN Stack Developer Course in Nellore | W3 Technologies",
    description:
      "Learn MongoDB, Express.js, React and Node.js in our MERN full stack developer course in Nellore, with real-time projects, 1:1 doubt solving and mock interviews.",
  },
  "ms-office": {
    name: "Ms-Office",
    label: "MS Office Course",
    pdf: "Ms-Office.pdf",
    title: "MS Office Course in Nellore: Word, Excel, PowerPoint",
    description:
      "Practical MS Office training at W3 Technologies, Nellore: Word, Excel, PowerPoint and Outlook for documents, spreadsheets, presentations and email.",
  },
  "php-mysql": {
    name: "PHP & Mysql",
    label: "PHP and MySQL Course",
    pdf: "PHP & Mysql.pdf",
    title: "PHP & MySQL Course in Nellore | W3 Technologies",
    description:
      "Master PHP and MySQL web development at W3 Technologies, Nellore: sessions, includes, databases and joins, with real-time projects and interview preparation.",
  },
  python: {
    name: "python",
    label: "Python Programming Course",
    pdf: "python.pdf",
    title: "Best Python Training Institute In Nellore | W3 Technologies",
    description:
      "For advance python training, W3 technologies is a best Python Training Institute in nellore, the most popular institute to learn Python Programming.",
  },
  "python-fullstack": {
    name: "Python Fullstack",
    label: "Python Full Stack Developer Course",
    pdf: "Python Fullstack.pdf",
    title: "Python Full Stack Developer Course in Nellore | W3 Technologies",
    description:
      "Become a Python full stack developer at W3 Technologies, Nellore: HTML, CSS and JavaScript for the front end, Python for the back end, plus databases and real-time projects.",
  },
  sql: {
    name: "MySQL",
    label: "MySQL Database Course",
    pdf: "MySQL.pdf",
    title: "Learn MySQL full course in Nellore | W3 Technologies",
    description:
      "Learn MySQL full course in Nellore with W3 Technologies. Master database management and SQL queries. Enroll now and kickstart your career in technology.",
  },
  "tally-prime-nellore": {
    name: "Tally Prime",
    label: "Tally Prime Course",
    title: "Tally Prime Course in Nellore | W3 Technologies",
    description:
      "Learn Tally Prime accounting software at W3 Technologies, Nellore: accounting, inventory and day-to-day business transactions with hands-on practice.",
  },
  "ui-ux-design": {
    name: "UI-UX Designing",
    label: "UI/UX Design Course",
    pdf: "UIUX Designing.pdf",
    title: "Learn UI/UX Design Course & Build Beautiful & Functional Websites",
    description:
      "Learn UI/UX design skills to create engaging interfaces with W3 Technologies. Explore topics like research, prototyping, HTML, CSS, wireframing, and user testing.",
  },
  wordpress: {
    name: "Wordpress",
    label: "WordPress Development Course",
    pdf: "Wordpress.pdf",
    title: "WordPress Website Development Course in Nellore",
    description:
      "Build websites with WordPress at W3 Technologies, Nellore: themes, plugins, page builders, posts and CMS management, with hands-on practice.",
  },
  "data-analytics": {
    name: "Data Analytics",
    label: "Data Analytics Course",
    title: "Data Analytics Course in Nellore: Excel, SQL, Power BI, Python",
    description:
      "Learn data analytics at W3 Technologies, Nellore: Excel, SQL, Power BI, Tableau and Python (Pandas, NumPy, Matplotlib), with real-time projects and interview preparation.",
  },
  "back-end-development": {
    name: "Back-End Development",
    label: "Back-End Development Course",
    title: "Back-End Development Course in Nellore | W3 Technologies",
    description:
      "Learn back-end web development at W3 Technologies, Nellore: Node.js, Express, PHP, REST APIs, MySQL, MongoDB, authentication and deployment, through real-time projects.",
  },
  "react-js": {
    name: "React JS",
    label: "React JS Course",
    title: "React JS Course in Nellore | W3 Technologies",
    description:
      "Learn React JS at W3 Technologies, Nellore: components, props, state, hooks, React Router, Redux and API integration, building real front-end projects step by step.",
  },
  "node-js": {
    name: "Node.js",
    label: "Node.js Course",
    title: "Node.js Course in Nellore: Express & REST APIs | W3 Technologies",
    description:
      "Learn Node.js at W3 Technologies, Nellore: asynchronous JavaScript, Express.js, REST APIs, MongoDB, JWT authentication and deployment, with hands-on projects.",
  },
  mongodb: {
    name: "MongoDB",
    label: "MongoDB Database Course",
    title: "MongoDB Course in Nellore | W3 Technologies",
    description:
      "Learn MongoDB at W3 Technologies, Nellore: documents and collections, CRUD queries, indexes, aggregation pipelines, schema design and Mongoose with Node.js.",
  },
  "video-editing": {
    name: "Video Editing",
    label: "Video Editing Course",
    title: "Video Editing Course in Nellore: Premiere Pro & After Effects",
    description:
      "Learn professional video editing at W3 Technologies, Nellore with Adobe Premiere Pro and After Effects: cutting, transitions, colour grading, sound, titles and motion graphics.",
  },
  "2d-animation": {
    name: "2D Animation",
    label: "2D Animation Course",
    title: "2D Animation Course in Nellore | W3 Technologies",
    description:
      "Learn 2D animation at W3 Technologies, Nellore: principles of animation, storyboarding, character design, keyframes, motion graphics in After Effects and a portfolio project.",
  },
} satisfies Record<string, Course>;

export type CourseSlug = keyof typeof courses;

export function getCourse(slug: string): Course | undefined {
  return Object.hasOwn(courses, slug) ? courses[slug as CourseSlug] : undefined;
}
