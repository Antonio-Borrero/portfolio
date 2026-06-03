"use client";

import useActiveSection from "@/src/components/shared/navbar/hooks/useActiveSection";
import useClickOutside from "@/src/hooks/useClickOutside";
import useKeyDown from "@/src/hooks/useKeyDown";
import Link from "next/link";
import { useRef, useState } from "react";
import { SlMenu } from "react-icons/sl";
import MenuItems from "./components/MenuItems";
import useCloseOnScroll from "@/src/hooks/useCloseOnScroll";
import useScrollBackground from "./hooks/useScrollBackground";

export default function Navbar() {
  const menuItems = [
    { href: "/#projects", label: "Proyectos", section: "projects" },
    { href: "/#about", label: "Sobre mi", section: "about" },
    { href: "/#contact", label: "Contacto", section: "contact" },
  ];

  const activeSection = useActiveSection([
    "hero",
    "projects",
    "about",
    "contact",
  ]);

  const isScrolled = useScrollBackground();

  // Mobile menu state and ref for click outside detection
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const refItem = useRef<HTMLDivElement>(null);

  useCloseOnScroll({ isOpen: isMenuOpen, onClose: () => setIsMenuOpen(false) });
  useClickOutside(refItem, () => setIsMenuOpen(false));
  useKeyDown(() => setIsMenuOpen(false));

  return (
    <nav
      className={`fixed top-0 z-50 w-full py-2 transition-all duration-500 ${isScrolled || isMenuOpen ? "bg-neutral-950/60 backdrop-blur-lg" : "bg-transparent"}`}
      aria-label="Main navigation"
      ref={refItem}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8 tracking-wider md:px-16">
        <Link
          className="text-xl font-bold text-white uppercase lg:text-2xl"
          href="/#hero"
        >
          Antonio Borrero
        </Link>
        <button
          className="text-xl text-neutral-500 hover:text-neutral-200 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <SlMenu aria-hidden="true" />
        </button>

        {/* DESKTOP MENU */}

        <MenuItems menuItems={menuItems} activeSection={activeSection} />
      </div>

      {/* MOBILE MENU */}

      <div className="pt-4 md:hidden">
        {isMenuOpen && (
          <MenuItems
            menuItems={menuItems}
            activeSection={activeSection}
            variant="mobile"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
}
