interface Props {
	isOpen: boolean;
	onClick: () => void;
}

export default function FilterButton({ isOpen, onClick }: Props) {
	return (
		<div
			className="flex border p-2 px-5 rounded-lg cursor-pointer items-center gap-3 text-lg tracking-wide text-neutral-400"
			onClick={() => onClick()}
		>
			<button type="button">Filtrar:</button>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				className={`${isOpen ? "rotate-180" : "rotate-0"}`}
			>
				<path
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="m10 17l5-5l-5-5"
				/>
			</svg>
		</div>
	);
}
