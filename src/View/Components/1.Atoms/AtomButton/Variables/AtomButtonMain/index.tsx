import { FC } from "react";
import AtomButton, { IComponent as IButton } from "../../index";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent extends Pick<IButton, "isDisable"> {
	text: LanguageInterface.EWord;
}

const Index: FC<IComponent> = (props) => {
	const { text } = props;

	const propsComponent: IButton = {
		...props,
		color: StylesInterface.EColor.WHITE_1,
		textVars: {
			value: [{ text, font: StylesInterface.EFont.Mont_B_10 }],
		},
		extStyles: {
			borderRadius: 8,
			border: "none",
		},
	};

	return <AtomButton {...propsComponent} />;
};

export default Index;
