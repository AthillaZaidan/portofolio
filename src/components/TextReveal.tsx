"use client";

import { motion, useReducedMotion } from "framer-motion";

interface TextRevealProps {
  readonly text: string;
  readonly className?: string;
  readonly delay?: number;
  readonly stagger?: number;
  readonly showCaret?: boolean;
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.03,
  showCaret = false,
}: TextRevealProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <span className={className}>{text}</span>;
  }

  const characters = text.split("");

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              textShadow: [
                "0 0 0px rgba(0,153,255,0)",
                "0 0 20px rgba(0,153,255,0.6)",
                "0 0 0px rgba(0,153,255,0)",
              ],
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                textShadow: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      {showCaret && (
        <motion.span
          className="inline-block w-[3px] h-[1em] bg-[#0099ff] ml-1 align-middle"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: 5, repeatType: "loop" }}
          style={{ verticalAlign: "baseline" }}
        />
      )}
    </motion.span>
  );
}
