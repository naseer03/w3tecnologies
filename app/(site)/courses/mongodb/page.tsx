import CoursePage, { STANDARD_STATS, type CourseContent } from "@/components/sections/CoursePage";
import { courseMetadata } from "@/components/seo/CourseSeo";
import "@/styles/courses/course-stack.css";

export const metadata = courseMetadata("mongodb");

const content: CourseContent = {
  slug: "mongodb",
  banner: {
    title: "MongoDB",
    sub: ["NoSQL", "Database"],
    h1Suffix: " Database Course in Nellore",
    icons: [
      { src: "/assets/courses/mongodb/documents.svg", alt: "Documents", width: 149, height: 54 },
      { src: "/assets/courses/mongodb/queries.svg", alt: "Queries", width: 152, height: 47 },
      { src: "/assets/courses/mongodb/aggregation.svg", alt: "Aggregation", width: 175, height: 54 },
      { src: "/assets/courses/mongodb/mongoose.svg", alt: "Mongoose", width: 124, height: 63 },
    ],
  },
  about: {
    heading: "MongoDB",
    paragraphs: [
      '*MongoDB* is the most widely used *NoSQL* database. Instead of rows and tables, it stores data as flexible JSON-like *documents*, which makes it a natural fit for modern web and mobile applications. It is the "M" in the MERN stack and is used by companies of every size.',
      "In this course you learn to model data as documents, write *CRUD queries*, speed up searches with *indexes*, analyse data with the *aggregation pipeline*, and connect MongoDB to Node.js applications using *Mongoose*.",
    ],
  },
  syllabusName: "MongoDB",
  breakdown: { title: "MongoDB Course", stats: STANDARD_STATS },
  modules: [
    {
      title: "Introduction to NoSQL",
      topics: [
        "SQL vs NoSQL databases",
        "Documents, collections and databases",
        "Installing MongoDB and MongoDB Atlas",
        "Using Compass and mongosh",
      ],
    },
    {
      title: "CRUD Operations",
      topics: [
        "Inserting documents",
        "Finding and filtering data",
        "Updating and deleting",
        "Query and projection operators",
      ],
    },
    {
      title: "Data Modelling",
      topics: ["Embedding vs referencing", "One-to-many and many-to-many relationships", "Schema design patterns"],
    },
    {
      title: "Indexes & Performance",
      topics: ["Single and compound indexes", "Text indexes", "Explaining and optimising queries"],
    },
    {
      title: "Aggregation Framework",
      topics: ["$match, $group, $project and $sort", "$lookup joins", "Building reports with pipelines"],
    },
    {
      title: "MongoDB with Node.js",
      topics: ["Mongoose schemas and models", "Validation and middleware", "Building a REST API with MongoDB"],
    },
    {
      title: "Administration & Projects",
      topics: ["Users and roles", "Backup and restore", "Database project", "Resume building and mock interviews"],
    },
  ],
  faqs: [
    {
      q: "What is MongoDB?",
      a: "MongoDB is a NoSQL document database. It stores data in flexible JSON-like documents rather than fixed tables, which makes it easy to change your data structure as an application grows.",
    },
    {
      q: "What is the difference between MongoDB and MySQL?",
      a: "MySQL is a relational database that stores data in tables with a fixed schema and uses SQL. MongoDB stores documents with a flexible schema and uses its own query language. Many companies use both, and this course explains when each fits best.",
    },
    {
      q: "Do I need programming knowledge to learn MongoDB?",
      a: "No programming is needed for the database topics. Basic JavaScript helps for the final module, where you connect MongoDB to a Node.js application.",
    },
    {
      q: "Are classes online or offline?",
      a: "Both. You can attend classroom sessions at our institute in Nellore or join online. Classes run Monday to Friday with one hour of real-time interactive teaching and two hours of practice time.",
    },
    {
      q: "Will I work on real projects?",
      a: "Yes. You will design and build databases for real-time projects, including a REST API backed by MongoDB, along with 70-100 practical assignments.",
    },
    {
      q: "What jobs need MongoDB skills?",
      a: "MongoDB is used by Back-End Developers, MERN Stack Developers, Node.js Developers and Database Developers. It is a core skill for anyone building modern JavaScript applications.",
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

export default function MongoDbPage() {
  return <CoursePage content={content} />;
}
