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
          <SectionLabel text="TECH STACK" className="mb-4 block" />
          <Heading as="h2" size="section" centered>
            Tools I wield
          </Heading>
          <p className="mt-4 text-[18px] font-normal text-[#a6a6a6]">
            From model training to production deployment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillClusters.map((cluster, index) => (
            <motion.div
              key={cluster.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <DarkSurfaceCard className="p-8 h-full">
                <h3 className="text-[22px] font-bold text-white tracking-[-0.8px] mb-6">
                  {cluster.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cluster.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-full bg-[rgba(255,255,255,0.1)] text-white text-[13px] font-medium hover:bg-[rgba(255,255,255,0.15)] hover:scale-[1.02] transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
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