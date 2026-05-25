import ProjectInterface from "@/src/interfaces/project.interface";
import Image from "next/image";
import Link from "next/link";

interface Props {
  project: ProjectInterface;
}

export default function ProjectNavigatorCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group/card flex flex-col items-center gap-3"
    >
      <figure className="relative h-28 w-full overflow-hidden rounded-2xl border-2 border-neutral-800/50 bg-neutral-800 opacity-60 transition-all duration-500 ease-out group-hover/card:z-20 group-hover/card:scale-120 group-hover/card:border-neutral-600 group-hover/card:opacity-100! group-hover/card:blur-none! group-hover/projects:opacity-40 group-hover/projects:blur-[1px]">
        <Image
          src={project.mainImage}
          alt={project.name}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
        />
      </figure>

      <h3 className="pointer-events-none -translate-y-1 text-sm tracking-wider whitespace-nowrap text-white opacity-0 backdrop-blur-md transition-all duration-500 ease-out group-hover/card:z-20 group-hover/card:translate-y-0 group-hover/card:scale-120 group-hover/card:opacity-100!">
        {project.name}
      </h3>
    </Link>
  );
}
