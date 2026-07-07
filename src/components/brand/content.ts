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
    title: "Research and Applied AI",
    text: "Anomaly detection, NLP classification, environmental risk scoring, and verification workflows shipped as usable systems.",
    proof: "Cognify, Vokara, WAVE, Virens",
  },
  {
    title: "Fullstack Systems",
    text: "Registration, payments, dashboards, file workflows, multi-tenant operations, and admin tools for real events.",
    proof: "FindMi, Grandsummit, Scresh",
  },
  {
    title: "Low-Level Craft",
    text: "Operating systems, graph algorithms, desktop apps, and backend foundations built close to the machine.",
    proof: "Malam KeOS ini, Mjolnir, Graph Theory",
  },
];

export const principles = [
  "Model behavior must explain itself.",
  "Interfaces should expose real system state.",
  "Shipping beats ornament, but craft still matters.",
  "A portfolio should show evidence before adjectives.",
];

export const featuredProjects = projects;

export const featuredExperience = experienceEntries;

export const topSkills = skillClusters
  .flatMap((cluster) => cluster.skills)
  .slice(0, 28);
