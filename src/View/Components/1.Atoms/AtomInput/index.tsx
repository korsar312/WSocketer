import { FC } from "react";
import { default as Model } from "./AtomInput.model";
import { default as View } from "./Layout/AtomInput_Public";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent {
	initText: TAtomInputText;
	click?: () => void;
	onChange?: (val: string) => void;
}

export type TAtomInputText = {
	text: LanguageInterface.TAllWord;
	font: StylesInterface.EFont;
	color?: StylesInterface.TColorChoice;
};

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;