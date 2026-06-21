"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from "lucide-react";
import { Heading } from "./ui/Heading";
import { projects } from "@/data/projects";

function GithubIcon({ size = 16 }: { readonly size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const activeProject = projects[activeIndex];
  const prefersReducedMotion = useReducedMotion();

  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!stageRef.current?.contains(document.activeElement)) return;
      if (e.key === "ArrowLeft") {
        setActiveIndex((i) => (i - 1 + projects.length) % projects.length);
      }
      if (e.key === "ArrowRight") {
        setActiveIndex((i) => (i + 1) % projects.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const goNext = () => setActiveIndex((i) => (i + 1) % projects.length);
  const goPrev = () =>
    setActiveIndex((i) => (i - 1 + projects.length) % projects.length);
  const goTo = (i: number) =>
    setActiveIndex(Math.max(0, Math.min(i, projects.length - 1)));

  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const imageVariants = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: { opacity: 0, scale: 1.02, filter: "brightness(0.8)" },
        animate: { opacity: 1, scale: 1, filter: "brightness(1)" },
        exit: { opacity: 0, scale: 0.98, filter: "brightness(0.8)" },
      };

  return (
    <section id="projects" className="bg-black py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        <div className="overflow-hidden mb-10 lg:mb-14">
          <Heading as="h2" size="hero" reveal>
            Things I&apos;ve built
          </Heading>
        </div>
        <motion.p
          className="mb-10 lg:mb-14 max-w-[62ch] text-[17px] sm:text-[18px] font-normal leading-[1.55] text-[#a6a6a6]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A focused index of AI systems, fullstack platforms, infrastructure,
          and competition work. Pick a project to inspect the proof.
        </motion.p>

        <div
          ref={stageRef}
          className="grid gap-5 lg:grid-cols-[minmax(240px,0.72fr)_minmax(0,1.8fr)] lg:[--project-stage-height:760px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="order-2 flex gap-2 overflow-x-auto pb-2 lg:order-1 lg:h-[var(--project-stage-height)] lg:flex-col lg:overflow-y-auto lg:overflow-x-visible lg:pr-2"
            role="tablist"
            aria-label="Projects"
          >
            {projects.map((project, index) => {
              const selected = index === activeIndex;

              return (
                <button
                  key={project.id}
                  role="tab"
                  aria-selected={selected}
                  aria-controls="project-stage"
                  onClick={() => goTo(index)}
                  className={`group min-w-[240px] rounded-xl px-4 py-3 text-left transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0099ff] lg:min-w-0 ${
                    selected
                      ? "bg-[#090909] shadow-[rgba(0,153,255,0.5)_0px_0px_0px_1px]"
                      : "bg-transparent text-[#a6a6a6] hover:bg-[rgba(255,255,255,0.055)]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <motion.span
                      className={`font-mono text-[11px] ${
                        selected ? "text-[#0099ff]" : "text-white/40"
                      }`}
                      whileHover={prefersReducedMotion ? undefined : { scale: 1.3 }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.span>
                    {project.badge && (
                      <span className="max-w-[130px] truncate rounded-full bg-[rgba(0,153,255,0.1)] px-2 py-0.5 text-[10px] font-medium text-[#0099ff]">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-2 text-[15px] font-semibold leading-tight tracking-[-0.02em] ${
                      selected ? "text-white" : "text-white/70"
                    }`}
                  >
                    {project.title}
                  </p>
                  <p className="mt-1 text-[12px] leading-snug text-[#a6a6a6]">
                    {project.role}
                  </p>
                </button>
              );
            })}
          </div>

          <motion.article
            id="project-stage"
            role="tabpanel"
            className="order-1 overflow-hidden rounded-2xl bg-[#090909] shadow-[rgba(0,153,255,0.24)_0px_0px_0px_1px] lg:order-2 lg:h-[var(--project-stage-height)]"
          >
            <div className="flex h-full flex-col">
              <div
                className="relative aspect-[21/9] shrink-0 overflow-hidden bg-black max-lg:aspect-video group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <AnimatePresence mode="wait">
                  {activeProject.image ? (
                    <motion.img
                      key={activeProject.id}
                      src={activeProject.image}
                      alt={`${activeProject.title} project screenshot`}
                      className="h-full w-full object-cover"
                      variants={imageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: prefersReducedMotion ? 0.12 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        transform: isHovered && !prefersReducedMotion ? "scale(1.03)" : "scale(1)",
                        transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    />
                  ) : (
                    <motion.div
                      key={`placeholder-${activeProject.id}`}
                      className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_50%_20%,rgba(0,153,255,0.18),transparent_34%),#050505]"
                      variants={imageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: prefersReducedMotion ? 0.12 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl shadow-[rgba(0,153,255,0.32)_0px_0px_0px_1px]">
                        <ImageIcon className="text-[#0099ff]" size={28} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <motion.div
                  className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#090909] to-transparent flex items-end justify-center pb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered && !prefersReducedMotion ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-[12px] font-medium text-white/70 flex items-center gap-1">
                    View Source <ArrowUpRight size={12} />
                  </span>
                </motion.div>
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#090909] to-transparent pointer-events-none" />
              </div>

              <div className="flex min-h-0 flex-1 flex-col justify-between p-5 sm:p-7 lg:p-7">
                <div className="grid gap-5 lg:grid-cols-[minmax(260px,0.72fr)_minmax(0,1fr)]">
                  <div className="flex items-start justify-between gap-4 lg:block">
                    <div>
                      <p className="font-mono text-[11px] text-[#0099ff]">
                        {String(activeIndex + 1).padStart(2, "0")} /{" "}
                        {String(projects.length).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-[32px] font-medium leading-[0.96] tracking-[-0.04em] text-white sm:text-[40px]">
                        {activeProject.title}
                      </h3>
                      <p className="mt-2 text-[14px] font-medium text-white/70">
                        {activeProject.role}
                      </p>
                    </div>

                    {activeProject.badge && (
                      <span className="max-w-[170px] rounded-full bg-[rgba(0,153,255,0.11)] px-3 py-1 text-right text-[11px] font-medium leading-tight text-[#0099ff] shadow-[rgba(0,153,255,0.24)_0px_0px_0px_1px] lg:mt-5 lg:inline-block lg:text-left">
                        {activeProject.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <p className="text-[15px] leading-[1.55] text-[#c9c9c9] lg:line-clamp-3">
                      {activeProject.description}
                    </p>

                    {activeProject.metrics && (
                      <p className="mt-4 rounded-xl bg-[rgba(0,153,255,0.08)] px-4 py-2.5 font-mono text-[12px] leading-relaxed text-[#78cfff]">
                        {activeProject.metrics}
                      </p>
                    )}

                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-[rgba(255,255,255,0.075)] px-3 py-1 text-[12px] font-medium text-white/75"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-4 h-px w-full bg-white/10" />
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex gap-2">
                      <button
                        onClick={goPrev}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(255,255,255,0.1)] text-white transition duration-200 hover:bg-[rgba(255,255,255,0.16)]"
                        aria-label="Previous project"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={goNext}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(255,255,255,0.1)] text-white transition duration-200 hover:bg-[rgba(255,255,255,0.16)]"
                        aria-label="Next project"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>

                    <a
                      href={activeProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-4 text-[13px] font-semibold text-black transition duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0099ff]"
                    >
                      <GithubIcon size={16} />
                      Source code
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          <div className="order-3 flex items-center justify-center gap-2 lg:col-start-2">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => goTo(index)}
                className={`rounded-full transition-all duration-200 cursor-pointer ${
                  index === activeIndex
                    ? "h-2.5 w-7 bg-[#0099ff]"
                    : "w-2.5 h-2.5 bg-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.4)]"
                }`}
                aria-label={`View ${project.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
