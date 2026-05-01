"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { IconButton } from "./ui/IconButton";
import { SectionLabel } from "./ui/SectionLabel";
import { Heading } from "./ui/Heading";
import { projects } from "@/data/projects";
import { useCarousel } from "@/hooks/useCarousel";

export function ProjectCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const {
    activeIndex,
    goNext,
    goPrev,
    goTo,
    canGoNext,
    canGoPrev,
    isCenter,
  } = useCarousel({
    totalItems: projects.length,
    itemsPerView,
  });

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 809) setItemsPerView(1);
      else if (width < 1200) setItemsPerView(2);
      else setItemsPerView(3);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const cardWidth = containerRef.current
    ? (containerRef.current.offsetWidth - (itemsPerView - 1) * 24) / itemsPerView
    : 380;

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
          <SectionLabel text="PROJECTS" className="mb-4 block" />
          <Heading as="h2" size="hero">
            Things I&apos;ve built
          </Heading>
          <p className="mt-4 text-[18px] font-normal text-[#a6a6a6]">
            AI systems, fullstack platforms, and everything in between
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden lg:block">
            <IconButton icon={ChevronLeft} onClick={goPrev} disabled={!canGoPrev} size="lg" />
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden lg:block">
            <IconButton icon={ChevronRight} onClick={goNext} disabled={!canGoNext} size="lg" />
          </div>

          <div
            ref={containerRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="flex gap-6"
              animate={{
                x: -(activeIndex * (cardWidth + 24)),
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
                  style={{ width: cardWidth, flexShrink: 0 }}
                >
                  <ProjectCard
                    project={project}
                    isActive={isCenter(index)}
                    isDimmed={itemsPerView > 1 && !isCenter(index)}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`rounded-full transition-all duration-200 cursor-pointer ${
                  index === activeIndex
                    ? "w-2.5 h-2.5 bg-[#0099ff]"
                    : "w-2 h-2 bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.5)]"
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