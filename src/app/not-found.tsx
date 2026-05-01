"use client";

import Link from "next/link";
import { NeuralCanvas } from "@/components/NeuralCanvas";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      <NeuralCanvas
        particleCount={60}
        connectionDistance={100}
        mouseRadius={100}
        isDimmed
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-[62px] sm:text-[110px] font-medium text-white leading-[0.95] tracking-[-0.04em]">
          404
        </h1>
        <p className="mt-4 text-[18px] text-[#a6a6a6]">
          This page doesn&apos;t exist in this dimension.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block px-8 py-3 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition-transform"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}