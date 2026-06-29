import { useState, useCallback, useRef, useEffect } from "react";

interface UseCarouselProps {
  totalItems: number;
  autoAdvanceInterval?: number;
}

export function useCarousel({ totalItems, autoAdvanceInterval = 5000 }: UseCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goTo = useCallback((index: number) => {
    setActiveIndex((prev) => {
      setDirection(index > prev ? 1 : -1);
      return Math.max(0, Math.min(index, totalItems - 1));
    });
  }, [totalItems]);

  useEffect(() => {
    if (autoAdvanceInterval <= 0 || isPaused || totalItems <= 1) return;
    timerRef.current = setInterval(goNext, autoAdvanceInterval);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [autoAdvanceInterval, isPaused, goNext, totalItems]);

  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => setIsPaused(false), []);

  return {
    activeIndex,
    direction,
    goNext,
    goPrev,
    goTo,
    pause,
    resume,
    isPaused,
  };
}
