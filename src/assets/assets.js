import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profileImg.png';
import projectImg1 from '../assets/project1.avif';
import projectImg4 from '../assets/project4.avif';
import project from '../assets/service5.png';
import profile1 from '../assets/profile.png';

export const assets = {
  profileImg,
  profile1,
}


export const aboutInfo = [
  {
    icon: FaCode,
    title: 'Frontend Expertise',
    description: 'Developing high-performance SPAs using React 19 and Next.js, prioritizing semantic HTML and accessibility.',
    color: 'text-sky-400'
  },
  {
    icon: FaLightbulb,
    title: 'Strategic Problem Solving',
    description: 'Translating complex business requirements into scalable architecture and clean, maintainable codebases.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'Design-Driven Engineering',
    description: 'Pixel-perfect UI implementation with a strong focus on Framer Motion animations and responsive UX.',
    color: 'text-pink'
  }
];



export const skills = [
  {
    title: 'Core Frontend',
    icon: FaReact,
    description: 'Primary tools for building modern interfaces.',
    tags: [
      { name: 'React.js', level: 'Intermediate (2+ years)' },
      { name: 'Next.js', level: 'Intermediate (1.5+ years)' },
      { name: 'JavaScript (ES6+)', level: 'Advanced' },
      { name: 'HTML5/CSS3', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Intermediate (1.5+ years)' }
    ]
  },
  {
    title: 'State & API',
    icon: FaDatabase,
    description: 'Managing data flow and server communication.',
    tags: [
      { name: 'Redux Toolkit', level: 'Intermediate' },
      { name: 'Context API', level: 'Advanced' },
      { name: 'TanStack Query', level: 'Beginner' },
      { name: 'RESTful APIs', level: 'Intermediate' }
    ]
  },
  {
    title: 'Tools & Ecosystem',
    icon: FaTools,
    description: 'Workflow and deployment utilities.',
    tags: [
      { name: 'Git & GitHub', level: 'Intermediate' },
      { name: 'Vite', level: 'Advanced' },
      { name: 'Figma', level: 'Intermediate' },
      { name: 'Vercel/Netlify', level: 'Advanced' }
    ]
  }
];



export const projects = [
  {
    title: "Fly Medical Ambulance",
    description: "A comprehensive booking and tracking system for emergency medical services.",
    problem: "Existing ambulance services lacked real-time tracking and an easy-to-use digital booking interface, leading to delays.",
    solution: "Built a responsive React application with geolocation tracking and a streamlined 3-step booking web form.",
    metrics: "Reduced booking time by ~40% vs phone calls.",
    image: project,
    tech: ["React", "Tailwind CSS", "Vite", "Node.js (Mock)"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "https://fly-medical-ambulance.vercel.app/",
    code: "https://github.com/zenithshah07-creator/Red-air-Ambulance-copy",
  },
  {
    title: "GoalTracker Pro",
    description: "A productivity application for defining, tracking, and achieving personal and professional goals.",
    problem: "Users struggled with complex goal management apps that were cluttered and difficult to navigate.",
    solution: "Designed a minimalist, drag-and-drop interface using React and local storage for persistence without login friction.",
    metrics: "Achieved 95+ Lighthouse Performance score.",
    image: projectImg1, // Placeholder
    tech: ["React", "Vite", "Tailwind CSS"],
    icons: [FaReact, FaFire, FaStripe],
    demo: "https://taracker.vercel.app/",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "My personal digital garden showcasing projects and skills.",
    problem: "Needed a way to present my work professionally that stands out from generic templates.",
    solution: "Developed a custom performant site using Vite and Framer Motion for smooth, non-intrusive animations.",
    metrics: "Zero layout shift (CLS 0) and <1s LCP.",
    image: projectImg4,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
];


export const workData = [
  {
    role: "Frontend Developer (Freelance)",
    company: "Self-Employed",
    duration: "2025 - Present",
    description:
      "Engineered high-quality web solutions for diverse clients. Optimized asset delivery and refactored legacy CSS to Tailwind, resulting in a 30% improvement in PageSpeed Insights scores and enhanced codebase maintainability.",
    color: "purple"
  },
  {
    role: "Frontend Intern",
    company: "Academy of Code", // Replaced placeholder with a more formal name or just keeping it professional
    duration: "2024",
    description:
      "Collaborated on 5+ full-stack projects using React and Node.js. Focused on architecting reusable components, streamlining API integration patterns, and implementing cross-browser responsive design systems.",
    color: "pink"
  }
];
