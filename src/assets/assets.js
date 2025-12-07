import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profileImg.png';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';
import project from '../assets/service5.png';
import profile1 from '../assets/profile.png';

export const assets = {
  profileImg,
  profile1,
}


export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Innovative',
    description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'Design Oriented',
    description: 'Beautiful design and user experience are at the heart of everything I create.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'I write maintainable, efficient code following best practices and modern patterns.',
    color: 'text-blue'
  }
];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Tailwind', 'HTML', 'JavaScript', 'CSS']
  },
  {
    title: 'Tools & Deployment',
    icon: FaTools,
    description: 'Essential tools and Deployment I use in my development workflow.',
    tags: ['Git & GitHub', 'vercel', 'Figma', 'Netlify']
  }
];



export const projects = [
  {
    title: "Air Ambulance Services",
    description: "A Air Ambulance Services website with booking system, real-time tracking, and emergency contact features.",
    image: project,
    tech: ["React", "Tailwind CSS", "Vite",],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "https://red-air-ambulance.vercel.app/",
    code: "https://github.com/zenithshah07-creator/Red-air-Ambulance-copy",
  },


  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
];


export const workData = [
  {
    role: "Frontend Developer (Freelance)",
    company: "",
    duration: "2025- Present",
    description:
      "Built responsive websites using React, Tailwind, and JavaScript. Integrated APIs, optimized UI/UX, and deployed projects on Netlify/Vercel.",
    color: "purple"
  },
  {
    role: "Frontend Developer – Project Based Experience",
    company: "",
    duration: "",
    description:
      "Worked on 5+ real-world style projects including login systems, responsive layouts, and API-based apps. Gained hands-on experience with React, Tailwind and modern web technologies.",
    color: "pink"
  },
  {
    role: "Frontend Intern (Self-Initiated Training)",
    company: "",
    duration: "",
    description:
      "Practiced real tasks like component building, code optimization, version control, and responsive design. Completed mini-projects to solidify skills in React and frontend development.",
    color: "blue"
  }
];
