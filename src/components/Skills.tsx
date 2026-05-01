import { AnimatedSection, AnimatedItem } from "./AnimatedSection";
import { Heading } from "./ui/Heading";
import { DarkSurfaceCard } from "./ui/DarkSurfaceCard";
import { skillClusters } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="bg-black py-20 lg:py-32" aria-labelledby="skills-heading">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        <AnimatedSection className="text-center mb-12">
          <Heading as="h2" size="section" centered id="skills-heading">
            Tools I wield
          </Heading>
          <p className="mt-4 text-[18px] font-normal text-[#a6a6a6]">
            From model training to production deployment
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillClusters.map((cluster, index) => (
            <AnimatedItem key={cluster.title} delay={index * 0.1}>
              <DarkSurfaceCard className="p-6 h-full">
                <h3 className="text-[18px] font-bold text-white tracking-[-0.5px] mb-5">
                  {cluster.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cluster.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-200"
                    >
                      <img
                        src={skill.iconUrl ?? `https://skillicons.dev/icons?i=${skill.icon}`}
                        alt={skill.name}
                        width={18}
                        height={18}
                        className="shrink-0"
                        loading="lazy"
                      />
                      <span className="text-[13px] font-medium text-[rgba(255,255,255,0.8)]">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </DarkSurfaceCard>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
}
