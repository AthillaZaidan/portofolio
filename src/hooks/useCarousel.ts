"use client";

import { useState, useCallback, useEffect } from "react";

interface UseCarouselProps {
  totalItems: number;
  itemsPerView: number;
}

export function useCarousel({ totalItems, itemsPerView }: UseCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goTo = useCallback((index: number) => {
    setActiveIndex(Math.max(0, Math.min(index, maxIndex)));
  }, [maxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  return {
    activeIndex,
    goNext,
    goPrev,
    goTo,
    canGoNext: activeIndex < maxIndex,
    canGoPrev: activeIndex > 0,
    isCenter: (index: number) =>
      itemsPerView % 2 === 1
        ? index === activeIndex + Math.floor(itemsPerView / 2)
        : index === activeIndex + itemsPerView / 2 - 1,
  };
}