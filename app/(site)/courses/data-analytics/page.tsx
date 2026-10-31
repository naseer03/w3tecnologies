import CoursePage, { STANDARD_STATS, type CourseContent } from "@/components/sections/CoursePage";
import { courseMetadata } from "@/components/seo/CourseSeo";
import "@/styles/courses/course-stack.css";

export const metadata = courseMetadata("data-analytics");

const content: CourseContent = {
  slug: "data-analytics",
  banner: {
    title: "Data",
    sub: ["Analytics", "Course"],
    h1Suffix: " Analytics Course in Nellore",
    icons: [
      { src: "/assets/courses/data-analytics/excel.svg", alt: "Excel", width: 101, height: 54 },
      { src: "/assets/courses/data-analytics/sql.svg", alt: "SQL", width: 122, height: 47 },
      { src: "/assets/courses/data-analytics/power-bi.svg", alt: "Power BI", width: 144, height: 54 },
      { src: "/assets/courses/data-analytics/python.svg", alt: "Python", width: 97, height: 63 },
    ],
  },
  about: {
    heading: "Data Analytics",
    paragraphs: [
      "*Data Analytics* is the process of examining, cleaning, transforming and modelling data to discover useful information, draw conclusions and support decision-making. Every business today, from retail stores and hospitals to banks and e-commerce companies, collects data, and they need people who can turn that data into clear answers.",
      "In this course you learn the complete analyst toolkit, starting with *Excel*, moving to *SQL* for querying databases, *Power BI* and *Tableau* for dashboards, and *Python* with Pandas, NumPy and Matplotlib for analysis and visualisation. You practise on real datasets and finish with dashboard and analysis projects you can show in interviews.",
    ],
  },
  syllabusName: "Data Analytics",
  breakdown: { title: "Data Analytics Course", stats: STANDARD_STATS },
  modules: [
    {
      title: "Introduction to Data Analytics",
      topics: [
        "What data analysts do",
        "Types of data and data sources",
        "The data analysis process",
        "Descriptive, diagnostic, predictive and prescriptive analytics",
      ],
    },
    {
      title: "Advanced Excel",
      topics: [
        "Formulas and functions (IF, VLOOKUP, XLOOKUP, INDEX-MATCH)",
        "Data cleaning and validation",
        "Pivot tables and pivot charts",
        "Conditional formatting",
        "Excel dashboards",
      ],
    },
    {
      title: "Statistics for Data Analysis",
      topics: [
        "Mean, median, mode and spread",
        "Probability basics",
        "Distributions and sampling",
        "Correlation and regression",
        "Hypothesis testing",
      ],
    },
    {
      title: "SQL for Data Analysis",
      topics: [
        "SELECT, WHERE, ORDER BY",
        "Aggregate functions and GROUP BY",
        "Joins and subqueries",
        "Common table expressions (CTEs)",
        "Window functions",
      ],
    },
    {
      title: "Python for Data Analysis",
      topics: [
        "Python fundamentals",
        "NumPy arrays",
        "Pandas DataFrames: cleaning, merging, grouping",
        "Exploratory data analysis",
        "Matplotlib and Seaborn charts",
      ],
    },
    {
      title: "Data Visualisation with Power BI",
      topics: [
        "Power Query: importing and transforming data",
        "Data modelling and relationships",
        "DAX measures",
        "Interactive reports and dashboards",
        "Publishing and sharing",
      ],
    },
    {
      title: "Tableau",
      topics: ["Connecting to data", "Charts, maps and calculated fields", "Dashboards and stories"],
    },
    {
      title: "Projects & Career Preparation",
      topics: [
        "Sales dashboard project",
        "End-to-end analysis case study",
        "Building a portfolio",
        "Resume building and mock interviews",
      ],
    },
  ],
  faqs: [
    {
      q: "What is data analytics?",
      a: "Data analytics is the practice of collecting, cleaning and analysing data to find patterns and answer business questions. Analysts present their findings as reports and dashboards that help teams make better decisions.",
    },
    {
      q: "Do I need a programming or maths background to join?",
      a: "No. The course starts from the basics of Excel and statistics and introduces SQL and Python step by step. Comfort with school-level maths is enough to begin.",
    },
    {
      q: "Which tools will I learn in this course?",
      a: "You will learn Microsoft Excel, SQL, Power BI, Tableau and Python with the Pandas, NumPy and Matplotlib libraries. These are the tools most often listed in data analyst job descriptions.",
    },
    {
      q: "Who can join the Data Analytics course?",
      a: "Students of any degree (B.Sc, B.Com, BBA, BCA, B.Tech, MBA), freshers and working professionals who want to move into data roles can join. Many learners come from non-IT backgrounds.",
    },
    {
      q: "Are classes online or offline?",
      a: "Both. You can attend classroom sessions at our institute in Nellore or join online. Classes run Monday to Friday with one hour of real-time interactive teaching and two hours of practice time.",
    },
    {
      q: "Will I work on real projects?",
      a: "Yes. You will complete 3-5 real-time projects, such as building sales and performance dashboards and analysing real datasets end to end, along with 70-100 practical assignments.",
    },
    {
      q: "What jobs can I apply for after the course?",
      a: "You can apply for roles such as Data Analyst, Business Analyst, MIS Executive, Reporting Analyst and Power BI Developer. We also run mock interviews and help you prepare your resume.",
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

export default function DataAnalyticsPage() {
  return <CoursePage content={content} />;
}
