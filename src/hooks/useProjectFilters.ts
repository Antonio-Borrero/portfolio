import { useMemo, useState } from "react";
import { FilterState } from "../interfaces/filters";
import ProjectInterface from "../interfaces/project.interface";

export default function useProjectFilters(projects: ProjectInterface[]) {
	// -- ESTADO DE FILTROS --

	const [activeFilters, setActiveFilters] = useState<FilterState>({
		category: "All",
		type: "All",
		techStack: [],
	});

	// -- HANDLERS: Cambian los filtros--

	const handleCategoryClick = (category: string) => {
		const newCategoryFilter =
			activeFilters.category === category ? "All" : category;
		setActiveFilters((prev) => ({
			...prev,
			category: newCategoryFilter,
		}));
	};

	const handleStackClick = (stack: string) => {
		const currentStackFilter = activeFilters.techStack;

		const newStackFilter = currentStackFilter.includes(stack)
			? currentStackFilter.filter((item) => item !== stack)
			: [...currentStackFilter, stack];
		setActiveFilters((prev) => ({
			...prev,
			techStack: newStackFilter,
		}));
	};

	const handleTypeClick = (type: string) => {
		const newTypeFilter = activeFilters.type === type ? "All" : type;
		setActiveFilters((prev) => ({
			...prev,
			type: newTypeFilter,
		}));
	};

	const handleReset = () => {
		setActiveFilters({
			category: "All",
			type: "All",
			techStack: [],
		});
	};

	// -- FILTRO --

	const filteredProjects = useMemo(() => {
		return projects.filter((project) => {
			const matchCategory =
				activeFilters.category === "All" ||
				activeFilters.category === project.category;
			const matchType =
				activeFilters.type === "All" || activeFilters.type === project.type;
			const mathTechStack =
				activeFilters.techStack.length === 0 ||
				activeFilters.techStack.every((stack) =>
					project.techStack.includes(stack),
				);
			return matchCategory && matchType && mathTechStack;
		});
	}, [activeFilters, projects]);

	return {
		activeFilters,
		handleCategoryClick,
		handleTypeClick,
		handleStackClick,
		handleReset,
		filteredProjects,
	};
}
