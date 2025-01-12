import { FC } from "react";
import Model from "./SubstanceModalCreate.model";
import View from "./Layout/SubstanceModalCreate_Public";
import { IComponent as IForm } from "View/Components/2.Molecules/MoleculeForm/Variables/MoleculeFormCreate";

export interface IComponent {
	isShow: boolean;
	form: IForm;
}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
