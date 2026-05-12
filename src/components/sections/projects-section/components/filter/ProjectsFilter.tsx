"use client";

import { useState } from "react";
import FilterButton from "./FilterButton";
import FilterPanel from "./FilterPanel";

export default function ProjectFilters() {
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	return (
		<div className="flex mb-10 justify-around items-center">
			<div className="flex relative">
				<FilterButton
					isOpen={isFilterOpen}
					onClick={() => setIsFilterOpen(!isFilterOpen)}
				/>
				{isFilterOpen && <FilterPanel />}
			</div>
			<button
				onClick={() => {}}
				className="text-lg font-bold tracking-wide cursor-pointer text-neutral-400"
			>
				<span>Mostrar todos</span>
			</button>
		</div>
	);
}
