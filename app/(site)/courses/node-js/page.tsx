import CoursePage, { STANDARD_STATS, type CourseContent } from "@/components/sections/CoursePage";
import { courseMetadata } from "@/components/seo/CourseSeo";
import "@/styles/courses/course-stack.css";

export const metadata = courseMetadata("node-js");

const content: CourseContent = {
  slug: "node-js",
  banner: {
    title: "Node.js",
    sub: ["Server-Side", "JavaScript"],
    h1Suffix: " Course in Nellore",
    icons: [
      { src: "/assets/courses/node-js/express-js.svg", alt: "Express.js", width: 134, height: 54 },
      { src: "/assets/courses/node-js/rest-apis.svg", alt: "REST APIs", width: 164, height: 47 },
      { src: "/assets/courses/node-js/npm.svg", alt: "NPM", width: 113, height: 54 },
      { src: "/assets/courses/node-js/jwt-auth.svg", alt: "JWT Auth", width: 115, height: 63 },
    ],
  },
  about: {
    heading: "Node.js",
    paragraphs: [
      "*Node.js* lets you run JavaScript on the server, so the same language powers both the website and the back end behind it. It is fast, handles many users at once, and is used by companies such as PayPal, LinkedIn and Uber for APIs and real-time applications.",
      "In this course you learn how Node.js works, build web servers and *REST APIs* with *Express.js*, connect to *MongoDB* and *MySQL*, secure your APIs with *JWT authentication*, and deploy your applications. Every topic is practised with hands-on coding.",
    ],
  },
  syllabusName: "Node.js",
  breakdown: { title: "Node.js Course", stats: STANDARD_STATS },
  modules: [
    {
      title: "JavaScript Essentials",
      topics: ["ES6+ syntax", "Closures and scope", "Callbacks, promises and async/await", "Error handling"],
    },
    {
      title: "Node.js Fundamentals",
      topics: [
        "How Node.js works: the event loop",
        "Modules (CommonJS and ES modules)",
        "NPM and package.json",
        "File system, path and events",
      ],
    },
    {
      title: "Building Web Servers",
      topics: ["The http module", "Express.js setup", "Routing and middleware", "Serving static files and templates"],
    },
    {
      title: "REST APIs",
      topics: ["REST principles", "CRUD endpoints", "Request validation", "Testing APIs with Postman"],
    },
    {
      title: "Databases",
      topics: ["MongoDB with Mongoose", "MySQL with Node.js", "Relationships and queries"],
    },
    {
      title: "Authentication & Security",
      topics: [
        "Password hashing with bcrypt",
        "JWT authentication",
        "Role-based access",
        "Environment variables and secrets",
      ],
    },
    {
      title: "Advanced Topics",
      topics: ["File uploads", "Sending emails", "Real-time apps with Socket.IO", "Logging and error monitoring"],
    },
    {
      title: "Deployment & Projects",
      topics: ["Git and GitHub", "Deploying Node.js apps", "REST API project", "Resume building and mock interviews"],
    },
  ],
  faqs: [
    {
      q: "What is Node.js used for?",
      a: "Node.js is used to build the server side of web applications: REST APIs, real-time apps such as chat, back ends for mobile apps, and command-line tools, all using JavaScript.",
    },
    {
      q: "Do I need to know JavaScript before learning Node.js?",
      a: "Basic JavaScript knowledge is helpful. The course starts with the JavaScript essentials Node.js depends on, including asynchronous programming, so beginners can follow along.",
    },
    {
      q: "Is Node.js a programming language?",
      a: "No. Node.js is a runtime environment that runs JavaScript outside the browser. You write JavaScript, and Node.js executes it on the server.",
    },
    {
      q: "Are classes online or offline?",
      a: "Both. You can attend classroom sessions at our institute in Nellore or join online. Classes run Monday to Friday with one hour of real-time interactive teaching and two hours of practice time.",
    },
    {
      q: "Will I build real projects?",
      a: "Yes. You will build 3-5 real-time projects, including secured REST APIs connected to a database, along with 70-100 practical assignments.",
    },
    {
      q: "What jobs can I apply for after this course?",
      a: "You can apply for roles such as Node.js Developer, Back-End Developer and API Developer. Together with React, Node.js also prepares you for MERN full stack roles.",
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

export default function NodeJsPage() {
  return <CoursePage content={content} />;
}
