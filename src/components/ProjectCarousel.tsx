"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { SectionLabel } from "./ui/SectionLabel";
import { Heading } from "./ui/Heading";
import { projects } from "@/data/projects";

const CARD_WIDTH = 380;
const CARD_GAP = 24;

export function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setActiveIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setActiveIndex((i) => Math.min(projects.length - 1, i + 1));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const goNext = () => setActiveIndex((i) => Math.min(i + 1, projects.length - 1));
  const goPrev = () => setActiveIndex((i) => Math.max(i - 1, 0));
  const goTo = (i: number) => setActiveIndex(Math.max(0, Math.min(i, projects.length - 1)));

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const centerOffset = containerWidth / 2 - CARD_WIDTH / 2;

  return (
    <section id="projects" className="bg-black py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* <SectionLabel text="PROJECTS" className="mb-4 block" /> */}
          <Heading as="h2" size="hero">
            Things I&apos;ve built
          </Heading>
          <p className="mt-4 text-[18px] font-normal text-[#a6a6a6]">
            AI systems, fullstack platforms, and everything in between
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden lg:block">
            <button
              onClick={goPrev}
              disabled={activeIndex === 0}
              className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.1)] text-white flex items-center justify-center hover:bg-[rgba(255,255,255,0.15)] hover:scale-105 transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Previous project"
            >
              <ChevronLeft size={22} />
            </button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden lg:block">
            <button
              onClick={goNext}
              disabled={activeIndex === projects.length - 1}
              className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.1)] text-white flex items-center justify-center hover:bg-[rgba(255,255,255,0.15)] hover:scale-105 transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Next project"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div
            ref={containerRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="flex"
              style={{ gap: `${CARD_GAP}px` }}
              animate={{
                x: centerOffset - activeIndex * (CARD_WIDTH + CARD_GAP),
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  style={{ width: CARD_WIDTH, flexShrink: 0 }}
                >
                  <ProjectCard
                    project={project}
                    isActive={index === activeIndex}
                    isDimmed={index !== activeIndex}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center gap-2.5 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`rounded-full transition-all duration-200 cursor-pointer ${
                  index === activeIndex
                    ? "w-6 h-2.5 bg-[#0099ff]"
                    : "w-2.5 h-2.5 bg-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.4)]"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}