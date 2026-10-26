import { ExperienceEntry } from "@/types";

export const experienceEntries: ExperienceEntry[] = [
  {
    role: "AI Engineer Intern",
    company: "GDP Labs",
    dateRange: "Jun 2026 – now",
    highlights: [
      "Built a full-stack LLM benchmarking platform (FastAPI, Alembic, PostgreSQL, React) that moved results from spreadsheets into a 532-deployment model registry with run tracking and a human-review dashboard.",
      "Benchmarked 35+ frontier LLMs from 15 providers, including GPT-6, Claude 5.5, and Gemini 3.8, on RAG, AI-agent, vision, and LLM-as-a-judge tasks in both reasoning and non-reasoning modes.",
      "Engineered a multimodal LLM judge that grades the charts an AI agent produces, and automated per-model accuracy and cost reports after every run, replacing a manually assembled comparison table.",
      "Modernized the evaluation codebase by migrating 8 benchmark pipelines to a shared interface and Poetry to uv, removing over 4K lines of legacy code while preserving leaderboard output.",
    ],
  },
  {
    role: "Head of IT, Fullstack",
    company: "StudentxCEOs Grandsummit 15th",
    dateRange: "Feb 2026 – now",
    highlights: [
      "Led a team of seven to ship registration for 280+ teams, 1,500+ file uploads and Rp20M+ in revenue, with Supabase and Google Drive failover storage.",
    ],
  },
  {
    role: "Technology Development Intern",
    company: "Inkubator IT",
    dateRange: "Oct 2025 – Mar 2026",
    highlights: [
      "Delivered a client platform in Next.js from Figma, with a weighted Brand DNA quiz, radar charts and a serverless news digest.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "TEDxITB 9.0",
    dateRange: "Oct 2025 – May 2026",
    highlights: [
      "Built the event site and its ticket commerce flows with server components, OpenGraph metadata and a generated sitemap.",
    ],
  },
  {
    role: "Fullstack Developer",
    company: "IT Aku Masuk ITB 2026",
    dateRange: "Oct 2025 – Feb 2026",
    highlights: [
      "Built FindMi, a merchandise store that took IDR 200M+, and an event platform for 10,000+ users with RSVP and QR tickets.",
    ],
  },
];
