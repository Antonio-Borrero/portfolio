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
    <>
      {variant === "horizontal" ? (
        <ul className={clsx("flex items-center gap-2", className)}>
          {techStack.map((tech) => (
            <li
              key={tech}
              className="flex w-fit items-center gap-2 rounded-full border border-white/30 bg-neutral-800/60 p-2 text-xs text-white opacity-80 backdrop-blur-md"
            >
              {ICON_MAP[tech]}
              {tech}
            </li>
          ))}
        </ul>
      ) : (
        <ul className={clsx("flex flex-col items-center gap-2", className)}>
          {techStack.map((tech) => (
            <li
              key={tech}
              className="group relative w-fit rounded-full border border-white/30 bg-neutral-800/60 p-2 text-xs text-white opacity-80 backdrop-blur-md hover:scale-120"
            >
              {ICON_MAP[tech] || tech}
              <span className="pointer-events-none absolute top-1/2 left-full translate-x-2 -translate-y-1/2 rounded-xl border border-white/50 bg-neutral-800/80 p-2 whitespace-nowrap opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                {tech}
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
