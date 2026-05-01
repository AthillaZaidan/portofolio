"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./ui/SectionLabel";
import { Heading } from "./ui/Heading";
import { Pill } from "./ui/Pill";
import { experienceEntries } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="bg-black py-20 lg:py-32">
      <div className="max-w-[900px] mx-auto px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* <SectionLabel text="EXPERIENCE" className="mb-4 block" /> */}
          <Heading as="h2" size="section">
            Where I&apos;ve shipped
          </Heading>
          <p className="mt-4 text-[18px] font-normal text-[#a6a6a6]">
            From startups to national-scale events
          </p>
        </motion.div>

        <div className="relative ml-[13px]">
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[rgba(255,255,255,0.1)]" />

          <div className="space-y-12">
            {experienceEntries.map((entry, index) => (
              <motion.div
                key={entry.company + entry.dateRange}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-10 lg:pl-14"
              >
                <div
                  className={`absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full border ${
                    entry.isCurrent
                      ? "bg-[#0099ff] border-[#0099ff]"
                      : "bg-[rgba(255,255,255,0.3)] border-[rgba(255,255,255,0.5)]"
                  }`}
                />

                <p className="text-[13px] font-medium text-[#a6a6a6]">
                  {entry.dateRange}
                </p>

                <h3 className="mt-1 text-[20px] lg:text-[24px] font-bold text-white tracking-[-0.8px]">
                  {entry.role}
                </h3>

                {entry.companyUrl ? (
                  <a
                    href={entry.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 text-[18px] font-normal text-[#0099ff] hover:underline inline-block"
                  >
                    {entry.company}
                  </a>
                ) : (
                  <p className="mt-0.5 text-[18px] font-normal text-[#0099ff]">
                    {entry.company}
                  </p>
                )}

                <ul className="mt-3 space-y-2">
                  {entry.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-[15px] font-normal text-[rgba(255,255,255,0.6)] leading-[1.6] flex"
                    >
                      <span className="text-[#0099ff] mr-2 shrink-0">—</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full bg-[rgba(255,255,255,0.08)] text-white text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <a href="/Athilla%20Zaidan%20Zidna%20Fann_CV.pdf" download>
            <Pill variant="frosted" size="md">View Full Resume</Pill>
          </a>
        </motion.div>
      </div>
    </section>
  );
}