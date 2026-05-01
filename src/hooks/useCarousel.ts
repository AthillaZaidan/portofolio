import { useState, useCallback } from "react";

interface UseCarouselProps {
  totalItems: number;
}

export function useCarousel({ totalItems }: UseCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => Math.min(prev + 1, totalItems - 1));
  }, [totalItems]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goTo = useCallback((index: number) => {
    setActiveIndex(Math.max(0, Math.min(index, totalItems - 1)));
  }, [totalItems]);

  return {
    activeIndex,
    goNext,
    goPrev,
    goTo,
    canGoNext: activeIndex < totalItems - 1,
    canGoPrev: activeIndex > 0,
  };
}