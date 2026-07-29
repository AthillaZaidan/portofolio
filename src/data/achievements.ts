export interface Achievement {
  project: string;
  result: string;
  event: string;
  year: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  href: string;
}

export const achievements: Achievement[] = [
  {
    project: "SafeTrip",
    result: "National Winner",
    event: "Garuda Hacks 7.0",
    year: "2026",
    description:
      "A human-in-the-loop railway safety platform for live CCTV risk detection and evidence-based incident investigation.",
    image: "/projects/safetrip.png",
    imageWidth: 1919,
    imageHeight: 1079,
    href: "https://github.com/AthillaZaidan/SafeTrip",
  },
  {
    project: "Cognify",
    result: "4th of 241 teams",
    event: "Harvard HSIL Hackathon Indonesia",
    year: "2025",
    description:
      "A passive ADHD relapse detector using behavioral metadata, anomaly detection, and explainable risk scoring.",
    image: "/projects/cognify.png",
    imageWidth: 1919,
    imageHeight: 1079,
    href: "https://github.com/AthillaZaidan/Cognify",
  },
  {
    project: "Vokara",
    result: "5th nationwide",
    event: "Hackfest 2026",
    year: "2026",
    description:
      "An NLP platform that turns citizen aspirations into priorities, policy alignment, and actionable briefs.",
    image: "/projects/vokara.png",
    imageWidth: 1919,
    imageHeight: 1079,
    href: "https://github.com/AthillaZaidan/Vokara",
  },
  {
    project: "Scresh",
    result: "Finalist",
    event: "Technoscape 2026",
    year: "2026",
    description:
      "A computer vision system for produce segmentation, freshness assessment, and automated grading.",
    image: "/projects/scresh.png",
    imageWidth: 1920,
    imageHeight: 1079,
    href: "https://github.com/AthillaZaidan/Scresh",
  },
];
