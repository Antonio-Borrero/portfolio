import { ICON_MAP } from "@/src/constants/icon-mapper";
import clsx from "clsx";

interface Props {
  techStack: string[];
  className?: string;
}

export default function TechStack({ techStack, className }: Props) {
  return (
    <ul className={clsx("flex items-center gap-2", className)}>
      {techStack.map((tech) => (
        <li
          key={tech}
          className={
            "w-fit rounded-full border border-white/30 bg-neutral-800/60 p-2 text-xs text-white backdrop-blur-md"
          }
        >
          {ICON_MAP[tech] || tech}
        </li>
      ))}
    </ul>
  );
}
