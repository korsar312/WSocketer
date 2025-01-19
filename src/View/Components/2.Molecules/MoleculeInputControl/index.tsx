import { FC } from "react";
import Model from "./MoleculeInputControl.model";
import View from "./Layout/MoleculeInputControl_Public";
import { IComponent as IBtn } from "View/Components/1.Atoms/AtomButton/Variables/AtomButtonIcon";
import { IComponent as IDrop } from "View/Components/1.Atoms/AtomDropdown/Variables/AtomDropdownMain";
import { IComponent as IInput } from "View/Components/1.Atoms/AtomInput/Variables/AtomInputFull";
import { typesUtils } from "Logic/Libs/Util/TypesUtils";

export type IComponent = {
	leftBtn?: IMoleculeInputControlBtn;
	drop?: IMoleculeInputControlDrop;
	rightBtn?: IMoleculeInputControlBtn;
} & typesUtils.ExclusiveKeys<TInputType>;

type TInputType = {
	input: IMoleculeInputControlInput;
	inputArea: IMoleculeInputControlInput;
};

export type IMoleculeInputControlBtn = IBtn | IBtn[];
export type IMoleculeInputControlDrop = IDrop | IDrop[];
export type IMoleculeInputControlInput = IInput | IInput[];

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
