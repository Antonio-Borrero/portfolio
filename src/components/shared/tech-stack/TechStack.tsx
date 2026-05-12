import { ICON_MAP } from "./icon-mapper";

export default function TechStack({ stack }: { stack: string[] }) {
	return (
		<div className="absolute right-3 bottom-2 text-end">
			<ul className=" flex flex-col items-end gap-1">
				{stack.map((tech) => (
					<li
						key={tech}
						className="bg-neutral-800/60 backdrop-blur-md p-2 rounded-full border border-white/30 text-xs w-fit group-hover/stack:opacity-100 opacity-0 transition-all duration-300 text-white"
					>
						{ICON_MAP[tech] || tech}
					</li>
				))}
			</ul>
		</div>
	);
}
