"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
import type { Project } from "@/types";

interface ProjectInfoPanelProps {
  project: Project;
}

export function ProjectInfoPanel({ project }: ProjectInfoPanelProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };

  const variants = shouldReduceMotion ? {} : itemVariants;
  const containerProps = shouldReduceMotion ? {} : { variants: containerVariants, initial: "hidden", animate: "visible" };
  const itemProps = shouldReduceMotion ? {} : { variants };

  return (
    <motion.div
      key={project.id}
      className="flex flex-col gap-3 sm:gap-6"
      {...containerProps}
    >
      <div className="flex flex-col gap-4">
        {project.badge && (
          <motion.div {...itemProps} className="self-start">
            <span className="rounded-full bg-[rgba(0,153,255,0.11)] px-3 py-1 text-[11px] text-[#0099ff] shadow-[rgba(0,153,255,0.24)_0px_0px_0px_1px]">
              {project.badge}
            </span>
          </motion.div>
        )}

        <motion.h2
          {...itemProps}
          className="font-sans text-[28px] font-medium leading-[1.0] tracking-[-0.03em] text-white sm:text-[36px] lg:text-[44px]"
        >
          {project.title}
        </motion.h2>

        <motion.div {...itemProps} className="text-[15px] font-medium text-[#0099ff]">
          {project.role}
        </motion.div>
      </div>

      {project.description && (
        <motion.p
          {...itemProps}
          className="max-w-[52ch] text-[14px] sm:text-[15px] leading-[1.55] text-[#a6a6a6] line-clamp-2 lg:line-clamp-3"
        >
          {project.description}
        </motion.p>
      )}

      {project.metrics && (
        <motion.div {...itemProps} className="self-start">
          <div className="rounded-xl bg-[rgba(0,153,255,0.08)] px-4 py-2 font-mono text-[12px] text-[#78cfff]">
            {project.metrics}
          </div>
        </motion.div>
      )}

      {project.techStack && project.techStack.length > 0 && (
        <motion.div {...itemProps} className="flex flex-wrap gap-2 overflow-hidden max-h-[34px]">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/10 px-3 py-1 text-[13px] font-medium text-white/70"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      )}

      <motion.div {...itemProps} className="mt-2">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-[40px] items-center justify-center gap-2 rounded-[100px] bg-white px-5 text-[14px] font-medium text-black transition-transform hover:scale-105 active:scale-95"
        >
          <GithubIcon className="h-4 w-4" />
          <span>Source code</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </motion.div>
    </motion.div>
  );
}
