import { FC } from "react";
import Model from "./AtomLine.model";
import View from "./Layout/AtomLine_Public";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent {
	color: StylesInterface.EColor;
	isHorizon: boolean;
}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
