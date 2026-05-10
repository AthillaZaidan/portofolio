import { ExperienceEntry } from "@/types";

export const experienceEntries: ExperienceEntry[] = [
  {
    role: "Fullstack Developer",
    company: "IT Aku Masuk ITB 2026",
    companyUrl: undefined,
    dateRange: "Oct. 2025 – Feb. 2026",
    isCurrent: false,
    highlights: [
      "Built FindMi, a fullstack merchandise e-commerce platform using React, Vite, Tailwind CSS, generating IDR 200M+ in revenue",
      "Architected the Aku Masuk ITB platform serving 10,000+ users, with RSVP reservations, multi-participant registration, barcode generation, Talkshow Registration, and Lost & Found workflows",
      "Developed admin tooling for revenue analytics, department/division breakdowns, QR-based OTS pickup verification, instant ticket caching, and offline-resilient ticket display",
    ],
    techStack: ["React", "Vite", "Tailwind CSS"],
  },
  {
    role: "Head of Information Technology",
    company: "StudentxCEOs Grandsummit 15th",
    companyUrl: undefined,
    dateRange: "Feb. 2026 – Present",
    isCurrent: true,
    highlights: [
      "Led a 7-person team of developers and UI/UX designers to ship the event platform end-to-end across registration, file upload, admin dashboard, and operational workflows",
      "Managed 30+ feature requests from Marketing, Operations, Finance, and Competition divisions through sprint-based GitHub workflows, weekly standups, and iterative delivery",
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
];
