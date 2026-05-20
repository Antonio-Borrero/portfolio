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
    <aside className="absolute top-full right-0 z-30 mt-2 grid w-max max-w-[50vw] grid-cols-4 rounded-xl border border-white/20 bg-neutral-950/80 p-2 px-5 pb-5 shadow-2xl backdrop-blur-lg">
      <div className="col-span-4 mb-1 flex items-center justify-end">
        <button
          onClick={handleReset}
          className="cursor-pointer text-xs tracking-widest text-neutral-400 uppercase transition-colors duration-200 hover:text-white"
        >
          Limpiar filtros
        </button>
      </div>
      <div className="flex flex-col border-r pr-4 text-center">
        <h3 className="mb-3 font-bold tracking-wide text-neutral-400 uppercase">
          Category
        </h3>
        <ul className="flex flex-col gap-2">
          {PROJECT_CATEGORIES.map((category) => {
            const isActive = activeFilters.category === category;
            return (
              <li key={category}>
                <button
                  className={`cursor-pointer rounded-md border px-2 py-1 text-xs transition-all duration-200 ${
                    isActive
                      ? "border-white/10 bg-white/10 text-white"
                      : "border-transparent bg-transparent text-neutral-400 hover:text-neutral-200"
                  }`}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col border-r px-4 text-center">
        <h3 className="mb-3 font-bold tracking-wide text-neutral-400 uppercase">
          TYPE
        </h3>
        <ul className="flex flex-col gap-2">
          {PROJECT_TYPES.map((type) => {
            const isActive = activeFilters.type === type;
            return (
              <li key={type}>
                <button
                  className={`cursor-pointer rounded-md border px-2 py-1 text-xs transition-all duration-200 ${
                    isActive
                      ? "border-white/10 bg-white/10 text-white"
                      : "border-transparent bg-transparent text-neutral-400 hover:text-neutral-200"
                  }`}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => handleTypeClick(type)}
                >
                  {type}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-span-2 flex flex-col pl-4">
        <h3 className="mb-3 self-center font-bold tracking-wide text-neutral-400 uppercase">
          TECH STACK
        </h3>
        <ul className="grid grid-cols-3">
          {techStack.map((tech) => {
            const isActive = activeFilters.techStack.includes(tech);
            return (
              <li key={tech}>
                <button
                  onClick={() => handleStackClick(tech)}
                  type="button"
                  aria-pressed={isActive}
                  className={`mt-1 cursor-pointer rounded-md border px-2 py-1 text-xs transition-all duration-200 ${
                    isActive
                      ? "border-white/10 bg-white/10 text-white"
                      : "border-transparent bg-transparent text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  {tech}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
