import { FC } from "react";
import Component, { EMoleculeFormField, IComponent as IParent } from "../../index";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { IComponent as IInput, TAtomInputText } from "View/Components/1.Atoms/AtomInput";
import { IComponent as IDropdown, TAtomDropdownEl } from "View/Components/1.Atoms/AtomDropdown/";

export interface IComponent {
	dropVars: LanguageInterface.TSomeWord[];
	nameLabel: LanguageInterface.EWord;
	midLabel: LanguageInterface.EWord;
	descLabel: LanguageInterface.EWord;
}

const { EFont } = StylesInterface;

const Index: FC<IComponent> = (props) => {
	const { nameLabel, dropVars, midLabel, descLabel } = props;

	const textEl: TAtomInputText = { text: "", font: EFont.Mont_B_22 };

	const topTextOptions: IInput = { initText: textEl, name: "topText" };
	const midTextOptions: IInput = { initText: textEl, name: "midText" };
	const botTextOptions: IInput = { initText: textEl, name: "botText" };
	const dropOptions: IDropdown = { name: "drop", options: dropVars.map(dropEl) };

	function dropEl(value: LanguageInterface.TSomeWord): TAtomDropdownEl {
		return { id: value, value, text: { value: [{ text: value, font: EFont.Mont_S_22 }] } };
	}

	const propsComponent: IParent = {
		...props,
		schema: {
			value: [
				{ value: { type: EMoleculeFormField.TEXT, options: topTextOptions } },
				{
					extStyle: { display: "flex", gap: 6 },
					value: [
						{ value: { type: EMoleculeFormField.SELECT, options: dropOptions } },
						{ value: { type: EMoleculeFormField.TEXT, options: midTextOptions } },
					],
				},
				{ value: { type: EMoleculeFormField.TEXT, options: botTextOptions } },
			],
		},
	};

	return <Component {...propsComponent} />;
};

export default Index;
