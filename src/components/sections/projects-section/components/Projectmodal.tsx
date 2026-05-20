import Carousel from "@/src/components/projects/Carousel";
import ProjectInterface from "@/src/interfaces/project.interface";
import Link from "next/link";
import { projects } from "@/src/data/projects";
import TechStack from "@/src/components/projects/TechStack";
import ProjectLinks from "@/src/components/projects/ProjectLinks";

interface Props {
  project: ProjectInterface;
}
export default function ProjectModal({ project }: Props) {
  const currentIndex = projects.findIndex((p) => p.id === project.id);

  const prevProject =
    projects[currentIndex - 1] || projects[projects.length - 1];
  const nextProject = projects[currentIndex + 1] || projects[0];

  return (
    <div className="relative flex h-full min-h-0 w-full flex-col gap-6 text-neutral-200">
      {/* Header */}
      <header className="shrink-0">
        <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
          {project.type} / {project.category}
        </span>
        <h1 className="mt-1 text-2xl font-light tracking-wide text-white uppercase">
          {project.name}
        </h1>
      </header>

      <nav className="relative" aria-label="Project navigation">
        {/* Navigation */}
        <Link
          href={prevProject.id}
          scroll={false}
          replace={true}
          className="absolute top-1/2 -left-10 z-20 -translate-y-1/2 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="h-10 w-10 transition-transform duration-200 hover:scale-110"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </Link>
        <Link
          href={nextProject.id}
          scroll={false}
          replace={true}
          className="absolute top-1/2 -right-10 -translate-y-1/2 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="h-10 w-10 transition-transform duration-200 hover:scale-110"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>

        {/* Carousel */}
        <Carousel gallery={project.gallery} />
      </nav>

      {/* Details: */}
      <section className="flex min-h-0 grow gap-8 overflow-hidden border-t border-neutral-700/80 pt-5">
        {/* Project Description */}
        <div className="flex-2 space-y-2 overflow-y-auto pr-2">
          <h3 className="font-mono text-xs tracking-wider text-neutral-400 uppercase">
            Sobre el proyecto
          </h3>
          <p className="text-sm leading-relaxed font-light text-neutral-400">
            {project.shortDescription}
          </p>

          <div>
            <a
              href={`/projects/${project.id}`}
              className="text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-400"
            >
              Leer descripción completa
            </a>
          </div>

          <TechStack techStack={project.techStack} />
        </div>

        <ProjectLinks
          projectUrl={project.projectUrl}
          githubUrl={project.githubUrl}
        />
      </section>
    </div>
  );
}
