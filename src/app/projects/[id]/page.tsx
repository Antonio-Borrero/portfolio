import { projects } from "@/src/data/projects";
import Carousel from "@/src/components/projects/Carousel";
import { notFound } from "next/navigation";
import TechStack from "@/src/components/projects/TechStack";
import ProjectIdentity from "@/src/components/projects/ProjectIdentity";
import ProjectLinks from "@/src/components/projects/ProjectLinks";
import ProjectDetails from "@/src/components/projects/ProjectDetails";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProjectPage(props: Props) {
  const { id } = await props.params;

  const project = projects.find((project) => project.id == id) ?? notFound();

  return (
    <div className="mx-auto mb-16 max-w-7xl pt-32 pb-8">
      <header className="mb-12 flex items-end justify-between gap-6 border-b border-white/10 pb-8">
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
          variant="horizontal"
        />
      </header>

      <section className="relative border-b border-white/10 pb-12">
        <Carousel gallery={project.gallery} />
      </section>

      <section className="mt-12">
        <ProjectDetails
          longDescription={project.longDescription}
          roadmap={project.roadmap}
        />
      </section>
    </div>
  );
}
