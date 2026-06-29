"use client";

import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Heading } from "./ui/Heading";
import { projects } from "@/data/projects";
import { useCarousel } from "@/hooks/useCarousel";
import { ProjectInfoPanel } from "./ProjectInfoPanel";
import { ProjectImageStage } from "./ProjectImageStage";

interface CarouselNavProps {
  goPrev: () => void;
  goNext: () => void;
  goTo?: (index: number) => void;
  activeIndex?: number;
  total?: number;
  projects?: typeof import("@/data/projects").projects;
}

function CarouselNav({ goPrev, goNext, goTo, activeIndex, total, projects }: CarouselNavProps) {
  const counter = activeIndex !== undefined && total ? (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-[11px] font-mono font-medium tracking-widest text-[#a6a6a6] border border-white/[0.08]">
      <span className="text-[#0099ff]">{String(activeIndex + 1).padStart(2, "0")}</span>
      <span className="text-white/30">/</span>
      <span>{String(total).padStart(2, "0")}</span>
    </span>
  ) : null;

  return (
    <>
      <button
        onClick={goPrev}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0099ff]"
        aria-label="Previous project"
      >
        <ChevronLeft size={20} />
      </button>

      {counter}

      {goTo && activeIndex !== undefined && projects && (
        <div role="tablist" aria-label="Projects" className="flex items-center gap-2">
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            const isPast = index < activeIndex;
            return (
              <button
                key={project.id}
                role="tab"
                aria-selected={isActive}
                aria-controls="project-stage"
                onClick={() => goTo(index)}
                className={`relative rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer group ${
                  isActive
                    ? "bg-[#0099ff] w-8 sm:w-7 h-2 sm:h-1.5"
                    : isPast
                      ? "bg-white/20 w-2 h-2 sm:w-1.5 sm:h-1.5"
                      : "bg-white/10 w-2 h-2 sm:w-1.5 sm:h-1.5 hover:bg-white/20"
                }`}
                aria-label={`View ${project.title}`}
              >
                <span
                  className={`absolute inset-0 rounded-full transition-transform duration-300 origin-left ${
                    isActive
                      ? "bg-[#0099ff]/30"
                      : "bg-[#0099ff]/20 scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            );
          })}
        </div>
      )}

      <button
        onClick={goNext}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0099ff]"
        aria-label="Next project"
      >
        <ChevronRight size={20} />
      </button>
    </>
  );
}

export function ProjectCarousel() {
  const { activeIndex, goNext, goPrev, goTo, pause, resume } = useCarousel({
    totalItems: projects.length,
    autoAdvanceInterval: 6000,
  });

  const [touchStart, setTouchStart] = useState(0);

  const activeProject = projects?.[activeIndex];

  // ── Build the visible card stack ──
  const stack = [
    projects[(activeIndex + 1) % projects.length],
    projects[(activeIndex + 2) % projects.length],
  ];

  // ── Touch / swipe ──
  const handleTouchStart = useCallback((e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX), []);
  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const diff = touchStart - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goNext();
        else goPrev();
      }
    },
    [touchStart, goNext, goPrev]
  );

  // ── Keyboard ──
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
      if (e.key === "ArrowRight") { e.preventDefault(); goNext(); }
    },
    [goNext, goPrev]
  );

  if (!projects?.length || !activeProject) return null;

  return (
    <section
      id="projects"
      className="relative bg-black py-12 sm:py-20 lg:py-32 min-h-[600px] sm:min-h-[680px] lg:min-h-[760px]"
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Project showcase"
      onKeyDown={handleKeyDown}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Background ambient glow ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(ellipse at 50% 80%, rgba(0,153,255,0.07) 0%, transparent 60%)",
        }}
      />

      {/* ── Heading in flow ── */}
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-10 pb-10 sm:pb-16 lg:pb-24">
        <Heading as="h2" size="hero" reveal className="text-[32px] sm:text-[48px] lg:text-[62px]">
          Things I&apos;ve built
        </Heading>
      </div>

      {/* ── Main grid ── */}
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        <ProjectInfoPanel project={activeProject} />

        {/* Mobile navigation between info and image so controls stay above the fold */}
        <div className="flex lg:hidden items-center justify-center gap-4">
          <CarouselNav goPrev={goPrev} goNext={goNext} goTo={goTo} activeIndex={activeIndex} total={projects.length} projects={projects} />
        </div>

        <ProjectImageStage project={activeProject} stack={stack} />
      </div>

      {/* ── Navigation below grid (desktop) ── */}
      <div className="hidden lg:flex mt-14 sm:mt-18 lg:mt-22 items-center justify-center gap-4 relative z-10">
        <CarouselNav goPrev={goPrev} goNext={goNext} goTo={goTo} activeIndex={activeIndex} total={projects.length} projects={projects} />
      </div>
    </section>
  );
}
