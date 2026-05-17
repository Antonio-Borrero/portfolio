import { ICON_MAP } from "./icon-mapper";

export default function TechStack({ stack }: { stack: string[] }) {
  return (
    <div className="absolute right-3 bottom-2 text-end">
      <ul className="flex flex-col items-end gap-1">
        {stack.map((tech, index) => (
          <li
            key={tech}
            style={{
              transitionDelay: `${(stack.length - 1 - index) * 50}ms`,
            }}
            className="w-fit rounded-full border border-white/30 bg-neutral-800/60 p-2 text-xs text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover/card:-translate-y-2 group-hover/card:opacity-100"
          >
            {ICON_MAP[tech] || tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
