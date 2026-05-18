import ModalFrame from "@/src/components/shared/ModalFrame";
import { projects } from "@/src/data/projects";
import { notFound } from "next/navigation";
import ProjectModal from "@/src/components/sections/projects-section/components/ProjectModal";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProjectsModal(props: Props) {
  const { id } = await props.params;

  const project = projects.find((project) => project.id == id) ?? notFound();

  return (
    <div>
      {project && (
        <ModalFrame>
          <ProjectModal project={project} />
        </ModalFrame>
      )}
    </div>
  );
}
