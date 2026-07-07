/* eslint-disable @next/next/no-img-element */
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Project } from "@/types";
import { ImageIcon } from "lucide-react";

interface ProjectImageStageProps {
  project: Project;
  stack: { id: string; image?: string; title: string }[]; // next 2 projects for deck peek
}

export function ProjectImageStage({
  project,
  stack,
}: ProjectImageStageProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    enter: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.96,
      z: shouldReduceMotion ? 0 : -40,
    },
    center: { opacity: 1, scale: 1, z: 0 },
    exit: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 1.04,
      z: shouldReduceMotion ? 0 : 40,
    },
  };

  const transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

  return (
    <div className="relative w-full max-w-[760px] mx-auto lg:mx-0 pb-8 sm:pb-12 lg:pb-14">
      {/* Stage Container */}
      <div className="relative aspect-[16/10] sm:aspect-video w-full perspective-[1200px]">
        {/* Deck Peek (Background Cards) */}
        {stack.map((item, i) => {
          const depth = i + 1;
          const scale = 1 - depth * 0.055;
          const translateY = depth * 28;
          const opacity = depth === 1 ? 0.8 : 0.55;
          const zIndex = 5 - depth;

          return (
            <div
              key={`stack-${item.id}`}
              className="absolute inset-0 rounded-[12px] bg-[#050505] overflow-hidden pointer-events-none border border-white/10 shadow-[rgba(0,153,255,0.25)_0px_0px_0px_1px,rgba(255,255,255,0.08)_0px_0.5px_0px_0.5px]"
              style={{
                transform: `translateY(${translateY}px) scale(${scale})`,
                opacity,
                zIndex,
                transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              aria-hidden="true"
              tabIndex={-1}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover opacity-75"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#111] to-[#000]" />
              )}
              {/* Subtle overlay so the active card pops */}
              <div className="absolute inset-0 bg-black/25" />
            </div>
          );
        })}

        {/* Active Card */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={project.id}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className="absolute inset-0 z-10 rounded-[12px] overflow-hidden bg-[#050505] shadow-[rgba(0,153,255,0.15)_0px_0px_0px_1px,rgba(255,255,255,0.1)_0px_0.5px_0px_0.5px,rgba(0,0,0,0.25)_0px_20px_50px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {project.image ? (
              <img
                src={project.image}
                className="w-full h-full object-contain"
                draggable={false}
                alt={`${project.title} screenshot`}
              />
            ) : (
              <div className="flex w-full h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] to-[#050505] text-[#a6a6a6]">
                <ImageIcon className="mb-4 h-12 w-12 opacity-20" />
                <span className="text-sm font-medium tracking-wide opacity-50">
                  {project.title}
                </span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
