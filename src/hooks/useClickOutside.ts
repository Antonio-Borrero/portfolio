import { RefObject, useEffect } from "react";

export default function useClickOutside(
	ref: RefObject<HTMLElement | null>,
	callback: () => void,
) {
	useEffect(() => {
		const onClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback();
			}
		};
		document.addEventListener("mousedown", onClickOutside);

		return () => {
			document.removeEventListener("mousedown", onClickOutside);
		};
	}, [ref, callback]);
}
