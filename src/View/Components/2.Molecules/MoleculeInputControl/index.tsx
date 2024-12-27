import { FC } from "react";
import Model from "./MoleculeInputControl.model";
import View from "./Layout/MoleculeInputControl_Public";
import { IComponent as IBtn } from "View/Components/1.Atoms/AtomButton/Variables/AtomButtonIcon";

export interface IComponent {
	leftBtn: IMoleculeInputControlBtn;
	rightBtn: IMoleculeInputControlBtn;
}

export type IMoleculeInputControlBtn = IBtn | IBtn[];

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
