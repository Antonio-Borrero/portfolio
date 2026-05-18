"use client";

import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default function ModalFrame({ children }: Props) {
  const router = useRouter();
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
      <div className="max-w-5xl overflow-hidden">{children}</div>
    </div>
  );
}
