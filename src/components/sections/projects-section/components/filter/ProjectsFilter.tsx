"use client";

import { useState } from "react";

interface Props {
	activeFilter: string;
	onFilterChange: (category: string) => void;
}

export default function ProjectFilters({
	activeFilter,
	onFilterChange,
}: Props) {
	const categories = ["Frontend", "Backend", "Full Stack"];

	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const handleFilter = (category: string) => {
		onFilterChange(category);
		setIsFilterOpen(false);
	};

	return (
		<div className="flex mb-10 justify-around items-center">
			<div className="flex relative">
				<button
					onClick={() => setIsFilterOpen(!isFilterOpen)}
					className="border p-2 px-5 rounded-lg cursor-pointer"
				>
					Filtrar:
				</button>
				{isFilterOpen && (
					<ul className="absolute left-full ml-1 flex whitespace-nowrap p-2 px-5 gap-5 border rounded-lg bg-neutral-900">
						{categories.map((category) => (
							<li key={category}>
								<button
									onClick={() => handleFilter(category)}
									className="group/filters group:hover/filters:opacity-20 opacity-80 cursor-pointer hover:text-white"
								>
									{category}
								</button>
							</li>
						))}
					</ul>
				)}
			</div>
			<button
				onClick={() => onFilterChange("Todos")}
				className="text-lg font-bold tracking-wide cursor-pointer text-neutral-400"
			>
				<span>Mostrar todos</span>
			</button>
		</div>
	);
}
