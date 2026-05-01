"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface IconButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

export function IconButton({
  icon: Icon,
  onClick,
  className,
  disabled = false,
  size = "md",
}: IconButtonProps) {
  const sizes = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-14 h-14",
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center",
        "transition-all duration-200 hover:bg-[rgba(255,255,255,0.15)] hover:scale-105",
        "disabled:opacity-30 disabled:hover:scale-100 disabled:hover:bg-[rgba(255,255,255,0.1)] disabled:cursor-not-allowed",
        sizes[size],
        className
      )}
    >
      <Icon size={iconSizes[size]} className="text-white" />
    </button>
  );
}