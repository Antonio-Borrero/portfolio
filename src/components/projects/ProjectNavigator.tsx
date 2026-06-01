import { projects } from "@/src/data/projects";
import ProjectNavigatorCard from "./ProjectNavigatorCard";

interface Props {
  currentProject: string;
}

export default function ProjectNavigator({ currentProject }: Props) {
  const projectList = projects.filter(
    (project) => project.id !== currentProject,
  );

  return (
    <section className="custom-scrollbar w-full snap-x snap-mandatory overflow-x-auto scroll-smooth pt-5 pb-2">
      <ul className="group/projects flex flex-nowrap gap-3">
        {projectList.map((project) => (
          <li
            key={project.id}
            className="shrink-0 snap-start first:pl-5 last:pr-5"
          >
            <ProjectNavigatorCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
