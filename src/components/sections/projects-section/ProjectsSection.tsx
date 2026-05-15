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
		<section id="projects" className="min-h-screen py-24 px-4">
			<div className="max-w-7xl mx-auto mb-16 flex items-end justify-between border-b border-white/10 pb-8">
				<div>
					<h2 className="uppercase text-4xl font-light tracking-[0.2em] text-white">
						Proyectos
					</h2>
					<p className="text-xs text-neutral-500 mt-2 tracking-widest uppercase">
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

			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group/cards pointer-events-none">
				{filteredProjects.map((project) => (
					<ProjectCard project={project} key={project.id} />
				))}
			</div>
		</section>
	);
}
