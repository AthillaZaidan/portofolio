"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
  isActive?: boolean;
  isDimmed?: boolean;
}

export function ProjectCard({
  project,
  isActive = false,
  isDimmed = false,
}: ProjectCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setTilt({ x: y * -6, y: x * 6 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const visibleTech = project.techStack.slice(0, 4);
  const remainingTech = project.techStack.length - 4;

  return (
    <div
      className={cn(
        "relative bg-[#090909] rounded-xl overflow-hidden transition-all duration-300",
        "shadow-[rgba(0,153,255,0.15)_0px_0px_0px_1px]",
        isActive && "shadow-[rgba(0,153,255,0.3)_0px_0px_0px_1px_rgba(0,0,0,0.4)_0px_20px_40px]",
        !isActive && isDimmed && "opacity-60 scale-[0.92]",
        isActive && "hover:shadow-[rgba(0,153,255,0.4)_0px_0px_0px_1px_rgba(0,0,0,0.5)_0px_25px_50px]"
      )}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)${!isActive && isDimmed ? " scale(0.92)" : ""}`,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={isActive ? handleMouseMove : undefined}
      onMouseLeave={isActive ? handleMouseLeave : undefined}
    >
      <div className="relative h-[180px] w-full overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a2e] via-[#090909] to-[#090920]" />
        )}
        {project.badge && (
          <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-[rgba(0,0,0,0.7)] border border-[rgba(0,153,255,0.3)] backdrop-blur-sm">
            <span className="text-[9px] font-semibold text-white tracking-wide uppercase">{project.badge}</span>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[48px] font-bold text-[rgba(255,255,255,0.03)] select-none">
            {project.title.charAt(0)}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#090909] to-transparent" />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[20px] font-bold text-white tracking-[-0.5px] leading-tight">
            {project.title}
          </h3>
          <span className="shrink-0 px-2 py-0.5 rounded bg-[rgba(0,153,255,0.1)] text-[#0099ff] text-[11px] font-medium">
            {project.role}
          </span>
        </div>

        <p className="mt-3 text-[14px] font-normal text-[rgba(255,255,255,0.55)] leading-[1.55] line-clamp-3">
          {project.description}
        </p>

        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-[rgba(255,255,255,0.06)] text-[rgba(255,255,255,0.7)] text-[11px] font-medium"
            >
              {tech}
            </span>
          ))}
          {remainingTech > 0 && (
            <span className="px-2 py-0.5 rounded-md bg-[rgba(0,153,255,0.08)] text-[#0099ff] text-[11px] font-medium">
              +{remainingTech}
            </span>
          )}
        </div>

        {project.metrics && (
          <p className="mt-2.5 font-mono text-[10.5px] text-[#0099ff] tracking-tight">
            {project.metrics}
          </p>
        )}

        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 text-[rgba(255,255,255,0.6)] text-[13px] font-medium hover:text-[#0099ff] hover:translate-x-0.5 transition-all duration-200"
        >
          <GithubIcon size={15} />
          <span>Source Code</span>
          <ExternalLink size={12} className="ml-0.5 opacity-50" />
        </a>
      </div>
    </div>
  );
}