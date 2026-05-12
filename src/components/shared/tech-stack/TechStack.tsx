import { ICON_MAP } from "./icon-mapper";

export default function TechStack({ stack }: { stack: string[] }) {
	return (
		<div>
			<ul className="absolute right-3 bottom-2 text-end">
				{stack.map((tech) => (
					<li>{ICON_MAP[tech]}</li>
				))}
			</ul>
		</div>
	);
}
