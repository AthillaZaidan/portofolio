import { ExperienceEntry } from "@/types";

export const experienceEntries: ExperienceEntry[] = [
  {
    role: "Artificial Intelligence Engineer Intern",
    company: "GDP Labs",
    companyUrl: undefined,
    dateRange: "Jun. 2026 – Present",
    isCurrent: true,
    highlights: [
      "Delivered PRs across GLAIR's AI platform and Model Accuracy Benchmark stack, adding Claude Sonnet 5 adaptive reasoning and hardening OpenAI/Anthropic provider compatibility, response parsing, authentication, and local inference execution",
      "Implemented streaming time-to-first-token measurement for title-generation benchmarks by integrating an SDK EventEmitter into the LLM invoker while preserving end-to-end latency tracking",
      "Ran and documented evaluations for 6 proprietary and open-source models across 8 task-specific leaderboards, including reasoning and non-reasoning configurations for Claude Sonnet 5",
    ],
    techStack: ["LLM Evaluation", "Python", "OpenAI", "Anthropic"],
  },
  {
    role: "Technology Development Intern",
    company: "Inkubator IT",
    companyUrl: undefined,
    dateRange: "Oct. 2025 – Mar. 2026",
    isCurrent: false,
    highlights: [
      "Owned client communication and delivered a polished Next.js, React, TypeScript, and Tailwind CSS platform from complex Figma designs with glassmorphism UI and Framer Motion animations",
      "Built a Brand DNA Quiz system with React Context, weighted scoring, custom SVG radar charting, and instant multi-axis personality profiling",
      "Developed a serverless marketing-intelligence digest using Next.js Route Handlers to fetch, transform, cache, and render categorized external news data",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    role: "Fullstack Developer and IT Lead",
    company: "StudentxCEOs Grandsummit 15th",
    companyUrl: undefined,
    dateRange: "Feb. 2026 – Present",
    isCurrent: true,
    highlights: [
      "Led a 7-person dev and UI/UX team to ship sxcgrandsummit.com for Indonesia's premier student business competition",
      "Architected a dual-track BCC/MCC registration system handling 280+ teams, 500+ participants, 1,500+ file uploads, Rp20M+ revenue, and real-time preliminary submission monitoring",
      "Engineered a dual-storage upload pipeline with Supabase, Google Drive API, OAuth2/Service Account failover, team-folder automation, and Google Sheets sync",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase"],
  },
  {
    role: "Frontend Developer",
    company: "TEDxITB 9.0",
    companyUrl: undefined,
    dateRange: "Oct. 2025 – May 2026",
    isCurrent: false,
    highlights: [
      "Built the TEDxITB 9.0 frontend using Next.js, React, TypeScript, and Tailwind CSS, leveraging App Router Server Components for SEO and Client Components for interactive commerce flows",
      "Crafted interactive event experiences with Framer Motion, animated carousels, countdowns, responsive hero sections, admin order tables, OpenGraph metadata, and programmatic sitemaps",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    role: "Fullstack Developer",
    company: "IT Aku Masuk ITB 2026",
    companyUrl: undefined,
    dateRange: "Oct. 2025 – Feb. 2026",
    isCurrent: false,
    highlights: [
      "Engineered FindMi, a fullstack merchandise e-commerce platform using React, Vite, Hono, Drizzle, and PostgreSQL that generated IDR 200M+ revenue",
      "Architected the Aku Masuk ITB event platform serving 10,000+ users across RSVP, multi-participant registration, barcode generation, and offline-resilient ticket display",
    ],
    techStack: ["React", "Vite", "Hono", "Drizzle", "PostgreSQL"],
  },
];
