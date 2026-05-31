import { ICON_MAP } from "@/src/constants/icon-mapper";
import clsx from "clsx";

interface Props {
  techStack: string[];
  className?: string;
  variant?: "vertical" | "horizontal";
}

export default function TechStack({
  techStack,
  className,
  variant = "horizontal",
}: Props) {
  return (
    <ul
      className={clsx(
        "flex items-center gap-2",
        className,
        variant === "vertical" ? "flex-col" : "",
      )}
    >
      {techStack.map((tech) => (
        <li
          key={tech}
          className="group relative w-fit rounded-full border border-white/30 bg-neutral-800/60 p-2 text-xs text-white opacity-80 backdrop-blur-md hover:scale-120"
        >
          {ICON_MAP[tech] || tech}
          <span
            className={`pointer-events-none absolute rounded-2xl border border-white/50 bg-neutral-800/80 p-2 whitespace-nowrap opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 ${variant === "vertical" ? "top-1/2 right-full -translate-x-2 -translate-y-1/2" : "top-full left-1/2 -translate-x-1/2 translate-y-2"}`}
          >
            {tech}
          </span>
        </li>
      ))}
    </ul>
  );
}
