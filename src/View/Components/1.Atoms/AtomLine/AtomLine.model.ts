import { IComponent } from "./index";

function AtomLineModel(props: IComponent) {
	const { isHorizon, color } = props;

	return { isHorizon, color };
}

export default AtomLineModel;
