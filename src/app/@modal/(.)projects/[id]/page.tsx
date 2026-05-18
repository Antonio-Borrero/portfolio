import ModalFrame from "@/src/components/shared/ModalFrame";
import { projects } from "@/src/data/projects";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProjectModal(props: Props) {
  const { id } = await props.params;

  const project = projects.find((project) => project.id == id) ?? notFound();
  return (
    <div>
      {project && (
        <ModalFrame>
          <h1>{project.name}</h1>
        </ModalFrame>
      )}
    </div>
  );
}
