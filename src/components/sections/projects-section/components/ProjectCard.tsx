import TechStack from "@/src/components/projects/TechStack";
import ProjectInterface from "@/src/interfaces/project.interface";
import Image from "next/image";

interface Props {
  project: ProjectInterface;
  onOpen?: () => void;
  variant?: "grid" | "flex";
}

export default function ProjectCard({ project, onOpen, variant }: Props) {
  return (
    <article
      onClick={onOpen}
      className={`group/card pointer-events-auto relative flex cursor-pointer flex-col items-center rounded-2xl border-2 border-neutral-800 bg-neutral-800/50 p-6 opacity-80 transition-all duration-500 ease-out group-hover/projects:scale-98 group-hover/projects:opacity-40 group-hover/projects:blur-[1px] hover:border-neutral-600 hover:opacity-100 hover:blur-none`}
    >
      <span className="absolute top-0 left-1/2 z-20 -translate-x-1/2 rounded-md border border-neutral-600 bg-neutral-800/60 p-1 px-2 text-xs tracking-wide whitespace-nowrap text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover/card:-translate-y-3 group-hover/card:opacity-100">
        {project.type} / {project.category}
      </span>
      <figure className="relative h-48 w-full overflow-hidden rounded-xl border border-neutral-800/50 bg-neutral-950 shadow-2xl transition-all duration-500 ease-out group-hover/card:scale-102 group-hover/card:border-neutral-700/50">
        <Image
          src={project.mainImage}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover opacity-90 transition-opacity duration-500 group-hover/card:scale-102 group-hover/card:opacity-100"
        />
      </figure>
      <div className="absolute right-3 bottom-2 text-end opacity-0 transition-all duration-500 group-hover/card:-translate-y-2 group-hover/card:opacity-100">
        <TechStack techStack={project.techStack} className={"flex-col"} />
      </div>
      <h3 className="mt-4 text-lg font-light tracking-wider text-neutral-400 uppercase transition-all duration-500 ease-out group-hover/card:text-white">
        {project.name}
      </h3>
    </article>
  );
}
