import {
	PROJECT_CATEGORIES,
	PROJECT_TYPES,
} from "@/src/interfaces/project.interface";

interface Props {
	techStack: string[];
}

export default function FilterPanel({ techStack }: Props) {
	return (
		<div className="absolute top-0 left-full grid grid-cols-4 p-2 pb-5 px-5 border w-max max-w-[50vw] bg-neutral-900 ml-2 rounded-lg z-50 border-neutral-200">
			<div className="flex flex-col text-center border-r pr-4">
				<h3 className="mb-3 text-lg font-bold tracking-wide text-neutral-400">
					Category
				</h3>
				<ul className="flex flex-col gap-2 group">
					{PROJECT_CATEGORIES.map((category) => (
						<li
							key={category}
							className="group-hover:opacity-50 text-neutral-400 hover:opacity-100 hover:text-white transition-opacity duration-200 cursor-pointer"
						>
							<button className="cursor-pointer">{category}</button>
						</li>
					))}
				</ul>
			</div>
			<div className="flex flex-col text-center border-r px-4">
				<h3 className="mb-3 text-lg font-bold tracking-wide text-neutral-400">
					Type
				</h3>
				<ul className="flex flex-col gap-2 group">
					{PROJECT_TYPES.map((type) => (
						<li
							key={type}
							className="group-hover:opacity-50 text-neutral-400 hover:opacity-100 hover:text-white transition-opacity duration-200 cursor-pointer"
						>
							<button className="cursor-pointer">{type}</button>
						</li>
					))}
				</ul>
			</div>
			<div className="flex flex-col col-span-2 pl-4 group">
				<h3 className="mb-3 text-lg font-bold tracking-wide text-neutral-400 self-center">
					Tech stack
				</h3>
				<ul className="columns-3 w-full gap-2">
					{techStack.map((tech) => (
						<li
							key={tech}
							className="group-hover:opacity-50 text-neutral-400 hover:opacity-100 hover:text-white transition-opacity duration-200 cursor-pointer"
						>
							<button className="cursor-pointer">{tech}</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
