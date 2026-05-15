import TechStack from "@/src/components/shared/tech-stack/TechStack";
import ProjectInterface from "@/src/interfaces/project.interface";
import Image from "next/image";

interface Props {
	project: ProjectInterface;
}

export default function ProjectCard({ project }: Props) {
	return (
		<div className="relative border-2 hover:scale-105 rounded-2xl aspect-video group/stack opacity-70 group-hover/cards:opacity-40 hover:opacity-100 pointer-events-auto">
			<span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap z-20 bg-neutral-800/80 backdrop-blur-md p-1 px-2 rounded-md border border-white/30 text-xs tracking-wide w-fit text-white">
				{project.type} / {project.category}
			</span>
			<div className="absolute inset-0 rounded-2xl overflow-hidden">
				<Image
					src={project.mainImage}
					alt={project.name}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-cover"
				/>
			</div>
			<TechStack stack={project.techStack} />
		</div>
	);
}
