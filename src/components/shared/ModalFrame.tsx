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
    <div className="fixed inset-0 z-50 flex h-full w-full flex-col items-center justify-center bg-black/50 p-4 px-4 py-8 backdrop-blur-sm">
      <div
        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden overflow-y-auto rounded-2xl p-6"
        ref={modalRef}
      >
        {children}
      </div>
    </div>
  );
}
