import Image from "next/image";
import heroImage from "@/public/heroImage.avif";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      id="hero"
    >
      <Image
        src={heroImage}
        alt="hero image"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-neutral-900"></div>
      <div className="relative z-20 text-center">
        <h1 className="text-5xl font-bold tracking-wider text-white uppercase">
          Full Stack Developer
        </h1>
        <p className="font-md text-lg tracking-wide">
          Ideating, developing, breaking, testing, and learning at every step.
        </p>
      </div>
    </section>
  );
}
