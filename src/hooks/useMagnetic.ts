"use client";

import { useRef, useState, useCallback } from "react";

interface MagneticOffset {
  readonly x: number;
  readonly y: number;
}

export function useMagnetic(strength = 0.3, radius = 100) {
  const ref = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState<MagneticOffset>({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = event.clientX - centerX;
      const distanceY = event.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      if (distance < radius) {
        setOffset({
          x: distanceX * strength,
          y: distanceY * strength,
        });
      } else {
        setOffset({ x: 0, y: 0 });
      }
    },
    [strength, radius]
  );

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  return {
    ref,
    offset,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
  };
}
