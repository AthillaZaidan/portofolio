"use client";

import { motion } from "framer-motion";
import { Heading } from "./ui/Heading";
import { Pill } from "./ui/Pill";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const paragraphs = [
  "I'm Athilla Zaidan, a Computer Science sophomore at Institut Teknologi Bandung with a 3.94/4.00 GPA. I operate at the intersection of artificial intelligence and fullstack engineering — building systems that don't just predict, but perform.",
  "My work spans from anomaly detection frameworks achieving 0.846 AUC-ROC, to NLP pipelines processing thousands of citizen aspirations, to production fullstack platforms serving 10,000+ users. I don't silo myself into 'AI' or 'web dev' — I build end-to-end.",
  "Beyond the code, I actively contribute to various organizations and communities — from student-led tech initiatives to national-scale events. I believe engineering is most powerful when it creates tangible, positive impact for society.",
];

export function About() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="about" className="min-h-screen bg-black py-20 lg:py-32" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
          <div>
            <div className="overflow-hidden mb-8">
              <Heading as="h2" size="section" id="about-heading" reveal>
                Engineering intelligence at every layer
              </Heading>
            </div>

            <div className="space-y-6">
              {paragraphs.map((text, index) => (
                <motion.p
                  key={index}
                  className="text-[16px] lg:text-[18px] font-normal text-white leading-[1.6]"
                  initial={
                    reducedMotion
                      ? { opacity: 1 }
                      : { opacity: 0, x: -30, filter: "blur(4px)" }
                  }
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.div
              className="mt-8"
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="/Athilla%20Zaidan%20Zidna%20Fann_CV.pdf" download>
                <Pill variant="solid" size="md">Download CV</Pill>
              </a>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,153,255,0.1)_0%,transparent_70%)] -z-10"
              animate={
                reducedMotion
                  ? undefined
                  : { scale: [0.98, 1.02, 0.98] }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="rounded-xl overflow-hidden shadow-[rgba(0,153,255,0.15)_0px_0px_0px_1px]"
              initial={
                reducedMotion
                  ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }
                  : { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }
              }
              whileInView={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="/portrait.jpg"
                alt="Athilla Zaidan — AI Engineer and Fullstack Developer"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
