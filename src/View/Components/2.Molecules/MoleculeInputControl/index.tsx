import { FC } from "react";
import Model from "./MoleculeInputControl.model";
import View from "./Layout/MoleculeInputControl_Public";
import { IComponent as IBtn } from "View/Components/1.Atoms/AtomButton/Variables/AtomButtonIcon";
import { IComponent as IDrop } from "View/Components/1.Atoms/AtomDropdown/Variables/AtomDropdownMain";

export interface IComponent {
	leftBtn?: IMoleculeInputControlBtn;
	rightBtn?: IMoleculeInputControlBtn;
	drop?: IMoleculeInputControlDrop;
}

export type IMoleculeInputControlBtn = IBtn | IBtn[];
export type IMoleculeInputControlDrop = IDrop | IDrop[];

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
