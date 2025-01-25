import { FC } from "react";
import Model from "./MoleculeFormSchema.model";
import View from "./Layout/MoleculeFormSchema_Public";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { TDeepCSSObject } from "View/ViewUtils";
import { IComponent as IDropdown } from "View/Components/1.Atoms/AtomDropdown/Variables/AtomDropdownForm";
import { IComponent as IButton } from "View/Components/1.Atoms/AtomButton/Variables/AtomButtonForm";
import { IComponent as IInput } from "View/Components/1.Atoms/AtomInput/Variables/AtomInputForm";
import { IComponent as IText } from "View/Components/0.Cores/Text";
import { IComponent as IForm } from "View/Components/0.Cores/Form";

export interface IComponent {
	form: Pick<IForm, "onSubmit">;
	schema: TMoleculeFormSchemaRow;
	buttonList: IButton[];
	extStyle?: TDeepCSSObject;
	color?: StylesInterface.TColorChoice;
}

export type TMoleculeFormSchemaRow = {
	value: TMoleculeFormSchemaField | TMoleculeFormSchemaRow[];
	extStyle?: TDeepCSSObject;
};

export type TMoleculeFormSchemaField = {
	label?: string;
	required?: boolean;
} & (TInputField | TSelectField | TTextField);

export enum EMoleculeFormSchemaField {
	TEXT = "TEXT",
	INPUT = "INPUT",
	SELECT = "SELECT",
}

type TTextField = {
	type: EMoleculeFormSchemaField.TEXT;
	options: IText;
};

type TInputField = {
	type: EMoleculeFormSchemaField.INPUT;
	options: IInput;
};

type TSelectField = {
	type: EMoleculeFormSchemaField.SELECT;
	options: IDropdown;
};

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
