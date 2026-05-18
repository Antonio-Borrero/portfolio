interface Props {
  children: React.ReactNode;
}

import { ICON_MAP } from "@/src/constants/icon-mapper";
import ProjectInterface from "@/src/interfaces/project.interface";
interface Props {
  project: ProjectInterface;
}
export default function ProjectModal({ project }: Props) {
  return (
    <div className="relative flex h-full min-h-0 w-full flex-col gap-6 text-neutral-200">
      {/* Header */}
      <div className="shrink-0">
        <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
          {project.type} / {project.category}
        </span>
        <h1 className="mt-1 text-2xl font-light tracking-wide text-white uppercase">
          {project.name}
        </h1>
      </div>

      {/* Carrousel */}
      <div className="relative h-[50vh] w-full shrink-0 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
        {/* Images */}
      </div>

      {/* Details: */}
      <div className="flex min-h-0 grow gap-8 overflow-hidden border-t border-neutral-700/80 pt-5">
        {/* Project Description */}
        <div className="flex-2 space-y-2 overflow-y-auto pr-2">
          <h3 className="font-mono text-xs tracking-wider text-neutral-400 uppercase">
            Sobre el proyecto
          </h3>
          <p className="text-sm leading-relaxed font-light text-neutral-400">
            {project.shortDescription}
          </p>

          <ul className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="w-fit rounded-full border border-white/30 bg-neutral-800/60 p-2 text-xs text-white opacity-80 backdrop-blur-md"
              >
                {ICON_MAP[tech] || tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="flex h-full flex-1 flex-col justify-end">
          <div className="flex flex-col gap-2 pt-4">
            {project.projectUrl ? (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-lg border border-neutral-800 bg-neutral-700/30 py-2 text-xs font-medium text-neutral-200 backdrop-blur-md transition-colors hover:bg-neutral-800 hover:text-white"
              >
                Visitar Sitio
              </a>
            ) : (
              <span className="flex w-full cursor-not-allowed items-center justify-center rounded-lg border border-neutral-800/40 bg-neutral-950/20 py-2 text-xs font-medium text-neutral-600">
                Solo en entorno local
              </span>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/50 py-2 text-xs font-medium text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
              >
                Repositorio de GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
