"use client";

import Link from "next/link";
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
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-neutral-950/60 py-3 backdrop-blur-lg"
          : "bg-transparent py-5"
      }`}
      aria-label="Main navigation"
    >
      {" "}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between tracking-wider">
        <Link className="text-2xl font-bold text-white uppercase" href="/">
          Antonio Borrero
        </Link>

        <ul className="group flex items-center gap-5 text-sm">
          <li>
            <Link
              href="/#projects"
              replace
              className="uppercase transition-opacity duration-300 group-hover:opacity-50 hover:text-neutral-200 hover:opacity-100"
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="uppercase transition-opacity duration-300 group-hover:opacity-60 hover:text-neutral-200 hover:opacity-100"
            >
              Contacto
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className="uppercase transition-opacity duration-300 group-hover:opacity-60 hover:text-neutral-200 hover:opacity-100"
            >
              Sobre mi
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
