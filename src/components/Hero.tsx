"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FluidAurora } from "./FluidAurora";
import { TextReveal } from "./TextReveal";
import { LineReveal } from "./LineReveal";
import { useMagnetic } from "@/hooks/useMagnetic";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const reducedMotion = useReducedMotion();
  const { ref: magneticRef, offset, handlers } = useMagnetic(0.25, 120);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <FluidAurora
        speed={0.4}
        brightness={0.7}
        color1="#ffffff"
        color2="#0099ff"
        mouseInfluence={0.15}
        enableMouseInteraction
        className="absolute inset-0"
      />

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(0,0,0,0.4) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(0,0,0,0.3) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="overflow-hidden">
          <TextReveal
            text="Athilla Zaidan"
            className="text-[40px] sm:text-[62px] lg:text-[85px] font-medium text-white leading-[0.95] tracking-[-0.04em]"
            delay={0.3}
            stagger={0.04}
            showCaret
          />
        </div>

        <LineReveal delay={0.9} className="mt-4">
          <p className="text-[18px] sm:text-[20px] font-normal text-white tracking-[-0.8px]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}>
            Software and AI Engineer
          </p>
        </LineReveal>

        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-2"
        >
          <p className="text-[15px] font-normal text-white" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}>
            Building intelligent systems from models to deployment
          </p>
        </motion.div>

        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-8"
        >
          <button
            ref={magneticRef as React.RefObject<HTMLButtonElement>}
            onClick={scrollToProjects}
            {...handlers}
            style={{
              transform: reducedMotion ? undefined : `translate(${offset.x}px, ${offset.y}px)`,
            }}
            className="px-6 py-3 rounded-full bg-[rgba(255,255,255,0.1)] text-white text-sm font-medium hover:bg-[rgba(255,255,255,0.15)] hover:scale-[1.03] transition-all duration-200 cursor-pointer"
          >
            View My Work
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollIndicator ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-white opacity-60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
