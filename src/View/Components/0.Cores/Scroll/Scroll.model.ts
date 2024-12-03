import { IComponent } from "./index";
import { ReactHTML } from "react";

function ScrollModel(props: IComponent & { Tag: keyof ReactHTML }) {
	const { children, extStyle, extStyleScroll, Tag } = props;

	return { children, extStyle, extStyleScroll, Tag };
}

export default ScrollModel;
