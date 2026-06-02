import { useState, TouchEvent } from "react";

interface Props {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

export default function useSwipe({ onSwipeLeft, onSwipeRight }: Props) {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const onTouchStart = (e: TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;

    if (diffX > 50) {
      onSwipeLeft();
    } else if (diffX < -50) {
      onSwipeRight();
    }
  };
  return { onTouchStart, onTouchEnd };
}
