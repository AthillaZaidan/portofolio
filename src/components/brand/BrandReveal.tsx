"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export function BrandReveal({
  children,
  className = "",
  contentClassName = "",
  delay = 0,
  slow = false,
}: {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  delay?: number;
  slow?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={`${className} ${contentClassName}`}>{children}</div>;
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        className={contentClassName}
        initial={{ y: "115%" }}
        animate={{ y: isInView ? "0%" : "115%" }}
        transition={{ duration: slow ? 1.25 : 1, delay, ease: [0.87, 0, 0.13, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
