import { FC } from "react";
import Substance, { IComponent as ISubstances } from "View/Components/2.Molecules/MoleculeCardSelector/";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { StylesInterface } from "../../../../Logic/Core/Modules/Styles/Styles.interface";

export type IComponent = {
	onClick: () => void;
};

const Index: FC<IComponent> = (props) => {
	const { onClick } = props;

	const title = LanguageInterface.EWord.CREATE_GROUP;

	const propsComponent: ISubstances = {
		click: onClick,
		color: StylesInterface.EColor.SECOND_1,
		title: { text: title, color: StylesInterface.EColor.PRIME_1, font: StylesInterface.EFont.Mont_B_18 },
		image: { color: StylesInterface.EColor.PRIME_1, img: "IconAdd", size: 40 },
	};

	return <Substance {...propsComponent} />;
};

export default Index;
