import CoursePage, { STANDARD_STATS, type CourseContent } from "@/components/sections/CoursePage";
import { courseMetadata } from "@/components/seo/CourseSeo";
import "@/styles/courses/course-stack.css";

export const metadata = courseMetadata("back-end-development");

const content: CourseContent = {
  slug: "back-end-development",
  banner: {
    title: "Back-End",
    sub: ["Web", "Development"],
    h1Suffix: " Web Development Course in Nellore",
    icons: [
      { src: "/assets/courses/back-end/node-js.svg", alt: "Node.js", width: 118, height: 54 },
      { src: "/assets/courses/back-end/php.svg", alt: "PHP", width: 123, height: 47 },
      { src: "/assets/courses/back-end/rest-apis.svg", alt: "REST APIs", width: 150, height: 54 },
      { src: "/assets/courses/back-end/databases.svg", alt: "Databases", width: 127, height: 63 },
    ],
  },
  about: {
    heading: "Back-End Development",
    paragraphs: [
      "*Back-end development* is the part of web development that runs on the server: it stores data, applies business rules, handles logins and payments, and sends the right data to the website or mobile app. Every login form, shopping cart and dashboard you use depends on a back end.",
      "This course teaches you to build that server side. You learn *Node.js* with *Express* and *PHP*, design *REST APIs*, work with *MySQL* and *MongoDB* databases, secure your applications with authentication, and deploy them to a live server, through hands-on projects from day one.",
    ],
  },
  syllabusName: "Back-End Development",
  breakdown: { title: "Back-End Development Course", stats: STANDARD_STATS },
  modules: [
    {
      title: "How the Web Works",
      topics: ["Client-server architecture", "HTTP methods and status codes", "Request/response cycle", "JSON"],
    },
    {
      title: "JavaScript & Node.js",
      topics: [
        "Modern JavaScript (ES6+)",
        "Asynchronous programming: callbacks, promises, async/await",
        "Node.js modules and NPM",
        "File system and events",
      ],
    },
    {
      title: "Express.js & REST APIs",
      topics: [
        "Routing and middleware",
        "REST API design",
        "Validation and error handling",
        "Testing APIs with Postman",
      ],
    },
    {
      title: "PHP Back End",
      topics: ["PHP fundamentals", "Forms, sessions and cookies", "Object-oriented PHP", "Introduction to Laravel"],
    },
    {
      title: "Databases",
      topics: [
        "Relational design and normalisation",
        "MySQL queries and joins",
        "MongoDB documents and collections",
        "Using databases from Node.js and PHP",
      ],
    },
    {
      title: "Authentication & Security",
      topics: [
        "Password hashing",
        "Sessions and JWT",
        "Role-based access",
        "Common security risks and how to prevent them",
      ],
    },
    {
      title: "Deployment & Tools",
      topics: ["Git and GitHub", "Environment variables", "Deploying to a cloud server", "Introduction to Docker"],
    },
    {
      title: "Projects & Career Preparation",
      topics: ["REST API project", "Full application with login and database", "Resume building and mock interviews"],
    },
  ],
  faqs: [
    {
      q: "What is back-end development?",
      a: "Back-end development is building the server side of websites and apps: the code, databases and APIs that store data, apply business logic and send information to the front end that users see.",
    },
    {
      q: "Which languages and tools will I learn?",
      a: "You will learn JavaScript with Node.js and Express, PHP, MySQL and MongoDB, REST API design, authentication, Git and deployment basics.",
    },
    {
      q: "Do I need to know front-end development first?",
      a: "It helps to know basic HTML, CSS and JavaScript, but it is not required. We cover the JavaScript you need at the start of the course. If you want both sides, our MERN and full stack courses combine front end and back end.",
    },
    {
      q: "Are classes online or offline?",
      a: "Both. You can attend classroom sessions at our institute in Nellore or join online. Classes run Monday to Friday with one hour of real-time interactive teaching and two hours of practice time.",
    },
    {
      q: "Will I build real projects?",
      a: "Yes. You will build 3-5 real-time projects, including REST APIs and a complete application with user login and a database, along with 70-100 practical assignments.",
    },
    {
      q: "What jobs can I apply for after this course?",
      a: "You can apply for roles such as Back-End Developer, Node.js Developer, PHP Developer, API Developer and Junior Software Engineer. We also run mock interviews and help with your resume.",
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

export default function BackEndDevelopmentPage() {
  return <CoursePage content={content} />;
}
