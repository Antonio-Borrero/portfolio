import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      id="hero"
    >
      <Image
        src={"/heroImage.webp"}
        alt="hero image"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-neutral-900"></div>
      <header className="relative z-20 text-center">
        <h1 className="text-5xl font-bold tracking-wider text-white uppercase">
          Full Stack Developer
        </h1>
        <p className="font-md text-lg tracking-wide">
          Ideating, developing, breaking, testing, and learning at every step.
        </p>
      </header>
      <Link
        href="#projects"
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 animate-bounce cursor-pointer text-neutral-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Link>
    </section>
  );
}
