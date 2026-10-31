import CoursePage, { STANDARD_STATS, type CourseContent } from "@/components/sections/CoursePage";
import { courseMetadata } from "@/components/seo/CourseSeo";
import "@/styles/courses/course-stack.css";

export const metadata = courseMetadata("2d-animation");

const content: CourseContent = {
  slug: "2d-animation",
  banner: {
    title: "2D",
    sub: ["Animation", "Course"],
    h1Suffix: " Animation Course in Nellore",
    icons: [
      { src: "/assets/courses/2d-animation/keyframes.svg", alt: "Keyframes", width: 143, height: 54 },
      { src: "/assets/courses/2d-animation/characters.svg", alt: "Characters", width: 179, height: 47 },
      { src: "/assets/courses/2d-animation/storyboard.svg", alt: "Storyboard", width: 164, height: 54 },
      { src: "/assets/courses/2d-animation/motion.svg", alt: "Motion", width: 97, height: 63 },
    ],
  },
  about: {
    heading: "2D Animation",
    paragraphs: [
      "*2D animation* brings drawings and graphics to life. It is everywhere: explainer videos, advertisements, cartoons, e-learning content, social media posts and app interfaces. Good animators combine drawing, timing and storytelling to communicate ideas in seconds.",
      "In this course you learn the *principles of animation*, *storyboarding*, *character design* and rigging, and how to animate with *keyframes*. You build *motion graphics* in Adobe After Effects and finish with an animated short and portfolio pieces.",
    ],
  },
  syllabusName: "2D Animation",
  breakdown: { title: "2D Animation Course", stats: STANDARD_STATS },
  modules: [
    {
      title: "Foundations of Animation",
      topics: [
        "The 12 principles of animation",
        "Timing and spacing",
        "Frame-by-frame vs keyframe animation",
        "Frame rates",
      ],
    },
    {
      title: "Drawing & Design Basics",
      topics: ["Shapes, perspective and composition", "Colour theory", "Vector drawing with Adobe Illustrator"],
    },
    {
      title: "Storyboarding",
      topics: ["Writing a short script", "Storyboards and animatics", "Shot planning"],
    },
    {
      title: "Character Design & Rigging",
      topics: ["Designing characters", "Preparing artwork for animation", "Rigging with puppet tools"],
    },
    {
      title: "Animating in After Effects",
      topics: ["Keyframes and the graph editor", "Walk and run cycles", "Lip sync basics", "Expressions for motion"],
    },
    {
      title: "Motion Graphics",
      topics: ["Animated typography", "Logo animation", "Explainer video techniques", "Transitions and effects"],
    },
    {
      title: "Sound & Final Output",
      topics: ["Adding voice-over and music", "Syncing animation to sound", "Rendering for web and social media"],
    },
    {
      title: "Projects & Portfolio",
      topics: ["Animated short film", "Explainer video", "Showreel", "Freelancing and job preparation"],
    },
  ],
  faqs: [
    {
      q: "What is 2D animation?",
      a: "2D animation creates movement in a two-dimensional space using drawings, shapes and graphics. It is used in cartoons, explainer videos, advertisements, e-learning and social media content.",
    },
    {
      q: "Do I need to be good at drawing?",
      a: "Drawing skills help, but they are not required. The course teaches design basics and vector drawing, and much of motion graphics work uses shapes and text rather than hand drawing.",
    },
    {
      q: "Which software will I learn?",
      a: "You will mainly use Adobe After Effects for animation and motion graphics, and Adobe Illustrator for preparing characters and artwork.",
    },
    {
      q: "Are classes online or offline?",
      a: "Both. You can attend classroom sessions at our institute in Nellore or join online. Classes run Monday to Friday with one hour of real-time interactive teaching and two hours of practice time.",
    },
    {
      q: "Will I build a portfolio?",
      a: "Yes. You will complete 3-5 real-time projects, including an animated short and an explainer video, and assemble a showreel for clients and employers.",
    },
    {
      q: "What career options are available after learning 2D animation?",
      a: "You can work as a 2D Animator, Motion Graphics Designer, Explainer Video Creator or Content Creator for studios, advertising agencies, e-learning companies, or as a freelancer.",
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

export default function TwoDAnimationPage() {
  return <CoursePage content={content} />;
}
