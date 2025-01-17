import { FC } from "react";
import Component, { EMoleculeFormField, IComponent as IParent } from "../../index";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { IComponent as IInput } from "View/Components/1.Atoms/AtomInput/Variables/AtomInputForm";
import { IComponent as IDropdown } from "View/Components/1.Atoms/AtomDropdown/Variables/AtomDropdownForm";
import { TAtomInputText } from "View/Components/1.Atoms/AtomInput";
import { TAtomDropdownEl } from "View/Components/1.Atoms/AtomDropdown";

export interface IComponent {
	dropVars: LanguageInterface.TSomeWord[];
	nameLabel: LanguageInterface.EWord;
	midLabel: LanguageInterface.EWord;
	descLabel: LanguageInterface.EWord;
	submit: (val: TMoleculeFormCreateForm) => void;
}

export type TMoleculeFormCreateForm = {
	topText: string;
	midText: string;
	botText: string;
	drop: LanguageInterface.TSomeWord;
};

const { EFont } = StylesInterface;

const Index: FC<IComponent> = (props) => {
	const { nameLabel, dropVars, midLabel, descLabel, submit } = props;

	const textEl: TAtomInputText = { text: "" };

	const topTextOptions: IInput = { initText: textEl, name: "topText" };
	const midTextOptions: IInput = { initText: textEl, name: "midText" };
	const botTextOptions: IInput = { initText: textEl, name: "botText" };
	const dropOptions: IDropdown = { name: "drop", options: dropVars.map(dropEl) };

	function dropEl(value: LanguageInterface.TSomeWord): TAtomDropdownEl {
		return { id: value, value, text: { value: [{ text: value }] } };
	}

	const propsComponent: IParent = {
		...props,
		schema: {
			extStyle: { display: "flex", flexDirection: "column", gap: 12, width: 400 },
			value: [
				{ value: { type: EMoleculeFormField.TEXT, options: topTextOptions } },
				{
					extStyle: { display: "flex", alignItems: "center", gap: 12 },
					value: [
						{ value: { type: EMoleculeFormField.SELECT, options: dropOptions } },
						{
							extStyle: { flex: 1 },
							value: { type: EMoleculeFormField.TEXT, options: midTextOptions },
						},
					],
				},
				{ value: { type: EMoleculeFormField.TEXT, options: botTextOptions } },
			],
		},
		onSubmit: (val) => submit(val as TMoleculeFormCreateForm),
		buttonList: [{ text: LanguageInterface.EWord.CREATE_WS }],
	};

	return <Component {...propsComponent} />;
};

export default Index;
