import { IComponent } from "./index";

function AtomPaperModel(props: IComponent) {
	const { children, color, extStyle } = props;

	return { children, color, extStyle };
}

export default AtomPaperModel;
