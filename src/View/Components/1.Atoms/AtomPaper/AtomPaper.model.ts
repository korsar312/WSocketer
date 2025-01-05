import { IComponent } from "./index";

function AtomPaperModel(props: IComponent) {
	const { children, color, extStyle, isFull, onClick } = props;

	return { children, color, extStyle, isFull, onClick };
}

export default AtomPaperModel;
