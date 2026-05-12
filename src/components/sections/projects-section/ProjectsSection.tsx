import { projects } from "@/src/data/projects";
import ProjectCard from "./components/ProjectCard";

export default function () {
	return (
		<section id="projects" className="min-h-screen py-20">
			<h2 className="uppercase text-3xl font-bold tracking-wider text-white mb-5 text-center">
				Proyectos
			</h2>
			<div className="max-w-7xl mx-auto grid grid-cols-3 gap-5 gap-y-7 group/cards">
				{projects.map((project) => (
					<ProjectCard project={project} key={project.id} />
				))}
			</div>
		</section>
	);
}
