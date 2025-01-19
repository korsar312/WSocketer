import { FC } from "react";
import Model from "./MoleculeForm.model";
import View from "./Layout/MoleculeForm_Public";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { TDeepCSSObject } from "View/ViewUtils";
import { IComponent as IDropdown } from "View/Components/1.Atoms/AtomDropdown/Variables/AtomDropdownForm";
import { IComponent as IButton } from "View/Components/1.Atoms/AtomButton/Variables/AtomButtonForm";
import { IComponent as IInput } from "View/Components/1.Atoms/AtomInput/Variables/AtomInputForm";
import { IComponent as IText } from "View/Components/0.Cores/Text";

export interface IComponent {
	schema: TMoleculeFormRow;
	onSubmit: (val: unknown) => void;
	buttonList: IButton[];
	extStyle?: TDeepCSSObject;
	color?: StylesInterface.TColorChoice;
}

export type TMoleculeFormRow = {
	value: TMoleculeFormField | TMoleculeFormRow[];
	extStyle?: TDeepCSSObject;
};

export type TMoleculeFormField = {
	label?: string;
	required?: boolean;
} & (TInputField | TSelectField | TTextField);

export enum EMoleculeFormField {
	TEXT = "TEXT",
	INPUT = "INPUT",
	SELECT = "SELECT",
}

type TTextField = {
	type: EMoleculeFormField.TEXT;
	options: IText;
};

type TInputField = {
	type: EMoleculeFormField.INPUT;
	options: IInput;
};

type TSelectField = {
	type: EMoleculeFormField.SELECT;
	options: IDropdown;
};

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
