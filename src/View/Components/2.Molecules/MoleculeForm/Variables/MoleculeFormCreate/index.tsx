import { FC } from "react";
import Component, { EMoleculeFormField, IComponent as IParent } from "../../index";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { IComponent as IInput } from "View/Components/1.Atoms/AtomInput";
import { IComponent as IDropdown } from "View/Components/1.Atoms/AtomDropdown/";

export interface IComponent {
	nameLabel: LanguageInterface.EWord;
	dropVars: LanguageInterface.TSomeWord[];
	midLabel: LanguageInterface.EWord;
	descLabel: LanguageInterface.EWord;
}

const Index: FC<IComponent> = (props) => {
	const { nameLabel, dropVars, midLabel, descLabel } = props;

	const topTextOptions: IInput = { initText: { text: "", font: StylesInterface.EFont.Mont_B_22 }, name: "topText" };
	const midTextOptions: IInput = { initText: { text: "", font: StylesInterface.EFont.Mont_B_22 }, name: "midText" };
	const botTextOptions: IInput = { initText: { text: "", font: StylesInterface.EFont.Mont_B_22 }, name: "botText" };

	const dropOptions: IDropdown = {
		name: "drop",
		options: dropVars.map((el) => ({
			id: String(el),
			value: el,
			text: { value: [{ text: el, font: StylesInterface.EFont.Mont_S_22 }] },
		})),
	};

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
