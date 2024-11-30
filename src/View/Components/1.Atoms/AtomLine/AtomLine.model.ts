import { IComponent } from "./index";
import { useEffect } from "react";

function AtomLineModel(props: IComponent) {
	const { isHorizon, color } = props;

	useEffect(() => {
		console.log("сложная логика");
	}, []);

	return { isHorizon, color };
}

export default AtomLineModel;
