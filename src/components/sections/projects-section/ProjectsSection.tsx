"use client";

import { projects, STACK_LIST } from "@/src/data/projects";
import ProjectFilters from "./components/filter";
import ProjectCard from "./components/ProjectCard";
import useProjectFilters from "@/src/hooks/useProjectFilters";
import { useState } from "react";
import ProjectInterface from "@/src/interfaces/project.interface";
import ModalFrame from "../../shared/ModalFrame";
import ProjectModal from "./components/ProjectModal";

export default function ProjectsSection() {
  const stack = STACK_LIST;

  const [selectedProject, setSelectedProject] =
    useState<ProjectInterface | null>(null);

  const {
    activeFilters,
    handleCategoryClick,
    handleTypeClick,
    handleStackClick,
    handleReset,
    filteredProjects,
  } = useProjectFilters(projects);

  return (
    <section id="projects" className="min-h-screen px-4 pt-32 pb-16">
      <header className="mx-auto mb-16 flex max-w-7xl items-end justify-between border-b border-white/10 pb-8">
        <div>
          <h2 className="text-4xl font-light tracking-[0.2em] text-white uppercase">
            Proyectos
          </h2>
          <p className="mt-2 text-xs tracking-widest text-neutral-500 uppercase">
            MOSTRANDO {filteredProjects.length} de {projects.length}
          </p>
        </div>

        <ProjectFilters
          techStack={stack}
          activeFilters={activeFilters}
          handleCategoryClick={handleCategoryClick}
          handleTypeClick={handleTypeClick}
          handleStackClick={handleStackClick}
          handleReset={handleReset}
        />
      </header>

      <ul className="group/projects pointer-events-none mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <li key={project.id}>
            <ProjectCard
              project={project}
              onOpen={() => setSelectedProject(project)}
            />
          </li>
        ))}
      </ul>

      {selectedProject && (
        <ModalFrame onClose={() => setSelectedProject(null)}>
          <ProjectModal
            project={selectedProject}
            onChangeProject={setSelectedProject}
          />
        </ModalFrame>
      )}
    </section>
  );
}
