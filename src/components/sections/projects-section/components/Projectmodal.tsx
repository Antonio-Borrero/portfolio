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

  const ArrowIcon = ({ direction }: { direction: "left" | "right" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="h-6 w-6 transition-transform duration-200 hover:scale-110 hover:text-white"
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
    <article className="relative flex min-h-0 w-full flex-col gap-6 text-neutral-200">
      {/* Header */}
      <header className="shrink-0">
        <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
          {project.type} / {project.category}
        </span>
        <h1 className="mt-1 text-2xl font-light tracking-wide text-white uppercase">
          {project.name}
        </h1>
      </header>

      <div className="relative">
        <nav aria-label="Project gallery navigation">
          {/* Navigation */}
          <Link
            href={prevProject.id}
            aria-label={`Ver proyecto anterior: ${prevProject.name}`}
            className="absolute top-1/2 -left-10 z-20 -translate-y-1/2 cursor-pointer"
          >
            <ArrowIcon direction="left" />
          </Link>
          <Link
            href={nextProject.id}
            scroll={false}
            replace={true}
            aria-label={`Ver siguiente proyecto: ${nextProject.name}`}
            className="absolute top-1/2 -right-10 -translate-y-1/2 cursor-pointer"
          >
            <ArrowIcon direction="right" />
          </Link>
        </nav>
        {/* Carousel */}
        <Carousel gallery={project.gallery} />
      </div>

      {/* Details: */}
      <section className="flex min-h-0 grow gap-8 overflow-hidden border-t border-neutral-700/80 pt-5">
        {/* Project Description */}
        <article className="flex-2 space-y-2 overflow-y-auto pr-2">
          <h3 className="font-mono text-xs tracking-wider text-neutral-400 uppercase">
            Sobre el proyecto
          </h3>
          <p className="min-h-12 text-sm leading-relaxed font-light text-neutral-400">
            {project.shortDescription}
          </p>

          <a
            href={`/projects/${project.id}`}
            className="text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-400"
          >
            Leer descripción completa
          </a>

          <TechStack techStack={project.techStack} className="mt-2" />
        </article>
        <aside className="self-end">
          <ProjectLinks
            projectUrl={project.projectUrl}
            githubUrl={project.githubUrl}
          />
        </aside>
      </section>
    </article>
  );
}
