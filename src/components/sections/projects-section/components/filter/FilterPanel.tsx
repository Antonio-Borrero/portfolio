import { FilterState } from "@/src/interfaces/filters";
import {
	PROJECT_CATEGORIES,
	PROJECT_TYPES,
} from "@/src/interfaces/project.interface";

interface Props {
	techStack: string[];
	activeFilters: FilterState;
	handleCategoryClick: (category: string) => void;
	handleTypeClick: (type: string) => void;
	handleStackClick: (stack: string) => void;
	handleReset: () => void;
}

export default function FilterPanel({
	techStack,
	activeFilters,
	handleCategoryClick,
	handleTypeClick,
	handleStackClick,
	handleReset,
}: Props) {
	return (
		<div className="absolute top-0 left-full grid grid-cols-4 p-2 pb-5 px-5 border w-max max-w-[50vw] bg-neutral-900 ml-2 rounded-lg z-50 border-neutral-300">
			<div className="col-span-4 flex justify-end items-center mb-1">
				<button
					onClick={handleReset}
					className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer"
				>
					Limpiar filtros
				</button>
			</div>
			<div className="flex flex-col text-center border-r pr-4">
				<h3 className="mb-3 uppercase font-bold tracking-wide text-neutral-400">
					Category
				</h3>
				<ul className="flex flex-col gap-2 group">
					{PROJECT_CATEGORIES.map((category) => {
						const isActive = activeFilters.category === category;
						return (
							<li key={category}>
								<button
									className={`text-sm transition-colors duration-200 cursor-pointer ${
										isActive
											? "text-white font-bold"
											: "text-neutral-400 hover:text-neutral-200"
									}`}
									onClick={() => handleCategoryClick(category)}
								>
									{category}
								</button>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="flex flex-col text-center border-r px-4">
				<h3 className="mb-3 uppercase font-bold tracking-wide text-neutral-400">
					TYPE
				</h3>
				<ul className="flex flex-col gap-2 group">
					{PROJECT_TYPES.map((type) => {
						const isActive = activeFilters.type === type;
						return (
							<li key={type}>
								<button
									className={`text-sm transition-colors duration-200 cursor-pointer ${
										isActive
											? "text-white font-bold"
											: "text-neutral-400 hover:text-neutral-200"
									}`}
									onClick={() => handleTypeClick(type)}
								>
									{type}
								</button>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="flex flex-col col-span-2 pl-4 group">
				<h3 className="mb-3 uppercase font-bold tracking-wide text-neutral-400 self-center">
					TECH STACK
				</h3>
				<ul className="columns-3 w-full gap-2">
					{techStack.map((tech) => {
						const isActive = activeFilters.techStack.includes(tech);
						return (
							<li key={tech}>
								<button
									className={`text-xs transition-colors duration-200 cursor-pointer ${
										isActive
											? "text-white font-bold"
											: "text-neutral-400 hover:text-neutral-200"
									}`}
									onClick={() => handleStackClick(tech)}
								>
									{tech}
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
