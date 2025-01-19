import { FC } from "react";
import Substance, { IComponent as ISubstances } from "View/Components/3.Substances/SubstanceModalCreate";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { TMoleculeFormCreateForm } from "View/Components/2.Molecules/MoleculeForm/Variables/MoleculeFormCreate";

export interface IComponent {
	isShow: boolean;
	submit: (val: TMoleculeFormCreateForm) => void;
}

const Index: FC<IComponent> = (props) => {
	const { isShow, submit } = props;

	const propsComponent: ISubstances = {
		form: {
			title: LanguageInterface.EWord.BUTTON,
			nameLabel: LanguageInterface.EWord.WS_NAME,
			midLabel: LanguageInterface.EWord.WS_LINK,
			descLabel: LanguageInterface.EWord.WS_DESC,
			dropVars: [LanguageInterface.EWord.WS, LanguageInterface.EWord.WSS],
			submit,
		},
		isShow,
	};

	return <Substance {...propsComponent} />;
};

export default Index;
