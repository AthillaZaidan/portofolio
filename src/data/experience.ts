import { ExperienceEntry } from "@/types";

export const experienceEntries: ExperienceEntry[] = [
  {
    role: "Head of Information Technology",
    company: "StudentxCEOs Grandsummit 15th",
    companyUrl: undefined,
    dateRange: "Feb 2026 – Present",
    isCurrent: true,
    highlights: [
      "Led a 7-person cross-functional team (4 devs + 3 UI/UX) to ship the platform end-to-end, coordinating all requests from Marketing, Operations, Finance, and Competition divisions",
      "Managed 30+ feature requests via sprint-based GitHub workflows and weekly standups, delivering iteratively with zero scope creep across 15+ responsive screens",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase"],
  },
  {
    role: "Frontend Developer",
    company: "TEDxITB 9.0",
    companyUrl: undefined,
    dateRange: "Oct 2025 – May 2026",
    highlights: [
      "Built the TEDxITB 9.0 platform frontend on Next.js + React + TypeScript + Tailwind CSS, leveraging App Router Server Components for SEO and Client Components for interactive ticketing and commerce flows",
      "Engineered complex purchase forms with React Hook Form + Zod, featuring real-time conditional logic (Early Bird/Regular/Bundle tiers, companion fields, dynamic pricing), integrated with Cloudinary upload widgets for payment proof submission",
      "Architected a Zustand + localStorage cart system with optimistic UI updates and drawer interactions; paired with TanStack Query for server-state sync and instant cache invalidation across order dashboards",
      "Crafted immersive event experiences with Framer Motion transitions, animated carousels, flip-clock countdowns, and responsive hero sections; built a paginated admin orders table with mobile card layouts and desktop data views",
      "Developed a real-time QR scanner interface for on-site attendance verification with toast feedback and optimistic order status updates in the admin panel",
      "Laid production-grade SEO foundations with dynamic OpenGraph metadata, programmatic sitemaps, and semantic page architecture to drive organic visibility for the event",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "Zustand",
    ],
  },
  {
    role: "Fullstack Developer",
    company: "IT Aku Masuk ITB 2026",
    dateRange: "Oct 2025 – Feb 2026",
    highlights: [
      "Built FindMi, a fullstack merchandise e-commerce platform on React + Vite + Tailwind frontend and Hono + Drizzle ORM + PostgreSQL backend, generating IDR 200,000,000+ in revenue",
      "Integrated Midtrans Snap for automated payments with webhook verification and a Manual Payment flow with Cloudinary-backed QRIS proof uploads, admin review workflows, and transaction tracking",
      "Engineered a Product Bundle System with dynamic price calculation, size surcharges, and referral discounts; built a Tutor Intake Module with per-quantity validation and single-purchase restrictions",
      "Developed an Admin Dashboard with revenue analytics, department/division breakdowns, 180-recent-order tracking, 47-column CSV export pipeline, and QR scanner dialogs for OTS pickup verification",
      "Architected the Aku Masuk ITB Website platform serving 10,000+ users during ITB Day 2026, featuring a multi-step RSVP Reservation System with multi-participant support, barcode generation, and parent/guardian validation",
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
      "Owned client communication end-to-end for an international client; translated complex Figma designs into a polished Next.js + React + TypeScript platform with Tailwind CSS, delivering pixel-perfect glassmorphism UI and fluid Framer Motion animations across 10+ sections",
      "Engineered a complete Brand DNA Quiz system with React Context state management, weighted scoring algorithm, and a hand-coded SVG radar chart for instant multi-axis personality profiling",
      "Developed a serverless news aggregation service using Next.js Route Handlers to fetch, transform, and cache categorized marketing intelligence from external APIs into a responsive, animated digest grid",
      "Laid production-grade SEO foundations — dynamic social metadata, programmatic sitemaps, and semantic page architecture — to drive organic visibility for the brand",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
  },
];