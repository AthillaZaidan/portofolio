import { experienceEntries } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillClusters } from "@/data/skills";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Domain", href: "#domain" },
  { label: "Works", href: "#works" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const domains = [
  {
    title: "Applied AI",
    text: "Anomaly detection, NLP classification, explainability, and model evaluation shipped as usable systems.",
    proof: "Cognify, Vokara",
  },
  {
    title: "Fullstack Systems",
    text: "Registration, payments, dashboards, file workflows, QR operations, and admin tools for real events.",
    proof: "FindMi, Grandsummit",
  },
  {
    title: "Low-Level Craft",
    text: "Operating systems, algorithms, desktop apps, and backend foundations built close to the machine.",
    proof: "Malam KeOS ini, Mjolnir",
  },
];

export const principles = [
  "Model behavior must explain itself.",
  "Interfaces should expose real system state.",
  "Shipping beats ornament, but craft still matters.",
  "A portfolio should show evidence before adjectives.",
];

export const featuredProjects = projects.slice(0, 6);

export const featuredExperience = experienceEntries;

export const topSkills = skillClusters
  .flatMap((cluster) => cluster.skills.map((skill) => skill.name))
  .slice(0, 28);
