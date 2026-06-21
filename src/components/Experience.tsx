"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Heading } from "./ui/Heading";
import { Pill } from "./ui/Pill";
import { experienceEntries } from "@/data/experience";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion || !lineRef.current || !sectionRef.current)
        return;

      const line = lineRef.current;
      const length = line.getTotalLength();
      line.style.strokeDasharray = `${length}`;
      line.style.strokeDashoffset = `${length}`;

      gsap.to(line, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 70%",
          scrub: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="bg-black py-20 lg:py-32"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-[900px] mx-auto px-6 sm:px-12">
        <div className="overflow-hidden mb-12">
          <Heading as="h2" size="section" id="experience-heading" reveal>
            Where I&apos;ve shipped
          </Heading>
        </div>
        <motion.p
          className="mt-4 mb-12 text-[18px] font-normal text-[#a6a6a6]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          From startups to national-scale events
        </motion.p>

        <div className="relative ml-[13px]">
          <svg
            className="absolute left-0 top-0 bottom-0 w-[1px] h-full overflow-visible"
            preserveAspectRatio="none"
          >
            <line
              ref={lineRef}
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="space-y-12">
            {experienceEntries.map((entry, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={entry.company + entry.dateRange}
                  className="relative pl-10 lg:pl-14"
                  initial={
                    prefersReducedMotion
                      ? { opacity: 1 }
                      : { opacity: 0, x: isEven ? -40 : 40 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.div
                    className={`absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full border ${
                      entry.isCurrent
                        ? "bg-[#0099ff] border-[#0099ff]"
                        : "bg-[rgba(255,255,255,0.3)] border-[rgba(255,255,255,0.5)]"
                    }`}
                    initial={prefersReducedMotion ? { scale: 1 } : { scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                      delay: index * 0.1,
                    }}
                    animate={
                      entry.isCurrent && !prefersReducedMotion
                        ? {
                            boxShadow: [
                              "0 0 0 0 rgba(0,153,255,0.4)",
                              "0 0 0 10px rgba(0,153,255,0)",
                            ],
                          }
                        : undefined
                    }
                    style={
                      entry.isCurrent && !prefersReducedMotion
                        ? {
                            transition:
                              "box-shadow 1.5s cubic-bezier(0.22, 1, 0.36, 1)",
                          }
                        : undefined
                    }
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
              );
            })}
          </div>
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="/Athilla%20Zaidan%20Zidna%20Fann_CV.pdf" download>
            <Pill variant="frosted" size="md">
              View Full Resume
            </Pill>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
