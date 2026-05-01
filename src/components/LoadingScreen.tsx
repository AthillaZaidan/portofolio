"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { OrbitImages } from "./OrbitImages";

const orbitImages = [
  "/projects/cognify.png",
  "/projects/vokara.png",
  "/projects/grandsummit.png",
  "/projects/findmi.png",
  "/projects/mjolnir.png",
  "/projects/malam-keos.png",
  "/projects/proxivity.png",
  "/projects/greedy-conqueror.png",
];

interface LoadingScreenProps {
  onLoadComplete?: () => void;
}

export function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const duration = 1800;
    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setIsVisible(false);
          onLoadComplete?.();
        }, 300);
      }
    };

    requestAnimationFrame(updateProgress);

    const timeout = setTimeout(() => {
      setIsVisible(false);
      onLoadComplete?.();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
        >
          <OrbitImages
            images={orbitImages}
            shape="circle"
            radius={180}
            baseWidth={500}
            duration={12}
            itemSize={56}
            rotation={0}
            fill={true}
            responsive={true}
            paused={false}
            className="absolute inset-0 w-full h-full opacity-60"
          />

          <div className="relative z-20 flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg font-medium tracking-[-0.5px] text-white mb-6"
            >
              Athilla Zaidan
            </motion.h2>
            <div className="w-48 h-[1px] bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#0099ff]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}