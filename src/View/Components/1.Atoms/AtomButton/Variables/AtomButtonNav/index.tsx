import { FC } from "react";
import Component, { IComponent as IButton } from "../../index";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { TImageComponent } from "View/Components/0.Cores/Images";

export interface IComponent extends Pick<IButton, "isDisable" | "isFullWidth" | "click"> {
	icon: TImageComponent;
	isActive?: boolean;
	text: LanguageInterface.EWord;
}

const Index: FC<IComponent> = (props) => {
	const { isActive, text, icon } = props;

	const iconColor = isActive ? StylesInterface.EColor.PRIME_2 : StylesInterface.EColor.SECOND_2;

	const propsComponent: IButton = {
		...props,
		color: isActive ? StylesInterface.EColor.SECOND_1 : false,
		textVars: { groupStyle: { flex: 1, textAlign: "left" }, value: [{ text, font: StylesInterface.EFont.Mont_M_14 }] },
		icons: {
			LEFT: { value: [{ size: 20, color: iconColor, img: icon }] },
			RIGHT: { value: [{ size: 20, color: iconColor, img: "IconArrowRight" }] },
		},
		extStyles: {
			padding: 12,
			gap: 22,
			borderRadius: 8,
			border: "none",
		},
	};

	return <Component {...propsComponent} />;
};

export default Index;
