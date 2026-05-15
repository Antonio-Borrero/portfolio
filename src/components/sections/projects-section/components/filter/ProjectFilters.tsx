"use client";

import { useState } from "react";
import FilterButton from "./FilterButton";
import FilterPanel from "./FilterPanel";
import { FilterState } from "@/src/interfaces/filters";

interface Props {
	techStack: string[];
	activeFilters: FilterState;
	handleCategoryClick: (category: string) => void;
	handleTypeClick: (type: string) => void;
	handleStackClick: (stack: string) => void;
	handleReset: () => void;
}

export default function ProjectFilters({
	techStack,
	activeFilters,
	handleCategoryClick,
	handleTypeClick,
	handleStackClick,
	handleReset,
}: Props) {
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	return (
		<div className="flex mb-10 justify-start items-center">
			<div className="flex relative">
				<FilterButton
					isOpen={isFilterOpen}
					onClick={() => setIsFilterOpen(!isFilterOpen)}
				/>
				{isFilterOpen && (
					<FilterPanel
						techStack={techStack}
						activeFilters={activeFilters}
						handleCategoryClick={handleCategoryClick}
						handleTypeClick={handleTypeClick}
						handleStackClick={handleStackClick}
						handleReset={handleReset}
					/>
				)}
			</div>
		</div>
	);
}
