import { FC } from "react";
import Substance, { IComponent as ISubstances } from "View/Components/3.Substances/SubstanceModalCreate";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { TMoleculeFormSchemaCreateForm } from "View/Components/2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaCreate";
import UseCases from "../../../../Logic/Core/UseCases/UseCases";

export interface IComponent {
	isShow: boolean;
	submit: (val: TMoleculeFormSchemaCreateForm) => void;
}

const Index: FC<IComponent> = (props) => {
	const { isShow, submit } = props;

	const protocols = UseCases.interactor("webSocket", "getAllProtocolsConnect");

	const propsComponent: ISubstances = {
		form: {
			title: LanguageInterface.EWord.BUTTON,
			nameLabel: LanguageInterface.EWord.WS_NAME,
			midLabel: LanguageInterface.EWord.WS_LINK,
			descLabel: LanguageInterface.EWord.WS_DESC,
			dropVars: protocols,
			submit,
		},
		isShow,
	};

	return <Substance {...propsComponent} />;
};

export default Index;
