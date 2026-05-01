"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SoftAurora } from "./SoftAurora";

export function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

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
      <SoftAurora
        speed={0.5}
        scale={1.5}
        brightness={0.8}
        color1="#ffffff"
        color2="#0099ff"
        noiseFrequency={2.5}
        noiseAmplitude={1.0}
        bandHeight={0.5}
        bandSpread={1.0}
        octaveDecay={0.1}
        layerOffset={0}
        colorSpeed={1.0}
        enableMouseInteraction={true}
        mouseInfluence={0.25}
        className="absolute inset-0"
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-[40px] sm:text-[62px] lg:text-[85px] font-medium text-white leading-[0.95] tracking-[-0.04em]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}>
            Athilla Zaidan
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4"
        >
          <p className="text-[18px] sm:text-[20px] font-normal text-white tracking-[-0.8px]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}>
            AI Engineer & Fullstack Developer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-2"
        >
          <p className="text-[15px] font-normal text-white" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}>
            Building intelligent systems from models to deployment
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8"
        >
          <button
            onClick={scrollToProjects}
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