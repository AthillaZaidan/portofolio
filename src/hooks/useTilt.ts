"use client";

import { useRef, useState, useCallback } from "react";

interface TiltState {
  readonly rotateX: number;
  readonly rotateY: number;
  readonly spotlightX: number;
  readonly spotlightY: number;
}

export function useTilt(maxRotation = 8) {
  const ref = useRef<HTMLElement | null>(null);
  const [tilt, setTilt] = useState<TiltState>({
    rotateX: 0,
    rotateY: 0,
    spotlightX: 50,
    spotlightY: 50,
  });

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateX = (0.5 - y) * maxRotation * 2;
      const rotateY = (x - 0.5) * maxRotation * 2;
      setTilt({
        rotateX,
        rotateY,
        spotlightX: x * 100,
        spotlightY: y * 100,
      });
    },
    [maxRotation]
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({
      rotateX: 0,
      rotateY: 0,
      spotlightX: 50,
      spotlightY: 50,
    });
  }, []);

  return {
    ref,
    tilt,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
  };
}
