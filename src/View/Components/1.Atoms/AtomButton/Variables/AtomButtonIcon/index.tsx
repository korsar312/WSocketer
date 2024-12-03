import { FC } from "react";
import AtomButton, { IComponent as IButton } from "../../index";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { TImageComponent } from "View/Components/0.Cores/Images";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent extends Pick<IButton, "isDisable" | "click"> {
	icon: TImageComponent;
	text: LanguageInterface.EWord;
}

const Index: FC<IComponent> = (props) => {
	const { icon } = props;

	const propsComponent: IButton = {
		...props,
		color: false,
		icons: {
			LEFT: { value: [{ size: 40, img: icon, color: StylesInterface.EColor.PRIME_3 }] },
		},
		extStyles: {
			padding: 6,
			gap: 22,
			borderRadius: 8,
			border: "none",
		},
	};

	return <AtomButton {...propsComponent} />;
};

export default Index;
