import { FC } from "react";
import Substance, { IComponent as ISubstances } from "View/Components/3.Substances/SubstanceModalCreate";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";

export interface IComponent {
	isShow: boolean;
}

const Index: FC<IComponent> = (props) => {
	const { isShow } = props;

	const propsComponent: ISubstances = {
		form: {
			nameLabel: LanguageInterface.EWord.WS_NAME,
			dropVars: [LanguageInterface.EWord.WS, LanguageInterface.EWord.WSS],
			midLabel: LanguageInterface.EWord.WS_LINK,
			descLabel: LanguageInterface.EWord.WS_DESC,
		},
		isShow,
	};

	return <Substance {...propsComponent} />;
};

export default Index;
