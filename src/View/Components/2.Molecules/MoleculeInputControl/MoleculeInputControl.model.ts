import { IComponent, IMoleculeInputControlBtn } from "./index";
import { IComponent as IBtn } from "View/Components/1.Atoms/AtomButton/Variables/AtomButtonIcon";

function MoleculeInputControlModel(props: IComponent) {
	const { leftBtn, rightBtn } = props;

	const [leftBtnNorm, rightBtnNorm] = [btnNorm(leftBtn), btnNorm(rightBtn)];

	function btnNorm(btn: IMoleculeInputControlBtn): IBtn[] {
		return Array.isArray(btn) ? btn : [btn];
	}

	return { leftBtnNorm, rightBtnNorm };
}

export default MoleculeInputControlModel;
