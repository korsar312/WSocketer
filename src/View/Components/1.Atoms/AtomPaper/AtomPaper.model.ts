import { IComponent } from "./index";

function AtomPaperModel(props: IComponent) {
	const { children, color } = props;

	return { children, color };
}

export default AtomPaperModel;
