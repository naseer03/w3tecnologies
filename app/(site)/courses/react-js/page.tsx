import CoursePage, { STANDARD_STATS, type CourseContent } from "@/components/sections/CoursePage";
import { courseMetadata } from "@/components/seo/CourseSeo";
import "@/styles/courses/course-stack.css";

export const metadata = courseMetadata("react-js");

const content: CourseContent = {
  slug: "react-js",
  banner: {
    title: "React",
    sub: ["JS", "Library"],
    h1Suffix: " JS Course in Nellore",
    icons: [
      { src: "/assets/courses/react-js/components.svg", alt: "Components", width: 160, height: 54 },
      { src: "/assets/courses/react-js/hooks.svg", alt: "Hooks", width: 140, height: 47 },
      { src: "/assets/courses/react-js/router.svg", alt: "Router", width: 130, height: 54 },
      { src: "/assets/courses/react-js/redux.svg", alt: "Redux", width: 91, height: 63 },
    ],
  },
  about: {
    heading: "React JS",
    paragraphs: [
      "*React* is a JavaScript library for building user interfaces, created by Meta and used by companies such as Netflix, Airbnb and Instagram. It lets developers build fast, interactive websites out of small reusable pieces called *components*, and it is one of the most requested front-end skills in job listings.",
      "In this course you go from the basics of components and *JSX* to *hooks*, *React Router*, forms, calling APIs and managing state with *Redux*. You build real single-page applications step by step and learn how to deploy them.",
    ],
  },
  syllabusName: "React JS",
  breakdown: { title: "React JS Course", stats: STANDARD_STATS },
  modules: [
    {
      title: "JavaScript for React",
      topics: [
        "ES6+: let/const, arrow functions, destructuring, spread",
        "Modules",
        "Array methods: map, filter, reduce",
        "Promises and async/await",
      ],
    },
    {
      title: "React Fundamentals",
      topics: [
        "Setting up a React project with Vite",
        "JSX",
        "Components and props",
        "Rendering lists and conditional rendering",
      ],
    },
    {
      title: "State & Events",
      topics: ["useState", "Handling events", "Lifting state up", "Controlled forms and validation"],
    },
    {
      title: "Hooks",
      topics: ["useEffect", "useRef", "useMemo and useCallback", "Writing custom hooks"],
    },
    {
      title: "Routing",
      topics: ["React Router", "Nested and dynamic routes", "Protected routes"],
    },
    {
      title: "Working with APIs",
      topics: ["Fetching data with fetch and Axios", "Loading and error states", "Building a CRUD app"],
    },
    {
      title: "State Management",
      topics: ["Context API", "Redux Toolkit", "Organising a larger app"],
    },
    {
      title: "Styling, Deployment & Projects",
      topics: [
        "CSS modules, Bootstrap and Tailwind CSS",
        "Building and deploying a React app",
        "Portfolio projects",
        "Resume building and mock interviews",
      ],
    },
  ],
  faqs: [
    {
      q: "What is React JS used for?",
      a: "React is used to build the user interface of websites and web applications, especially single-page applications where content updates without reloading the page, such as dashboards, e-commerce sites and social media apps.",
    },
    {
      q: "Do I need to know JavaScript before learning React?",
      a: "Basic HTML, CSS and JavaScript knowledge is recommended. The course begins with a JavaScript refresher covering the modern features React relies on, so you can follow along even if you are not yet confident.",
    },
    {
      q: "What will I be able to build after this course?",
      a: "You will be able to build complete React applications with multiple pages, forms, API data, authentication-protected routes and shared state, and deploy them online.",
    },
    {
      q: "Are classes online or offline?",
      a: "Both. You can attend classroom sessions at our institute in Nellore or join online. Classes run Monday to Friday with one hour of real-time interactive teaching and two hours of practice time.",
    },
    {
      q: "Will I work on real projects?",
      a: "Yes. You will build 3-5 real-time projects, such as a CRUD application connected to an API and a multi-page app with routing, along with 70-100 practical assignments.",
    },
    {
      q: "What jobs can I apply for after learning React?",
      a: "You can apply for roles such as React Developer, Front-End Developer and UI Developer. Combined with a back end such as Node.js, React also leads to full stack (MERN) roles.",
    },
    {
      q: "Will I receive a certificate?",
      a: "Yes. You receive a W3 Technologies course completion certificate after completing the course and its assessments.",
    },
    {
      q: "How do I know the fees and next batch timings?",
      a: "Fill out the form on this page or call +91 741-693-9333. Our counsellors will share the current fees, batch timings and the full syllabus.",
    },
  ],
};

export default function ReactJsPage() {
  return <CoursePage content={content} />;
}
