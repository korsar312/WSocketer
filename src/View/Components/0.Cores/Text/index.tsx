import { FC, ReactNode } from "react";
import Model from "./Text.model";
import View from "./Layout/Text_Public";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { TDeepCSSObject } from "View/ViewUtils";

/**
 *
 */
export interface IComponent {
	text: LanguageInterface.TAllWord;
	font: StylesInterface.EFont;
	caseWord?: LanguageInterface.TTextCaseWord;
	color?: StylesInterface.TColorChoice;
	opacity?: number;
	extStyle?: TDeepCSSObject;
	pos?: "left" | "right" | "center";
	postfix?: ReactNode;
	prefix?: ReactNode;
	dontTranslate?: boolean;
	dontTransfer?: boolean;
	addContent?: LanguageInterface.TAdding[];
	isHidden?: boolean;
}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
