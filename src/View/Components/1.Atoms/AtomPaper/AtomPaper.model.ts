import { IComponent } from "./index";

function AtomPaperModel(props: IComponent) {
	const { children, color, extStyle, isFull } = props;

	return { children, color, extStyle, isFull };
}

export default AtomPaperModel;
