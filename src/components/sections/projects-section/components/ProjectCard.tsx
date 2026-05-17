import TechStack from "@/src/components/shared/tech-stack/TechStack";
import ProjectInterface from "@/src/interfaces/project.interface";
import Image from "next/image";

interface Props {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div
      className={`group/card pointer-events-auto relative aspect-video cursor-pointer rounded-2xl border-2 border-neutral-800 opacity-80 transition-all duration-500 ease-out group-hover/projects:scale-98 group-hover/projects:opacity-40 group-hover/projects:blur-[1px] hover:scale-105 hover:border-neutral-600 hover:opacity-100 hover:blur-none`}
    >
      <span className="absolute top-0 left-1/2 z-20 -translate-x-1/2 rounded-md border-white/30 bg-neutral-800/60 p-1 px-2 text-xs tracking-wide whitespace-nowrap text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover/card:-translate-y-3 group-hover/card:opacity-100">
        {project.type} / {project.category}
      </span>
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
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
