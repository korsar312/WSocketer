import { IComponent } from "./index";
import { ReactHTML } from "react";

function ScrollModel(props: IComponent & { Tag: keyof ReactHTML }) {
	const { children, extStyle, extStyleScroll, noScrollBar, Tag } = props;

	return { children, extStyle, extStyleScroll, noScrollBar, Tag };
}

export default ScrollModel;
