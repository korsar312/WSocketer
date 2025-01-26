import { FC } from "react";
import Component, { IComponent as IParent } from "../../index";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent extends Pick<IParent, "onChange"> {
	text?: LanguageInterface.TAllWord;
}

const Index: FC<IComponent> = (props) => {
	const { text } = props;

	const propsComponent: IParent = {
		...props,
		maxHeight: 200,
		extStyle: { resize: "none" },
		initText: { text, font: StylesInterface.EFont.Mont_S_22, color: StylesInterface.EColor.PRIME_1 },
	};

	return <Component {...propsComponent} />;
};

export default Index;
