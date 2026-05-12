import {
	PROJECT_CATEGORIES,
	PROJECT_TYPES,
} from "@/src/interfaces/project.interface";

interface Props {
	techStack: string[];
}

export default function FilterPanel({ techStack }: Props) {
	return (
		<div className="grid grid-cols-3 border">
			<div>
				<h3>Category</h3>
				<ul>
					{PROJECT_CATEGORIES.map((category) => (
						<li key={category}>
							<button>{category}</button>
						</li>
					))}
				</ul>
			</div>
			<div>
				<h3>Type</h3>
				<ul>
					{PROJECT_TYPES.map((type) => (
						<li key={type}>
							<button>{type}</button>
						</li>
					))}
				</ul>
			</div>
			<div>
				<h3>Tech stack</h3>
				<ul>
					{techStack.map((tech) => (
						<li key={tech}>
							<button>{tech}</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
