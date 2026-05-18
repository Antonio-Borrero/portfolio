import ProjectInterface from "@/src/interfaces/project.interface";

interface Props {
  project: ProjectInterface;
}

export default function ProjectModal({ project }: Props) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <h1 className="text-2xl font-bold">{project.name}</h1>
    </div>
  );
}
