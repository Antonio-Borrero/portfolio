"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > window.innerHeight - 800);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 w-full z-50 transition-all duration-500 ${
				isScrolled
					? "bg-neutral-950/60 backdrop-blur-lg py-3"
					: "bg-transparent py-5"
			}`}
		>
			{" "}
			<div className="max-w-7xl mx-auto h-16 flex items-center justify-between tracking-wider">
				<h1 className="text-2xl font-bold uppercase text-white">
					<a href="#hero">Antonio Borrero</a>
				</h1>
				<ul className="flex items-center gap-5 text-sm group">
					<li>
						<a
							href="#projects"
							className="group-hover:opacity-50 hover:text-neutral-200 hover:opacity-100 uppercase transition-opacity duration-300"
						>
							Proyectos
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="group-hover:opacity-60 hover:text-neutral-200 hover:opacity-100 uppercase transition-opacity duration-300"
						>
							Contacto
						</a>
					</li>
					<li>
						<a
							href="#about"
							className="group-hover:opacity-60 hover:text-neutral-200 hover:opacity-100 uppercase transition-opacity duration-300"
						>
							Sobre mi
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
