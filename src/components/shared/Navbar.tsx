"use client";

import useActiveSection from "@/src/hooks/useActiveSection";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== "/") {
        setIsScrolled(true);
        return;
      }
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const activeSection = useActiveSection([
    "hero",
    "projects",
    "about",
    "contact",
  ]);

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
        <Link className="text-2xl font-bold text-white uppercase" href="/#hero">
          Antonio Borrero
        </Link>

        <ul className="group flex items-center gap-5 text-sm">
          <li>
            <Link
              href="/#projects"
              className={`uppercase transition-opacity duration-300 group-hover:opacity-50 hover:text-neutral-200 hover:opacity-100 ${
                activeSection === "projects"
                  ? "text-neutral-200 opacity-100"
                  : "text-neutral-500"
              }`}
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className={`uppercase transition-opacity duration-300 group-hover:opacity-60 hover:text-neutral-200 hover:opacity-100 ${
                activeSection === "contact"
                  ? "text-neutral-200 opacity-100"
                  : "text-neutral-500"
              }`}
            >
              Contacto
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className={`uppercase transition-opacity duration-300 group-hover:opacity-60 hover:text-neutral-200 hover:opacity-100 ${
                activeSection === "about"
                  ? "text-neutral-200 opacity-100"
                  : "text-neutral-500"
              }`}
            >
              Sobre mi
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
