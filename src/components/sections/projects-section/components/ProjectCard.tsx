import TechStack from "@/src/components/shared/tech-stack/TechStack";
import ProjectInterface from "@/src/interfaces/project.interface";
import Image from "next/image";

interface Props {
	project: ProjectInterface;
}

export default function ProjectCard({ project }: Props) {
	return (
		<div className="relative border-2 hover:scale-105 rounded-2xl aspect-video overflow-hidden">
			<Image
				src={project.mainImage}
				alt={project.name}
				fill
				className="object-cover"
			/>
			<TechStack stack={project.techStack} />
		</div>
	);
}
