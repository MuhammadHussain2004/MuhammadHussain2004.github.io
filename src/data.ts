export const profile = {
  name: "Muhammad Hussain",
  fullName: "Muhammad Hussain Khan Lodhi",
  role: "MERN Stack Developer",
  location: "Karachi, Pakistan",
  email: "muhammadhussaintech@gmail.com",
  phone: "+92 324 3249217",
  github: "https://github.com/MuhammadHussain2004",
  linkedin: "https://www.linkedin.com/in/muhammad-hussain-khan-lodhi-139261252",
  tagline:
    "I build fast, reliable full-stack web apps — from a MongoDB schema to a pixel-perfect React interface.",
  bio: [
    "I'm a BSCS graduate (CGPA 3.7/4.0) from Sindh Madressatul Islam University who spends most days somewhere between a database schema and a component tree. My focus is the MERN stack — React on the front, Node/Express on the back, MongoDB or MySQL underneath — wired together with authentication, clean REST APIs, and interfaces people actually enjoy using.",
    "I picked up production habits early: during my internship at 10Pearls I designed the data model and REST API for a full-stack notes app with JWT auth and email verification, backed by unit/integration tests and SonarQube quality gates. I'm IBM-certified in full-stack JavaScript development, and I lean on AI-assisted tools like Claude and Copilot to move faster without cutting corners.",
  ],
};

export const stats = [
  { value: "48+", label: "public repositories" },
  { value: "10+", label: "shipped full-stack apps" },
  { value: "3.7/4.0", label: "CGPA, BSCS" },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  live?: string;
  code: string;
  featured?: boolean;
};

import complaintSystem from "./assets/projects/complaint-system.png";
import fullStackAuth from "./assets/projects/full-stack-auth.png";
import studentsRecords from "./assets/projects/students-records.png";
import multipageEcommerce from "./assets/projects/multipage-ecommerce.png";
import shopcoEcommerce from "./assets/projects/shopco-ecommerce.png";
import buildvolt from "./assets/projects/buildvolt.png";

export const projects: Project[] = [
  {
    slug: "buildvolt",
    title: "BuildVolt — AI Product Recommendation SaaS",
    description:
      "Our final year project, built with a 2-person team: an AI-powered recommendation widget e-commerce stores embed on their storefront. Shoppers describe their budget and use case, and the Claude API cross-references the store's live catalog to generate personalized product bundles — no developer needed on the store's end.",
    image: buildvolt,
    tags: ["Node.js", "Express", "Turso (libSQL)", "Anthropic Claude API", "WordPress/WooCommerce", "Resend"],
    live: "https://buildvolt.online",
    code: "https://github.com/MuhammadHussain2004/buildbot",
    featured: true,
  },
  {
    slug: "complaint-management-system",
    title: "Smart Complaint Management System",
    description:
      "A role-based complaint-management platform: citizens file complaints, staff move them through a Pending → In Progress → Resolved/Rejected lifecycle, and admins approve accounts and oversee the queue — across 15 REST endpoints guarded by JWT auth and bcrypt password hashing.",
    image: complaintSystem,
    tags: ["React", "Vite", "Express", "MongoDB", "Mongoose", "JWT"],
    live: "https://scms-frontend-rho.vercel.app",
    code: "https://github.com/MuhammadHussain2004/Complain-Management-System-MERN",
    featured: true,
  },
  {
    slug: "multipage-ecommerce",
    title: "Multi-Page E-Commerce Website",
    description:
      "A multi-page storefront built in React during my NAVTTC-affiliated full-stack training — catalog, product detail, and cart flows wired together with client-side routing.",
    image: multipageEcommerce,
    tags: ["React", "React Router", "CSS"],
    live: "https://multi-pages-website-react.vercel.app",
    code: "https://github.com/MuhammadHussain2004/Multi-pages-website-react",
  },
  {
    slug: "shopco-ecommerce",
    title: "Shop.co E-Commerce Platform",
    description:
      "A pixel-faithful rebuild of a community Figma template as a full MERN application — product filtering, search and pagination, reviews, promo-code validation, and order placement, backed by a MongoDB Atlas-seeded catalog.",
    image: shopcoEcommerce,
    tags: ["React", "Vite", "Express", "MongoDB Atlas", "REST API"],
    code: "https://github.com/MuhammadHussain2004/shopco-ecommerce",
  },
  {
    slug: "full-stack-auth",
    title: "Full-Stack Auth",
    description:
      "A self-contained authentication reference app: signup, login, JWT-protected profile routes, and persisted sessions — the pattern I reuse as the backbone for every app that needs real users.",
    image: fullStackAuth,
    tags: ["React", "Vite", "Express", "JWT"],
    live: "https://fullstack-auth-delta.vercel.app/",
    code: "https://github.com/MuhammadHussain2004/full-stack-auth",
  },
  {
    slug: "students-records",
    title: "Student Records App",
    description:
      "A typed CRUD dashboard for managing student records with search and form validation — built in TypeScript to keep the data model honest end to end.",
    image: studentsRecords,
    tags: ["TypeScript", "React"],
    live: "https://studentsrecordsapp-teal.vercel.app",
    code: "https://github.com/MuhammadHussain2004/students-Records-app",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "SQL Server"],
  },
  {
    category: "Testing & Quality",
    items: ["Mocha", "Chai", "SonarQube", "Unit Testing"],
  },
  {
    category: "Tools & Deployment",
    items: ["Git", "GitHub", "Postman", "Vercel", "Netlify", "Railway"],
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  place: string;
  description: string;
  tag: string;
};

export const timeline: TimelineItem[] = [
  {
    period: "Mar 2026 — Present",
    title: "Modern Web & App Development",
    place: "Saylani Mass IT Training (SMIT)",
    description:
      "Deepening full-stack fundamentals — advanced React patterns, API design, and deployment workflows — while shipping projects outside of coursework.",
    tag: "Training",
  },
  {
    period: "Jun 2026 — Sep 2026",
    title: "Full Stack Development Trainee",
    place: "NextSkill Institute",
    description:
      "Completed a NAVTTC-affiliated Full Stack Development program with an IBM-aligned curriculum, progressing from HTML5/CSS3/JavaScript fundamentals to React-based multi-page and e-commerce applications.",
    tag: "Training",
  },
  {
    period: "Sep 2026",
    title: "IBM Full-Stack JavaScript Developer",
    place: "IBM · Coursera — Professional Certificate",
    description:
      "Completed IBM's professional certificate program covering the full JavaScript stack, from front-end frameworks to Node.js APIs and deployment.",
    tag: "Certificate",
  },
  {
    period: "Apr 2026 — May 2026",
    title: "MERN Stack Development Intern — 10Shine Program",
    place: "10Pearls",
    description:
      "Designed and implemented the data model and REST API for a full-stack notes application (Node.js, Express, MySQL) with JWT auth, email verification, and CRUD logic. Authored unit/integration tests (Mocha, Chai, NYC) and resolved issues flagged by SonarQube.",
    tag: "Experience",
  },
  {
    period: "Sep 2022 — Jun 2026",
    title: "BSCS, Computer Science",
    place: "Sindh Madressatul Islam University",
    description: "Graduated with a CGPA of 3.7/4.0, focused on software engineering and web development.",
    tag: "Education",
  },
  {
    period: "Sep 2022 — Present",
    title: "Self-Directed Learning & Development",
    place: "Independent Study",
    description:
      "Designed, built, and deployed 10+ responsive web applications independently — from authentication systems to e-commerce platforms — applying modern UI/UX and REST API practices.",
    tag: "Independent",
  },
];
