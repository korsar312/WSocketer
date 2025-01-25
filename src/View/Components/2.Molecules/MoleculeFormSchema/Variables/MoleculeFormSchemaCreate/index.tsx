import { FC } from "react";
import Component, { EMoleculeFormSchemaField, IComponent as IParent } from "../../index";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { IComponent as IInput } from "View/Components/1.Atoms/AtomInput/Variables/AtomInputForm";
import { IComponent as IDropdown } from "View/Components/1.Atoms/AtomDropdown/Variables/AtomDropdownForm";
import { TAtomInputText } from "View/Components/1.Atoms/AtomInput";
import { TAtomDropdownEl } from "View/Components/1.Atoms/AtomDropdown";

export interface IComponent {
	title: LanguageInterface.EWord;
	dropVars: LanguageInterface.TSomeWord[];
	nameLabel: LanguageInterface.EWord;
	midLabel: LanguageInterface.EWord;
	descLabel: LanguageInterface.EWord;
	submit: (val: TMoleculeFormSchemaCreateForm) => void;
}

export type TMoleculeFormSchemaCreateForm = {
	topText: string;
	midText: string;
	botText: string;
	drop: LanguageInterface.TSomeWord;
};

const { EWord } = LanguageInterface;
const { EFont, EColor } = StylesInterface;

const Index: FC<IComponent> = (props) => {
	const { nameLabel, dropVars, midLabel, descLabel, submit, title } = props;

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
				{
					extStyle: { display: "flex", flexDirection: "column" },
					value: {
						type: EMoleculeFormSchemaField.TEXT,
						options: {
							text: EWord.CREATE_WS,
							color: EColor.SECOND_3,
							font: EFont.Mont_B_18,
						},
					},
				},
				{
					value: {
						type: EMoleculeFormSchemaField.INPUT,
						options: topTextOptions,
					},
				},
				{
					extStyle: { display: "flex", alignItems: "center", gap: 12 },
					value: [
						{
							value: {
								type: EMoleculeFormSchemaField.SELECT,
								options: dropOptions,
							},
						},
						{
							extStyle: { flex: 1 },
							value: {
								type: EMoleculeFormSchemaField.INPUT,
								options: midTextOptions,
							},
						},
					],
				},
				{
					value: {
						type: EMoleculeFormSchemaField.INPUT,
						options: botTextOptions,
					},
				},
			],
		},
		form: { onSubmit: submit },
		buttonList: [{ text: EWord.CREATE_WS }],
	};

	return <Component {...propsComponent} />;
};

export default Index;
