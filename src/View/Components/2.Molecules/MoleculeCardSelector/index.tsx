import { FC } from "react";
import Model from "./MoleculeCardSelector.model";
import View from "./Layout/MoleculeCardSelector_Public";
import { IComponent as IImage } from "View/Components/0.Cores/Images";
import { IComponent as IText } from "View/Components/0.Cores/Text";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent {
	title: IText;
	image: IImage;
	click: () => void;
	color?: StylesInterface.TColorChoice;
}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
