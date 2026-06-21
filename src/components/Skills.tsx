"use client";

import { motion } from "framer-motion";
import { Heading } from "./ui/Heading";
import { DarkSurfaceCard } from "./ui/DarkSurfaceCard";
import { skillClusters } from "@/data/skills";
import { useTilt } from "@/hooks/useTilt";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function SkillCard({
  cluster,
  index,
}: {
  readonly cluster: (typeof skillClusters)[number];
  readonly index: number;
}) {
  const reducedMotion = useReducedMotion();
  const { ref, tilt, handlers } = useTilt(8);

  const cardStyle = reducedMotion
    ? undefined
    : {
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        background: `radial-gradient(circle at ${tilt.spotlightX}% ${tilt.spotlightY}%, rgba(255,255,255,0.06) 0%, transparent 50%), #090909`,
      };

  return (
    <motion.div
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <DarkSurfaceCard
        ref={ref as React.RefObject<HTMLDivElement>}
        {...handlers}
        className="p-6 h-full"
        hover={false}
        style={cardStyle}
      >
        <h3 className="text-[18px] font-bold text-white tracking-[-0.5px] mb-5">
          {cluster.title}
        </h3>
        <motion.div
          className="flex flex-wrap gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.03,
                delayChildren: 0.1 + index * 0.1,
              },
            },
          }}
        >
          {cluster.skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-200"
              variants={
                reducedMotion
                  ? undefined
                  : {
                      hidden: { opacity: 0, scale: 0, rotate: -10 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                        transition: {
                          type: "spring",
                          stiffness: 200,
                          damping: 12,
                        },
                      },
                    }
              }
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
            </motion.div>
          ))}
        </motion.div>
      </DarkSurfaceCard>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="bg-black py-20 lg:py-32" aria-labelledby="skills-heading">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        <div className="overflow-hidden text-center mb-12">
          <Heading as="h2" size="section" centered id="skills-heading" reveal>
            Tools I wield
          </Heading>
        </div>
        <motion.p
          className="text-center mt-4 text-[18px] font-normal text-[#a6a6a6] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          From model training to production deployment
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillClusters.map((cluster, index) => (
            <SkillCard key={cluster.title} cluster={cluster} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
