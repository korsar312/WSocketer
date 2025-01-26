import { FC } from "react";
import Component, { EMoleculeFormSchemaField, IComponent as IParent } from "../../index";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { IComponent as IInput } from "View/Components/1.Atoms/AtomInput/Variables/AtomInputForm";
import { TAtomInputText } from "View/Components/1.Atoms/AtomInput";

export interface IComponent {
	title: LanguageInterface.EWord;
	nameLabel: LanguageInterface.EWord;
	submit: (val: TMoleculeFormSchemaAddForm) => void;
}

export type TMoleculeFormSchemaAddForm = {
	topText: string;
};

const { EWord } = LanguageInterface;
const { EFont, EColor } = StylesInterface;

const Index: FC<IComponent> = (props) => {
	const { nameLabel, submit, title } = props;

	const textEl: TAtomInputText = { text: "" };

	const topTextOptions: IInput = { initText: textEl, name: "topText" };

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
			],
		},
		form: { onSubmit: submit },
		buttonList: [{ text: EWord.CREATE_WS }],
	};

	return <Component {...propsComponent} />;
};

export default Index;
