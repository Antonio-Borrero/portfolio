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
		<section id="projects" className="min-h-screen py-20">
			<h2 className="uppercase text-3xl font-bold tracking-wider text-white mb-10 text-center">
				Proyectos
			</h2>
			<div className="max-w-7xl mx-auto">
				<ProjectFilters
					techStack={techStack}
					activeFilters={activeFilters}
					handleCategoryClick={handleCategoryClick}
					handleTypeClick={handleTypeClick}
					handleStackClick={handleStackClick}
					handleReset={handleReset}
				/>
			</div>
			<div className="max-w-7xl mx-auto grid grid-cols-3 gap-5 gap-y-7 group/cards">
				{filteredProjects.map((project) => (
					<ProjectCard project={project} key={project.id} />
				))}
			</div>
		</section>
	);
}
