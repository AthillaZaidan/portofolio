export interface Project {
  id: string;
  title: string;
  role: string;
  year: string;
  description: string;
  result?: string;
  repoUrl?: string;
  image?: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  dateRange: string;
  highlights: string[];
}
