export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  metrics?: string;
  badge?: string;
  repoUrl: string;
  image?: string;
}

export interface SkillCluster {
  title: string;
  skills: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  companyUrl?: string;
  dateRange: string;
  highlights: string[];
  techStack: string[];
  isCurrent?: boolean;
}