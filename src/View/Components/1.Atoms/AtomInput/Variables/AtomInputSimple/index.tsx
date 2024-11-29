import { FC } from "react";
import AtomButton, { IComponent as IInput } from "../../index";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent extends Pick<IInput, "onChange"> {
	text: LanguageInterface.EWord;
}

const Index: FC<IComponent> = (props) => {
	const { text } = props;

	const propsComponent: IInput = {
		...props,
		initText: {
			text,
			font: StylesInterface.EFont.Mont_M_10,
		},
	};

	return <AtomButton {...propsComponent} />;
};

export default Index;
