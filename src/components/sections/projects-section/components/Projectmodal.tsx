import Carousel from "@/src/components/projects/Carousel";
import ProjectInterface from "@/src/interfaces/project.interface";
import { projects } from "@/src/data/projects";
import TechStack from "@/src/components/projects/TechStack";
import ProjectLinks from "@/src/components/projects/ProjectLinks";
import Link from "next/link";

interface Props {
  project: ProjectInterface;
  onChangeProject: (project: ProjectInterface) => void;
}
export default function ProjectModal({ project, onChangeProject }: Props) {
  const currentIndex = projects.findIndex((p) => p.id === project.id);

  const prevProject =
    projects[currentIndex - 1] || projects[projects.length - 1];
  const nextProject = projects[currentIndex + 1] || projects[0];

  const ArrowIcon = ({ direction }: { direction: "left" | "right" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="h-6 w-6 transition-transform duration-200 hover:scale-110 hover:text-white xl:h-12 xl:w-12"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={
          direction === "left"
            ? "M15.75 19.5L8.25 12l7.5-7.5"
            : "M8.25 4.5l7.5 7.5-7.5 7.5"
        }
      />
    </svg>
  );

  return (
    <article className="relative flex w-full flex-col gap-6 overflow-x-hidden overflow-y-auto px-4 text-neutral-200 xl:overflow-y-hidden xl:px-6">
      {/* Header */}
      <header className="shrink-0">
        <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
          {project.type} / {project.category}
        </span>
        <div className="mt-1 flex min-h-20 items-center sm:min-h-0">
          <h1 className="text-2xl font-light tracking-wide text-white uppercase">
            {project.name}
          </h1>
        </div>
      </header>

      <div className="relative mb-3 aspect-video max-w-5xl shrink-0 md:aspect-auto">
        <nav aria-label="Project gallery navigation">
          {/* Navigation */}
          <button
            onClick={() => onChangeProject(prevProject)}
            aria-label={`Ver proyecto anterior: ${prevProject.name}`}
            className="absolute top-full left-1/2 z-20 -translate-x-10 translate-y-1 cursor-pointer xl:top-1/2 xl:left-0 xl:-translate-y-1/2"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            onClick={() => onChangeProject(nextProject)}
            aria-label={`Ver siguiente proyecto: ${nextProject.name}`}
            className="absolute top-full right-1/2 z-20 translate-x-10 translate-y-1 cursor-pointer xl:top-1/2 xl:right-0 xl:-translate-y-1/2"
          >
            <ArrowIcon direction="right" />
          </button>
        </nav>
        {/* Carousel */}
        <Carousel gallery={project.gallery} />
      </div>

      {/* Details: */}
      <section className="flex grow flex-col gap-4 border-t border-neutral-700/80 pt-5 sm:flex-row sm:gap-8">
        {/* Project Description */}
        <article className="flex-2 space-y-2 pr-2">
          <h3 className="font-mono text-xs tracking-wider text-neutral-400 uppercase">
            Sobre el proyecto
          </h3>
          <p className="line-clamp-3 min-h-12 text-sm leading-relaxed font-light text-neutral-400">
            {project.shortDescription}
          </p>

          <Link
            href={`/projects/${project.id}`}
            className="text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-400"
          >
            Leer descripción completa
          </Link>

          <TechStack techStack={project.techStack} className="mt-2 flex-wrap" />
        </article>
        <aside className="self-start">
          <ProjectLinks
            projectUrl={project.projectUrl}
            githubUrl={project.githubUrl}
          />
        </aside>
      </section>
    </article>
  );
}
