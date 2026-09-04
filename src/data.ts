export const profile = {
  name: "Muhammad Hussain",
  fullName: "Muhammad Hussain Khan Lodhi",
  role: "Software Engineer",
  secondaryRoles: ["Full-Stack Developer", "MERN Stack Specialist"],
  location: "Karachi, Pakistan",
  email: "muhammadhussaintech@gmail.com",
  phone: "+92 324 3249217",
  github: "https://github.com/MuhammadHussain2004",
  linkedin: "https://www.linkedin.com/in/muhammad-hussain-khan-lodhi-139261252",
  tagline:
    "I design and ship reliable software — a strong foundation in data structures and database systems, with particular depth in full-stack MERN development.",
  bio: [
    "I'm a software engineer with a strong foundation in data structures, object-oriented design, and database systems (BSCS, CGPA 3.7/4.0, Sindh Madressatul Islam University), and particular depth in full-stack MERN development — React, Node.js, Express, MongoDB. I've designed multi-service systems of my own, including a deterministic recommendation engine and a role-based access-control platform, with production experience across Java and C/C++ as well.",
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

// Regenerated at build time by scripts/generate-projects.mjs, which scores
// every public repo on this GitHub account for "complete full-stack project,
// verifiably live" and keeps the strongest 6. This committed file is the
// fallback if a build ever runs without regenerating (or the generator
// can't reach the GitHub API) — see that script and
// scripts/project-overrides.json for how selection and copy are decided.
import generatedProjects from "./generated/projects.json";

export const projects: Project[] = generatedProjects as Project[];

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "C++", "C", "SQL"],
  },
  {
    category: "Core CS",
    items: ["Data Structures", "OOP", "REST API Design", "Database Design", "Unit Testing"],
  },
  {
    category: "MERN / Full-Stack",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
  {
    category: "Databases",
    items: ["MySQL", "SQL Server"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "Postman", "SonarQube", "Mocha/Chai", "VS Code", "NetBeans"],
  },
  {
    category: "Deployment / Cloud",
    items: ["Vercel"],
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
      "Designed and implemented the data model and REST API for a full-stack notes application (React, Node.js, Express, MySQL) with JWT auth, email verification, and full CRUD. Authored unit/integration tests (Mocha, Chai, NYC) and resolved issues flagged by SonarQube.",
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
      "Designed, built, and deployed 10+ full-stack MERN applications (React, Node.js, MongoDB/MySQL) independently, applying data structures, OOP, and database design coursework to real projects.",
    tag: "Independent",
  },
];
