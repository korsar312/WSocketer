import { IComponent, TScrollAvailableEl } from "./index";
import { Ref } from "react";

function ScrollModel(props: IComponent & { ref: Ref<HTMLElement> } & { Tag: TScrollAvailableEl }) {
	const { children, extStyle, extStyleScroll, noScrollBar, Tag, ...htmlRest } = props;

	return { children, extStyle, extStyleScroll, noScrollBar, Tag, htmlRest };
}

export default ScrollModel;
