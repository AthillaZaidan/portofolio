"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./ui/SectionLabel";
import { Heading } from "./ui/Heading";
import { DarkSurfaceCard } from "./ui/DarkSurfaceCard";
import { skillClusters } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="bg-black py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* <SectionLabel text="TECH STACK" className="mb-4 block" /> */}
          <Heading as="h2" size="section" centered>
            Tools I wield
          </Heading>
          <p className="mt-4 text-[18px] font-normal text-[#a6a6a6]">
            From model training to production deployment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillClusters.map((cluster, index) => (
            <motion.div
              key={cluster.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}