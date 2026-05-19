"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface Props {
  gallery: (string | StaticImageData)[];
}

export default function Carrousel({ gallery }: Props) {
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

  return (
    <div className="relative h-[50vh] w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950/60 py-2">
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <div
        className="w-80% relative flex h-full transition-transform duration-500"
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
              priority
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {gallery.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full border ${
              index === currentIndex
                ? "h-3 w-3 border bg-white"
                : "bg-neutral-800/60"
            }`}
          />
        ))}
      </div>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
