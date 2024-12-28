import { IComponent } from "./index";
import { useEffect, useRef } from "react";

function SubstanceMessagePlaceModel(props: IComponent) {
	const { messages } = props;

	const listRef = useRef<HTMLDivElement>(null);
	const isBotScrollRef = useRef<boolean>(isBotScroll());

	useEffect(() => {
		scrollController();
	}, [messages]);

	function scrollController() {
		if (!listRef.current) return;
		isBotScrollRef.current && listRef.current.scrollTo({ top: getMaxHeightContent(), behavior: "smooth" });
	}

	function isBotScroll() {
		if (!listRef.current) return false;
		return listRef.current.scrollTop >= getMaxHeightContent();
	}

	function handleScroll() {
		isBotScrollRef.current = isBotScroll();
	}

	function getMaxHeightContent() {
		if (!listRef.current) return 0;
		return listRef.current.scrollHeight - listRef.current.clientHeight;
	}

	return { messages, listRef, handleScroll };
}

export default SubstanceMessagePlaceModel;
