import { Skill } from "@/types";

const iconAliases: Record<string, string> = {
  cpp: "cplusplus",
  nextjs: "nextdotjs",
  scikitlearn: "scikitlearn",
  tailwindcss: "tailwindcss",
};

const iconUrls: Record<string, string> = {
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
};

export function TechStackCarousel({ skills }: { skills: Skill[] }) {
  const loopSkills = [...skills, ...skills];

  return (
    <div className="mt-12 border-y border-[#171717]/10 bg-[#f7f6f2]" aria-label="Technical skills">
      <div className="relative overflow-hidden py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#f7f6f2] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#f7f6f2] to-transparent" />
        <ul className="tech-marquee flex w-max items-center gap-12">
          {loopSkills.map((skill, index) => (
            <li className="flex shrink-0 items-center gap-3 text-base font-medium text-[#565149]" key={`${skill.name}-${index}`}>
              <img
                className="h-5 w-5 object-contain"
                src={skill.iconUrl ?? iconUrls[skill.icon] ?? `https://cdn.simpleicons.org/${iconAliases[skill.icon] ?? skill.icon}`}
                alt=""
                width="20"
                height="20"
              />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
