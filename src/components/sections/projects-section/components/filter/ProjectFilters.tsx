"use client";

import { useRef, useState } from "react";
import FilterButton from "./FilterButton";
import FilterPanel from "./FilterPanel";
import { FilterState } from "@/src/interfaces/filters";
import useClickOutside from "@/src/hooks/useClickOutside";

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
	const filterRef = useRef<HTMLDivElement>(null);

	useClickOutside(filterRef, () => {
		setIsFilterOpen(false);
	});

	return (
		<div>
			<div className="flex relative" ref={filterRef}>
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
