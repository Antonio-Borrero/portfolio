"use client";

import useClickOutside from "@/src/hooks/useClickOutside";
import useKeyDown from "@/src/hooks/useKeyDown";
import { useRouter } from "next/navigation";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
}

export default function ModalFrame({ children }: Props) {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, () => {
    router.back();
  });

  useKeyDown(modalRef, () => {
    router.back();
  });

  return (
    <div className="fixed inset-0 z-50 flex min-h-screen w-full flex-col items-center justify-center bg-black/50 backdrop-blur-sm">
      <button
        className="absolute top-4 right-4 hover:text-white"
        onClick={() => {
          router.back();
        }}
      >
        X
      </button>
      <div className="max-w-5xl overflow-hidden" ref={modalRef}>
        {children}
      </div>
    </div>
  );
}
