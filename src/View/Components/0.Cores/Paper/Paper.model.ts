import { IComponent } from "./index";

function PaperModel(props: IComponent) {
	const { children } = props;

	return { children };
}

export default PaperModel;
