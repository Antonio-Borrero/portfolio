"use client";

import useClickOutside from "@/src/hooks/useClickOutside";
import useDisableScroll from "@/src/hooks/useDisableScroll";
import useKeyDown from "@/src/hooks/useKeyDown";
import { useRouter } from "next/navigation";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

export default function ModalFrame({ children, onClose }: Props) {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, onClose);

  useKeyDown(onClose);

  useDisableScroll();

  return (
    <div
      className="fixed inset-0 z-50 flex h-full w-full flex-col items-center justify-center bg-black/50 p-4 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-5xl" ref={modalRef}>
        <button
          className="absolute -top-12 right-0 z-50 xl:hidden"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}
