"use client";

import { projects } from "@/src/data/projects";
import ProjectFilters from "./components/filter";
import ProjectCard from "./components/ProjectCard";
import useProjectFilters from "@/src/hooks/useProjectFilters";

export default function ProjectsSection() {
  const allTechs = projects.flatMap((project) => project.techStack);
  const techStack = Array.from(new Set(allTechs)).sort();

  const {
    activeFilters,
    handleCategoryClick,
    handleTypeClick,
    handleStackClick,
    handleReset,
    filteredProjects,
  } = useProjectFilters(projects);

  return (
    <section id="projects" className="min-h-screen px-4 py-24">
      <div className="mx-auto mb-16 flex max-w-7xl items-end justify-between border-b border-white/10 pb-8">
        <div>
          <h2 className="text-4xl font-light tracking-[0.2em] text-white uppercase">
            Proyectos
          </h2>
          <p className="mt-2 text-xs tracking-widest text-neutral-500 uppercase">
            MOSTRANDO {filteredProjects.length} de {projects.length}
          </p>
        </div>

        <ProjectFilters
          techStack={techStack}
          activeFilters={activeFilters}
          handleCategoryClick={handleCategoryClick}
          handleTypeClick={handleTypeClick}
          handleStackClick={handleStackClick}
          handleReset={handleReset}
        />
      </div>

      <div className="group/projects pointer-events-none mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
