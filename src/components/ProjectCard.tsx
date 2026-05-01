"use client";

import { useState } from "react";
import { GitBranch } from "lucide-react";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

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
    setTilt({ x: y * -8, y: x * 8 });
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
        !isActive && isDimmed && "opacity-70 scale-95",
        "hover:shadow-[rgba(0,153,255,0.3)_0px_0px_0px_1px] hover:-translate-y-2"
      )}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: "preserve-3d" as const,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-[200px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] to-[#090909]" />
        {project.badge && (
          <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-[rgba(0,0,0,0.6)] border border-[rgba(0,153,255,0.3)]">
            <span className="text-[9px] font-semibold text-white">{project.badge}</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#090909] to-transparent" />
      </div>

      <div className="p-5">
        <h3 className="text-[22px] font-bold text-white tracking-[-0.8px]">
          {project.title}
        </h3>
        <p className="mt-1 text-[13px] font-medium text-[#a6a6a6]">
          {project.role}
        </p>
        <p className="mt-3 text-[15px] font-normal text-[rgba(255,255,255,0.6)] leading-[1.5] line-clamp-3">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full bg-[rgba(255,255,255,0.08)] text-white text-[11px]"
            >
              {tech}
            </span>
          ))}
          {remainingTech > 0 && (
            <span className="px-2.5 py-1 rounded-full bg-[rgba(255,255,255,0.08)] text-white text-[11px]">
              +{remainingTech}
            </span>
          )}
        </div>

        {project.metrics && (
          <p className="mt-2 font-mono text-[10.4px] text-[#0099ff]">
            {project.metrics}
          </p>
        )}

        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 text-white text-[14px] font-normal hover:text-[#0099ff] hover:translate-x-1 transition-all duration-200"
        >
          <GitBranch size={20} />
          <span>View Project</span>
        </a>
      </div>
    </div>
  );
}