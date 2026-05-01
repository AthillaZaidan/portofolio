import { SkillCluster } from "@/types";

export const skillClusters: SkillCluster[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: "python" },
      { name: "Go", icon: "go" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "C", icon: "c" },
      { name: "C++", icon: "cpp" },
      { name: "Java", icon: "java" },
      { name: "SQL", icon: "mysql", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Haskell", icon: "haskell" },
      { name: "HTML", icon: "html", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "css", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "PyTorch", icon: "pytorch" },
      { name: "Hugging Face", icon: "huggingface", iconUrl: "https://cdn.simpleicons.org/huggingface/FFD21E" },
      { name: "scikit-learn", icon: "scikitlearn", iconUrl: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
      { name: "NumPy", icon: "numpy", iconUrl: "https://cdn.simpleicons.org/numpy/013243" },
      { name: "Pandas", icon: "pandas", iconUrl: "https://cdn.simpleicons.org/pandas/150458" },
      { name: "SHAP", icon: "python", iconUrl: "/icons/shap.svg" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Jupyter", icon: "jupyter", iconUrl: "https://cdn.simpleicons.org/jupyter/F37626" },
    ],
  },
  {
    title: "Frameworks & Tools",
    skills: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React", icon: "react" },
      { name: "React Native", icon: "react", iconUrl: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Drizzle ORM", icon: "drizzle", iconUrl: "https://cdn.simpleicons.org/drizzle/C5F74F" },
      { name: "Supabase", icon: "supabase" },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "Framer Motion", icon: "framer", iconUrl: "https://cdn.simpleicons.org/framer/0055FF" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Midtrans", icon: "midtrans", iconUrl: "/icons/midtrans.svg" },
      { name: "Cloudinary", icon: "cloudinary", iconUrl: "https://cdn.simpleicons.org/cloudinary/3448C5" },
      { name: "Azure", icon: "azure" },
    ],
  },
];