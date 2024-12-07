import { FC } from "react";
import AtomInput, { IComponent as ILine } from "../../index";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent extends Pick<ILine, "onChange"> {
	text: LanguageInterface.EWord[];
}

const Index: FC<IComponent> = (props) => {
	const { text } = props;

	const propsComponent: ILine = {
		...props,
		options: text.map((el) => ({ id: el, text: { value: [{ text: el, font: StylesInterface.EFont.Mont_E_14 }] } })),
	};

	return <AtomInput {...propsComponent} />;
};

export default Index;
