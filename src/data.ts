export const profile = {
  name: "Muhammad Hussain",
  fullName: "Muhammad Hussain Khan Lodhi",
  role: "MERN Stack Developer",
  location: "Karachi, Pakistan",
  email: "muhammadhussaintech@gmail.com",
  github: "https://github.com/MuhammadHussain2004",
  linkedin: "https://www.linkedin.com/in/muhammad-hussain-khan-lodhi-139261252",
  tagline:
    "I build fast, reliable full-stack web apps — from a MongoDB schema to a pixel-perfect React interface.",
  bio: [
    "I'm a BSCS graduate from Sindh Madressatul Islam University who spends most days somewhere between a database schema and a component tree. My focus is the MERN stack — React on the front, Node/Express on the back, MongoDB or SQL underneath — wired together with authentication, clean APIs, and interfaces people actually enjoy using.",
    "I picked up production habits early: during my internship at 10Pearls I shipped a full-stack notes app with JWT auth, CRUD, unit tests and SonarQube quality gates. I'm currently deepening that at Saylani Mass IT Training's Modern Web & App Development program, while shipping side projects on my own timeline.",
  ],
};

export const stats = [
  { value: "48+", label: "public repositories" },
  { value: "12+", label: "shipped full-stack apps" },
  { value: "3.5/4.0", label: "CGPA, BSCS" },
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
import wanderlyTravel from "./assets/projects/wanderly-travel.png";
import paradiseNursery from "./assets/projects/paradise-nursery.png";

export const projects: Project[] = [
  {
    slug: "complaint-management-system",
    title: "Smart Complaint Management System",
    description:
      "A role-based complaint lifecycle platform built for a hackathon: citizens file complaints, staff triage and resolve them, and admins approve accounts and oversee the whole queue — all guarded by JWT auth and route-level role checks.",
    image: complaintSystem,
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    live: "https://scms-frontend-rho.vercel.app",
    code: "https://github.com/MuhammadHussain2004/Complain-Management-System-MERN",
    featured: true,
  },
  {
    slug: "multipage-ecommerce",
    title: "Multi-Page E-Commerce Website",
    description:
      "A multi-page storefront built in React — catalog, product detail, and cart flows wired together with client-side routing, laid out to mirror how a real shop's navigation should feel.",
    image: multipageEcommerce,
    tags: ["React", "React Router", "CSS"],
    live: "https://multi-pages-website-react.vercel.app",
    code: "https://github.com/MuhammadHussain2004/Multi-pages-website-react",
    featured: true,
  },
  {
    slug: "paradise-nursery",
    title: "Paradise Nursery",
    description:
      "A plant-shop storefront with a Redux Toolkit-driven cart — quantity controls, running totals, and route-based navigation between the catalog and checkout, all state-managed client-side.",
    image: paradiseNursery,
    tags: ["React", "Redux Toolkit", "React Router"],
    live: "https://muhammadhussain2004.github.io/paradise-nursery/",
    code: "https://github.com/MuhammadHussain2004/paradise-nursery",
    featured: true,
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
  {
    slug: "wanderly-travel",
    title: "Wanderly Travel Recommendation",
    description:
      "A multi-section travel-discovery landing page — destination cards, smooth scroll interactions, and a fully responsive layout built with hand-written HTML, CSS and JavaScript.",
    image: wanderlyTravel,
    tags: ["HTML5", "CSS3", "JavaScript"],
    live: "https://muhammadhussain2004.github.io/Wanderly-Travel-Recommendation/",
    code: "https://github.com/MuhammadHussain2004/Wanderly-Travel-Recommendation",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Java", "Python", "C++"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Redux Toolkit", "React Router", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },
  {
    category: "Data",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Prisma"],
  },
  {
    category: "Version Control & CI/CD",
    items: ["Git", "GitHub", "GitHub Actions"],
  },
  {
    category: "Deployment & Tools",
    items: ["Vercel", "Railway", "Postman", "SonarQube"],
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  place: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    period: "2025 — Present",
    title: "Modern Web & App Development",
    place: "Saylani Mass IT Training (SMIT)",
    description:
      "Deepening full-stack fundamentals — advanced React patterns, API design, and deployment workflows — while shipping projects outside of coursework.",
  },
  {
    period: "2024",
    title: "Full-Stack Developer Intern — 10Shine Program",
    place: "10Pearls",
    description:
      "Built a full-stack notes application with authentication and CRUD from scratch, backed by unit tests and SonarQube quality gates as part of a structured internship cohort.",
  },
  {
    period: "2020 — 2024",
    title: "BSCS, Computer Science",
    place: "Sindh Madressatul Islam University",
    description: "Graduated with a CGPA of 3.5/4.0, focused on software engineering and web development.",
  },
];
