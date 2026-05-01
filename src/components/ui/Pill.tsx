"use client";

import { cn } from "@/lib/utils";

interface PillProps {
  children: React.ReactNode;
  variant?: "frosted" | "solid" | "bordered";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export function Pill({
  children,
  variant = "frosted",
  size = "md",
  className,
  onClick,
}: PillProps) {
  const variants = {
    frosted:
      "bg-[rgba(255,255,255,0.1)] text-white hover:bg-[rgba(255,255,255,0.15)]",
    solid: "bg-white text-black hover:bg-white/90",
    bordered:
      "bg-transparent border border-[rgba(0,153,255,0.3)] text-white hover:bg-[rgba(0,153,255,0.1)]",
  };

  const sizes = {
    sm: "px-3 py-1 text-[11px] rounded-full",
    md: "px-4 py-2 text-sm rounded-full",
    lg: "px-6 py-3 text-base rounded-full",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "transition-all duration-200 ease-out font-medium cursor-pointer",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </button>
  );
}