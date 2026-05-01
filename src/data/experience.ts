import { ExperienceEntry } from "@/types";

export const experienceEntries: ExperienceEntry[] = [
  {
    role: "Head of Information Technology",
    company: "StudentxCEOs Grandsummit 15th",
    dateRange: "Feb 2026 – Present",
    isCurrent: true,
    highlights: [
      "Led a 7-person cross-functional team (4 devs + 3 UI/UX) to ship the registration platform end-to-end",
      "Coordinated all requests from Marketing, Operations, Finance, and Competition divisions",
      "Managed 30+ feature requests via sprint-based GitHub workflows and weekly standups, delivering iteratively with zero scope creep across 15+ responsive screens",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase"],
  },
  {
    role: "Fullstack Developer",
    company: "IT Aku Masuk ITB 2026",
    dateRange: "Oct 2025 – Feb 2026",
    highlights: [
      "Built FindMi, a fullstack merchandise e-commerce platform generating IDR 200,000,000+ in revenue with Midtrans Snap integration and Cloudinary-backed payment proof uploads",
      "Architected the AMI event platform serving >10,000 users during ITB Day 2026, featuring multi-step RSVP with barcode generation and real-time ZXing QR scanner for gate confirmation",
      "Developed an Admin Dashboard with revenue analytics, 47-column CSV export pipeline, and QR scanner dialogs for OTS pickup verification",
      "Optimized high-traffic performance with TanStack Query + Zustand localStorage caching for instant ticket display and offline resilience",
    ],
    techStack: [
      "React",
      "Vite",
      "Hono",
      "Drizzle",
      "PostgreSQL",
      "Midtrans",
      "Cloudinary",
    ],
  },
  {
    role: "Technology Development Intern",
    company: "Inkubator IT",
    dateRange: "Oct 2025 – Mar 2026",
    highlights: [
      "Owned client communication end-to-end for an international client; translated complex Figma designs into a polished Next.js platform with pixel-perfect glassmorphism UI and Framer Motion animations",
      "Engineered a complete Brand DNA Quiz system with React Context state management, weighted scoring algorithm, and a hand-coded SVG radar chart for instant multi-axis personality profiling",
      "Developed a serverless news aggregation service using Next.js Route Handlers to fetch, transform, and cache categorized marketing intelligence from external APIs",
      "Laid production-grade SEO foundations — dynamic social metadata, programmatic sitemaps, and semantic page architecture",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
  },
];