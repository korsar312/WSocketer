import { FC } from "react";
import { default as Model } from "./AtomLine.model";
import { default as View } from "./Layout/AtomLine_Public";
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
