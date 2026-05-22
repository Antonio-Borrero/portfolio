import { projects } from "@/src/data/projects";
import ProjectCard from "../sections/projects-section/components/ProjectCard";
import Link from "next/link";

interface Props {
  currentProject: string;
}

export default function ProjectNavigator({ currentProject }: Props) {
  const projectList = projects.filter(
    (project) => project.id !== currentProject,
  );

  return (
    <section>
      <ul className="flex">
        {projectList.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} href={`/projects/${project.id}`} />
          </li>
        ))}
      </ul>
    </section>
  );
}
