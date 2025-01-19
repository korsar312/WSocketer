import { FC } from "react";
import Model from "./AtomDropdown.model";
import View from "./Layout/AtomDropdown_Public";
import { IComponent as IText } from "View/Components/0.Cores/Text";
import { IComponent as IImage } from "View/Components/0.Cores/Images";
import { TDeepCSSObject } from "View/ViewUtils";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";

export interface IComponent {
	options: TAtomDropdownEl[];
	name?: string;
	onChange?: (val: TAtomDropdownEl) => void;
	color?: TGroupOpt<StylesInterface.TColorChoice>;
	style?: TGroupOpt<TDeepCSSObject>;
	defaultValue?: string;
}

export type TAtomDropdownEl = {
	id: string | number;
	value?: LanguageInterface.TSomeWord;
	text?: TAtomDropdownGroup<IText[]>;
	iconLeft?: TAtomDropdownGroup<IImage[]>;
	iconRight?: TAtomDropdownGroup<IImage[]>;
};

export type TAtomDropdownGroup<T extends Array<unknown>> = {
	styleGroup?: TDeepCSSObject;
	value: T;
};

export type TGroupOpt<T> = {
	main?: T;
	drop?: T;
};

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
