import { FC } from "react";
import AtomInput, { IComponent as IInput } from "../../index";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent extends Pick<IInput, "onChange"> {
	text?: LanguageInterface.TAllWord;
}

const Index: FC<IComponent> = (props) => {
	const { text } = props;

	const propsComponent: IInput = {
		...props,
		extStyle: { height: "100%" },
		initText: {
			text,
			font: StylesInterface.EFont.Mont_S_22,
			color: StylesInterface.EColor.PRIME_1,
		},
	};

	return <AtomInput {...propsComponent} />;
};

export default Index;
