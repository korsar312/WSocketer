import { FC } from "react";
import Substance, { ESubstanceModalType, IComponent as ISubstances } from "View/Components/3.Substances/SubstanceModal";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { TMoleculeFormSchemaAddForm } from "View/Components/2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaAdd";

export interface IComponent {
	isShow: boolean;
	submit: (val: TMoleculeFormSchemaAddForm) => void;
}

const Index: FC<IComponent> = (props) => {
	const { isShow, submit } = props;

	const propsComponent: ISubstances = {
		type: ESubstanceModalType.ADD,
		form: {
			title: LanguageInterface.EWord.BUTTON,
			nameLabel: LanguageInterface.EWord.BUTTON,
			submit,
		},
		isShow,
	};

	return <Substance {...propsComponent} />;
};

export default Index;
