"use client";

import useSwipe from "@/src/hooks/useSwipe";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface Props {
  gallery: (string | StaticImageData)[];
}

export default function Carousel({ gallery }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? gallery.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === gallery.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const swipeHandlers = useSwipe({
    onSwipeLeft: handleNext,
    onSwipeRight: handlePrev,
  });

  const ArrowIcon = ({ direction }: { direction: "left" | "right" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-10 w-10 transition-transform duration-200 hover:scale-110 hover:text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={
          direction === "left"
            ? "M15.75 19.5L8.25 12l7.5-7.5"
            : "M8.25 4.5l7.5 7.5-7.5 7.5"
        }
      />
    </svg>
  );

  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950/60 py-2 md:h-[50vh]"
      {...swipeHandlers}
    >
      <button
        onClick={handlePrev}
        aria-label="Previous image"
        className="absolute top-1/2 left-15 z-10 hidden -translate-y-1/2 cursor-pointer xl:block"
      >
        <ArrowIcon direction="left" />
      </button>
      <div
        className="relative flex h-full transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {gallery.map((img, index) => (
          <div className="relative h-full w-full shrink-0" key={index}>
            <Image
              src={img}
              alt="Project Image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain opacity-80"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {gallery.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-1 rounded-full border border-neutral-500 sm:h-2 sm:w-2 ${
              index === currentIndex
                ? "h-1.5 w-1.5 border bg-white sm:h-2 sm:w-2"
                : "bg-neutral-800/60"
            }`}
          />
        ))}
      </div>

      <button
        onClick={handleNext}
        aria-label="Next image"
        className="absolute top-1/2 right-15 z-10 hidden -translate-y-1/2 cursor-pointer xl:block"
      >
        <ArrowIcon direction="right" />
      </button>
    </div>
  );
}
