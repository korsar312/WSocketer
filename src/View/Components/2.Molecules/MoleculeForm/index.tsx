import { FC } from "react";
import Model from "./MoleculeForm.model";
import View from "./Layout/MoleculeForm_Public";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { TDeepCSSObject } from "View/ViewUtils";
import { IComponent as IDropdown } from "View/Components/1.Atoms/AtomDropdown/";
import { IComponent as IInput } from "View/Components/1.Atoms/AtomInput";
import { IComponent as IButton } from "View/Components/1.Atoms/AtomButton/Variables/AtomButtonForm";

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
} & (TTextField | TSelectField);

export enum EMoleculeFormField {
	TEXT = "TEXT",
	SELECT = "SELECT",
}

type TTextField = {
	type: EMoleculeFormField.TEXT;
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
