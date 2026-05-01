"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./ui/SectionLabel";
import { Heading } from "./ui/Heading";
import { Pill } from "./ui/Pill";

export function About() {
  return (
    <section id="about" className="min-h-screen bg-black py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel text="ABOUT" className="mb-4 block" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Heading as="h2" size="section" className="mb-8">
                Engineering intelligence at every layer
              </Heading>
            </motion.div>

            <div className="space-y-6">
              {[
                "I'm Athilla Zaidan, a Computer Science sophomore at Institut Teknologi Bandung with a 3.94/4.00 GPA. I operate at the intersection of artificial intelligence and fullstack engineering — building systems that don't just predict, but perform.",
                "My work spans from anomaly detection frameworks achieving 0.846 AUC-ROC, to NLP pipelines processing thousands of citizen aspirations, to production fullstack platforms serving 10,000+ users. I don't silo myself into 'AI' or 'web dev' — I build end-to-end.",
                "When I'm not training models or architecting backends, you'll find me building operating systems from scratch, competing in algorithmic battles, or shipping products that generate real revenue.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="text-[16px] lg:text-[18px] font-normal text-white leading-[1.6]"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8"
            >
              <a href="/cv_otw_summer_intern.pdf" download>
                <Pill variant="solid" size="md">Download CV</Pill>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,153,255,0.1)_0%,transparent_70%)] -z-10" />
            <div className="rounded-xl overflow-hidden shadow-[rgba(0,153,255,0.15)_0px_0px_0px_1px]">
              <img
                src="/portrait.jpg"
                alt="Athilla Zaidan"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement!;
                  parent.innerHTML = `<div class="w-full aspect-[3/4] bg-gradient-to-br from-[#090909] via-[#111] to-[#090909] flex items-center justify-center"><span class="text-[#a6a6a6] text-sm">Photo coming soon</span></div>`;
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}