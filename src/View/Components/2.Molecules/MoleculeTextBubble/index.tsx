import { FC } from "react";
import Model from "./MoleculeTextBubble.model";
import View from "./Layout/MoleculeTextBubble_Public";
import { IComponent as IText } from "View/Components/0.Cores/Text";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent {
	message: unknown;
	colorBg?: StylesInterface.TColorChoice;
	textVar?: TMoleculeTextBubbleTextChange;
}

export enum EMoleculeTextBubbleTextVar {
	str = "str",
	num = "num",
	boo = "boo",
	oth = "oth",
	arr = "arr",
	obj = "obj",
}

export type TMoleculeTextBubbleText = Omit<IText, "text">;
export type TMoleculeTextBubbleTextPart = Partial<TMoleculeTextBubbleText>;
export type TMoleculeTextBubbleTextChange = Partial<Record<EMoleculeTextBubbleTextVar, TMoleculeTextBubbleTextPart>>;

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
