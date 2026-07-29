import { experienceEntries } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillClusters } from "@/data/skills";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Domain", href: "#domain" },
  { label: "Works", href: "#works" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
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
  {
    title: "Make intent observable.",
    text: "I turn ambiguous product or model goals into screens, scores, logs, and workflows people can inspect.",
    image: "/value/1.jpg",
  },
  {
    title: "Give information a structure.",
    text: "Good systems reduce noise: domain rules, data movement, and user decisions should have a clear shape.",
    image: "/value/2.jpg",
  },
  {
    title: "Keep craft and evidence together.",
    text: "The interface has to feel considered, but the proof still comes from metrics, operations, and shipped behavior.",
    image: "/value/3.jpg",
  },
  {
    title: "Build for real interpretation.",
    text: "AI output, admin state, and risk signals only matter when they help someone understand what to do next.",
    image: "/value/4.jpg",
  },
];

export const featuredProjects = projects;

export const featuredExperience = experienceEntries;

export const topSkills = skillClusters
  .flatMap((cluster) => cluster.skills)
  .slice(0, 28);
