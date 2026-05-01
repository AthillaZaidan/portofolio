import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "cognify",
    title: "Cognify",
    role: "AI Engineer",
    description:
      "Passive ADHD monitoring system using unsupervised learning on smartphone behavioral metadata. 3-layer anomaly detection with Z-Score, Isolation Forest, and SHAP-explainable scoring.",
    techStack: ["Python", "scikit-learn", "SHAP", "NumPy", "Pandas"],
    metrics: "0.846 AUC-ROC · 100% Precision · 77.4% F1",
    badge: "4th Place — Harvard HSIL",
    repoUrl: "https://github.com/AthillaZaidan/Cognify",
  },
  {
    id: "vokara",
    title: "Vokara",
    role: "AI & Backend Engineer",
    description:
      "NLP-based aspiration intelligence pipeline for policy prioritization. Fine-tuned IndoBERTweet for multi-task classification, clustering, and local LLM-based policy brief generation.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "HuggingFace", "IndoBERTweet"],
    metrics: "85.19% Macro F1 · 610+ Synthetic Samples",
    badge: "5th Place — Hackfest 2026",
    repoUrl: "https://github.com/AthillaZaidan/Vokara",
  },
  {
    id: "grandsummit",
    title: "Grandsummit 15th",
    role: "Head of IT, Fullstack",
    description:
      "Registration platform for 200+ users with dual-track BCC/MCC flows, Supabase Auth/Postgres, dual-storage upload pipeline, and Google Sheets API sync.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase"],
    repoUrl: "https://github.com/AthillaZaidan/Grandsummit",
  },
  {
    id: "findmi",
    title: "IT Aku Masuk ITB",
    role: "Fullstack Developer",
    description:
      "FindMi e-commerce platform (IDR 200M+ revenue) and AMI event platform (>10,000 users). Features Midtrans payments, QR ticketing, real-time scanners, and admin dashboards.",
    techStack: ["React", "Vite", "Hono", "Drizzle", "PostgreSQL", "Midtrans"],
    repoUrl: "https://github.com/AthillaZaidan/FindMi",
  },
  {
    id: "mjolnir",
    title: "Mjolnir",
    role: "Fullstack Developer",
    description:
      "Digital library system with image search (PCA) and text recommendation (LSA). Go backend with React + Vite frontend, Docker deployment.",
    techStack: ["Go", "React", "TypeScript", "Tailwind", "Docker"],
    repoUrl: "https://github.com/AthillaZaidan/Mjolnir",
  },
  {
    id: "malam-keos",
    title: "Malam KeOS ini",
    role: "Systems Developer",
    description:
      "Custom 32-bit x86 operating system from scratch. Features Unix-like shell, EXT2 filesystem, round-robin multitasking scheduler, VGA graphics, and Bad Apple ASCII player.",
    techStack: ["C", "Assembly", "Makefile", "QEMU"],
    repoUrl: "https://github.com/AthillaZaidan/malam-keOS-ini",
  },
  {
    id: "proxivity",
    title: "Proxivity",
    role: "Desktop Developer",
    description:
      "JavaFX fitness tracking desktop app with food logging, activity tracking, calorie targets, 7-day trend charts, PDF report export, and AI Healthbot Assistant.",
    techStack: ["Java", "JavaFX", "Maven", "SQLite"],
    repoUrl: "https://github.com/AthillaZaidan/proxivity",
  },
  {
    id: "greedy-conqueror",
    title: "Greedy Conqueror",
    role: "Algorithm Engineer",
    description:
      "Greedy-based bot implementation for Battlecode 2025. Three bot variants with scoring-based nearest-target movement, tower-first expansion, and coverage-maximizing strategies.",
    techStack: ["Java", "Gradle", "Battlecode"],
    badge: "8th Place — Battlecode",
    repoUrl: "https://github.com/AthillaZaidan/greedy-conqueror",
  },
];