import { FC } from "react";
import { IComponent as IAtomBtn } from "View/Components/1.Atoms/AtomButton/Variables/AtomButtonNav";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { TImageComponent } from "View/Components/0.Cores/Images";
import Model from "./SubstanceAsideMenu.model";
import View from "./Layout/SubstanceAsideMenu_Public";

export interface IComponent {
	head: THead;
	titleBtn: TBtn;
	anyBtn?: TBtn[];
}

type THead = {
	title: LanguageInterface.EWord;
	icon: TImageComponent;
};

type TBtn = Pick<IAtomBtn, "text" | "icon" | "isActive" | "click">;

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
