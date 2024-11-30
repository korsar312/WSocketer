import { FC } from "react";
import AtomButton, { IComponent as IButton } from "../../index";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { TImageComponent } from "View/Components/0.Cores/Images";

export interface IComponent extends Pick<IButton, "isDisable" | "isFullWidth" | "click"> {
	icon: TImageComponent;
	text: LanguageInterface.EWord;
}

const Index: FC<IComponent> = (props) => {
	const { icon } = props;

	const propsComponent: IButton = {
		...props,
		color: StylesInterface.EColor.WHITE_4,
		icons: {
			LEFT: { value: [{ size: 40, img: icon }] },
		},
		extStyles: {
			padding: 12,
			gap: 22,
			borderRadius: 8,
			border: "none",
		},
	};

	return <AtomButton {...propsComponent} />;
};

export default Index;
