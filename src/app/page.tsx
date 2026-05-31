import AboutSection from "../components/sections/about-section/AboutSection";
import ContactSection from "../components/sections/contact-section/ContactSection";
import HeroSection from "../components/sections/hero-section/HeroSection";
import ProjectsSection from "../components/sections/projects-section/ProjectsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
