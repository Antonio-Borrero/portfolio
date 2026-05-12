import Image from "next/image";
import heroImage from "@/public/heroImage.avif";

export default function HeroSection() {
	return (
		<section
			className="min-h-screen relative flex items-center justify-center"
			id="hero"
		>
			<Image
				src={heroImage}
				alt="hero image"
				fill
				priority
				className="object-cover"
			/>
			<div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/80"></div>
			<div className="relative z-50 text-center">
				<h1 className="uppercase text-5xl font-bold tracking-wider text-white">
					Full Stack Developer
				</h1>
				<p className="text-lg font-md tracking-wide">
					Ideating, developing, breaking, testing, and learning at every step.
				</p>
			</div>
		</section>
	);
}
