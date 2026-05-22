"use client";

import { useEffect } from "react";
import HeroSection from "../components/sections/hero-section/HeroSection";
import ProjectsSection from "../components/sections/projects-section/ProjectsSection";

export default function Home() {
  useEffect(() => {
    const scrollY = sessionStorage.getItem("scrollY");

    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY));
      sessionStorage.removeItem("scrollY");
    }
  }, []);

  return (
    <main>
      <HeroSection />
      <ProjectsSection />
    </main>
  );
}
