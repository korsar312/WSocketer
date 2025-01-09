import { FC } from "react";
import Model from "./MoleculeCardItem.model";
import View from "./Layout/MoleculeCardItem_Public";
import { IComponent as IImage } from "../../0.Cores/Images";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";

export interface IComponent {
	title: LanguageInterface.TAllWord;
	subTitle: LanguageInterface.TAllWord;
	image: IImage;
	click?: () => void;
	isChose?: boolean;
}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
