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
    <section className="custom-scrollbar w-full scroll-smooth pt-5 pb-2 md:snap-x md:snap-mandatory lg:overflow-x-auto">
      <ul className="group/projects grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:flex xl:flex-row xl:flex-nowrap">
        {projectList.map((project) => (
          <li
            key={project.id}
            className="shrink-0 md:snap-start md:first:pl-5 md:last:pr-5"
          >
            <ProjectNavigatorCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
