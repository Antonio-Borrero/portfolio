"use client";

import { projects } from "@/src/data/projects";
import ProjectCard from "./components/ProjectCard";
import ProjectFilters from "./components/filter/ProjectsFilter";
import { useState } from "react";

export default function ProjectsSection() {
	const [activeFilter, setActiveFilter] = useState("Todos");

	const filteredProjects =
		activeFilter === "Todos"
			? projects
			: projects.filter((project) => project.category === activeFilter);

	return (
		<section id="projects" className="min-h-screen py-20">
			<h2 className="uppercase text-3xl font-bold tracking-wider text-white mb-10 text-center">
				Proyectos
			</h2>
			<div className="max-w-7xl mx-auto">
				<ProjectFilters
					activeFilter={activeFilter}
					onFilterChange={setActiveFilter}
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
