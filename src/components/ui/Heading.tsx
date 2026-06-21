import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { LineReveal } from "@/components/LineReveal";

interface HeadingProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: "hero" | "section" | "feature";
  className?: string;
  centered?: boolean;
  id?: string;
  reveal?: boolean;
  revealDelay?: number;
}

export function Heading({
  children,
  as: Tag = "h2",
  size = "section",
  className,
  centered = false,
  id,
  reveal = false,
  revealDelay = 0,
}: HeadingProps) {
  const sizes = {
    hero: "text-[40px] sm:text-[62px] lg:text-[85px] leading-[0.95] tracking-[-0.04em]",
    section:
      "text-[32px] sm:text-[40px] lg:text-[62px] leading-[1.0] tracking-[-0.03em]",
    feature:
      "text-[22px] sm:text-[24px] lg:text-[32px] leading-[1.13] tracking-[-0.02em]",
  };

  const content = (
    <Tag
      id={id}
      className={cn(
        "font-medium text-white",
        sizes[size],
        centered && "text-center",
        className
      )}
    >
      {children}
    </Tag>
  );

  if (reveal) {
    return (
      <LineReveal delay={revealDelay} className={centered ? "text-center" : undefined}>
        {content}
      </LineReveal>
    );
  }

  return content;
}
