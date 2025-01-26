import { FC } from "react";
import Model from "./SubstanceModal.model";
import View from "./Layout/SubstanceModal_Public";
import { IComponent as IFormCreate } from "View/Components/2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaCreate";
import { IComponent as IFormAdd } from "View/Components/2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaAdd";

export type IComponent = {
	isShow: boolean;
} & TConcat;

type TConcat = TCreate | TAdd;

export enum ESubstanceModalType {
	ADD = "ADD",
	CREATE = "CREATE",
}

type TCreate = TForm<ESubstanceModalType.CREATE, IFormCreate>;
type TAdd = TForm<ESubstanceModalType.ADD, IFormAdd>;

type TForm<T extends ESubstanceModalType, F> = {
	type: T;
	form: F;
};

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
