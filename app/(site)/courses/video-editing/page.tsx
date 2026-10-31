import CoursePage, { STANDARD_STATS, type CourseContent } from "@/components/sections/CoursePage";
import { courseMetadata } from "@/components/seo/CourseSeo";
import "@/styles/courses/course-stack.css";

export const metadata = courseMetadata("video-editing");

const content: CourseContent = {
  slug: "video-editing",
  banner: {
    title: "Video",
    sub: ["Editing", "Course"],
    h1Suffix: " Editing Course in Nellore",
    icons: [
      { src: "/assets/courses/video-editing/premiere-pro.svg", alt: "Premiere Pro", width: 158, height: 54 },
      { src: "/assets/courses/video-editing/after-effects.svg", alt: "After Effects", width: 185, height: 47 },
      { src: "/assets/courses/video-editing/color-grading.svg", alt: "Color Grading", width: 186, height: 54 },
      { src: "/assets/courses/video-editing/sound.svg", alt: "Sound", width: 94, height: 63 },
    ],
  },
  about: {
    heading: "Video Editing",
    paragraphs: [
      "*Video editing* is the craft of turning raw footage into a clear, engaging story. With YouTube, Instagram Reels, advertising and corporate video all growing fast, businesses and creators need editors who can produce professional videos quickly.",
      "In this course you learn industry-standard *Adobe Premiere Pro* for editing and *Adobe After Effects* for titles and motion graphics. You practise cutting, transitions, *colour grading*, *sound* editing and exporting for every platform, and build a showreel of your own projects.",
    ],
  },
  syllabusName: "Video Editing",
  breakdown: { title: "Video Editing Course", stats: STANDARD_STATS },
  modules: [
    {
      title: "Video Fundamentals",
      topics: [
        "Frame rates, resolution and aspect ratios",
        "Codecs and formats",
        "Shots, angles and the rules of editing",
        "Organising footage",
      ],
    },
    {
      title: "Adobe Premiere Pro Basics",
      topics: [
        "Interface and workspace",
        "Importing and organising media",
        "Timeline editing: cuts, trims and ripple edits",
        "Transitions",
      ],
    },
    {
      title: "Advanced Editing",
      topics: [
        "Multi-camera editing",
        "Speed ramps and time remapping",
        "Keyframes and motion",
        "Green screen (chroma key)",
      ],
    },
    {
      title: "Colour Correction & Grading",
      topics: ["Lumetri Color", "White balance and exposure", "LUTs and cinematic looks", "Matching shots"],
    },
    {
      title: "Audio Editing",
      topics: ["Cleaning dialogue and removing noise", "Background music and sound effects", "Mixing and levels"],
    },
    {
      title: "Titles & Motion Graphics with After Effects",
      topics: [
        "After Effects interface",
        "Animated titles and lower thirds",
        "Motion graphics basics",
        "Using templates with Dynamic Link",
      ],
    },
    {
      title: "Exporting & Publishing",
      topics: ["Export settings for YouTube, Instagram and ads", "Vertical video and Reels", "Thumbnails"],
    },
    {
      title: "Projects & Portfolio",
      topics: ["Promotional video", "Social media reels", "Showreel", "Freelancing and job preparation"],
    },
  ],
  faqs: [
    {
      q: "Which software will I learn?",
      a: "You will learn Adobe Premiere Pro for video editing and Adobe After Effects for titles and motion graphics, the tools used by most professional editors and studios.",
    },
    {
      q: "Do I need any experience to join?",
      a: "No. The course starts from the basics of video and editing software. Basic computer skills are enough to begin.",
    },
    {
      q: "Can I edit videos for YouTube and Instagram after this course?",
      a: "Yes. You will learn to edit, grade, add sound and titles, and export videos correctly for YouTube, Instagram Reels and advertisements, including vertical formats.",
    },
    {
      q: "Are classes online or offline?",
      a: "Both. You can attend classroom sessions at our institute in Nellore or join online. Classes run Monday to Friday with one hour of real-time interactive teaching and two hours of practice time.",
    },
    {
      q: "Will I build a portfolio?",
      a: "Yes. You will complete 3-5 real-time projects, such as a promotional video and social media reels, and put together a showreel to show clients and employers.",
    },
    {
      q: "What career options are available for video editors?",
      a: "You can work as a Video Editor, YouTube Editor, Motion Graphics Assistant or Social Media Content Creator, join agencies and production houses, or take freelance projects.",
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

export default function VideoEditingPage() {
  return <CoursePage content={content} />;
}
