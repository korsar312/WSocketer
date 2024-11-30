import { FC } from "react";
import Model from "./AtomButton.model";
import View from "./Layout/AtomButton_Public";
import { IComponent as IText } from "View/Components/0.Cores/Text";
import { IComponent as IImage } from "View/Components/0.Cores/Images";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { TDeepCSSObject } from "View/ViewUtils";

export interface IComponent {
	textVars?: TAtomButtonText;
	color: StylesInterface.TColorChoice;
	isDisable?: boolean;
	extStyles?: TDeepCSSObject;
	icons?: Partial<Record<EAtomButtonIcon, TAtomButtonIcon>>;
	isFullWidth?: boolean;
	click?: () => void;
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
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
