import { projects } from "@/src/data/projects";
import Carousel from "@/src/components/projects/Carousel";
import { notFound } from "next/navigation";
import TechStack from "@/src/components/projects/TechStack";
import ProjectIdentity from "@/src/components/projects/ProjectIdentity";
import ProjectLinks from "@/src/components/projects/ProjectLinks";
import ProjectDetails from "@/src/components/projects/ProjectDetails";
import ProjectNavigator from "@/src/components/projects/ProjectNavigator";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

interface Props {
  params: {
    id: string;
  };
}

export default async function ProjectPage(props: Props) {
  const { id } = await props.params;

  const project = projects.find((project) => project.id == id) ?? notFound();

  return (
    <div className="mx-auto mb-16 max-w-7xl px-4 pt-32 pb-8">
      <header className="mb-6 flex flex-col justify-between gap-6 border-b border-white/10 pb-6 md:mb-12 md:flex-row md:items-end md:pb-8">
        <div className="space-y-2">
          <ProjectIdentity
            category={project.category}
            type={project.type}
            name={project.name}
          />
          <TechStack techStack={project.techStack} className="pt-2" />
        </div>

        <ProjectLinks
          projectUrl={project.projectUrl}
          githubUrl={project.githubUrl}
          variant="responsive"
        />
      </header>

      <section className="aspect-video shrink-0 border-b border-white/10 pb-6 md:aspect-auto md:pb-12">
        <Carousel gallery={project.gallery} />
      </section>

      <section className="mt-6 md:mt-12">
        <ProjectDetails
          longDescription={project.longDescription}
          roadmap={project.roadmap}
        />
      </section>

      <section className="mt-20 border-t border-white/10 pt-12 md:mt-40">
        <h3 className="text-lg font-light tracking-widest text-neutral-400 uppercase">
          Otros proyectos
        </h3>
        <div className="">
          <ProjectNavigator currentProject={project.id} />
        </div>
      </section>
    </div>
  );
}
