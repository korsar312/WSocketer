import { FC } from "react";
import Component, { IComponent as IParent } from "../../index";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent extends Pick<IParent, "onChange"> {
	text: LanguageInterface.TSomeWord[];
}

const Index: FC<IComponent> = (props) => {
	const { text } = props;

	const propsComponent: IParent = {
		...props,
		options: text.map((el) => ({ id: el, text: { value: [{ text: el, font: StylesInterface.EFont.Mont_S_22 }] } })),
	};

	return <Component {...propsComponent} />;
};

export default Index;
