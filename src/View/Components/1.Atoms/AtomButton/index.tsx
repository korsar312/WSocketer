import { FC } from "react";
import AtomButtonModel from "./AtomButton.model";
import AtomButton_Public from "./Layout/AtomButton_Public";
import { IComponent as IText } from "View/Components/0.Cores/Text";
import { IComponent as IImage } from "View/Components/0.Cores/Images";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { TDeepCSSObject } from "View/ViewUtils";

export interface IComponent {
	textVars: TAtomButtonText;
	color?: StylesInterface.EColor;
	isDisable?: boolean;
	extStyles?: TDeepCSSObject;
	icons?: Record<EAtomButtonIcon, TAtomButtonIcon>;
}

export enum EAtomButtonIcon {
	LEFT = "LEFT",
	RIGHT = "RIGHT",
}

export type TAtomButtonGeneralGroup<T> = {
	groupStyle?: TDeepCSSObject;
	value: T[];
};

export type TAtomButtonText = TAtomButtonGeneralGroup<IText>;
export type TAtomButtonIcon = TAtomButtonGeneralGroup<IImage>;

const Index: FC<IComponent> = (props) => {
	const model = AtomButtonModel(props);
	return <AtomButton_Public {...model} />;
};

export default Index;
