import { FC } from "react";
import Component, { IComponent as IParent } from "../../index";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent extends Pick<IParent, "isDisable" | "click"> {
	text: LanguageInterface.EWord;
}

const Index: FC<IComponent> = (props) => {
	const { text } = props;

	const propsComponent: IParent = {
		...props,
		color: StylesInterface.EColor.BLUE_2,
		isFullWidth: true,
		type: "submit",
		textVars: { groupStyle: { flex: 1 }, value: [{ text, font: StylesInterface.EFont.Mont_M_18 }] },
		extStyles: {
			padding: 12,
			borderRadius: 12,
			border: "none",
		},
	};

	return <Component {...propsComponent} />;
};

export default Index;
