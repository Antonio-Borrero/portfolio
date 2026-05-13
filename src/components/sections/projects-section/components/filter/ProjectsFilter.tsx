"use client";

import { useState } from "react";
import FilterButton from "./FilterButton";
import FilterPanel from "./FilterPanel";

interface Props {
	techStack: string[];
}

export default function ProjectFilters({ techStack }: Props) {
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	return (
		<div className="flex mb-10 justify-around items-center">
			<div className="flex relative">
				<FilterButton
					isOpen={isFilterOpen}
					onClick={() => setIsFilterOpen(!isFilterOpen)}
				/>
				{isFilterOpen && <FilterPanel techStack={techStack} />}
			</div>
			<button
				onClick={() => {}}
				className="text-lg font-bold tracking-wide cursor-pointer text-neutral-400 hover:text-neutral-200 transition-colors duration-200"
			>
				<span>Mostrar todos</span>
			</button>
		</div>
	);
}
