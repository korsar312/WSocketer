import { FC, ReactNode } from "react";
import { default as Model } from "./AtomPaper.model";
import { default as View } from "./Layout/AtomPaper_Public";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent {
	color: StylesInterface.EColor;
	children: ReactNode;
}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
