import { IComponent, IMoleculeInputControlBtn, IMoleculeInputControlDrop } from "./index";
import { IComponent as IBtn } from "View/Components/1.Atoms/AtomButton/Variables/AtomButtonIcon";
import { IComponent as IDrop } from "View/Components/1.Atoms/AtomDropdown/Variables/AtomDropdownMain";

function MoleculeInputControlModel(props: IComponent) {
	const { leftBtn, rightBtn, drop } = props;

	const [leftBtnNorm, rightBtnNorm, centerDropNorm] = [btnNorm(leftBtn), btnNorm(rightBtn), dropNorm(drop)];

	const isLeftLint = Boolean(leftBtnNorm?.length);
	const isRightLint = Boolean(rightBtnNorm?.length);

	function btnNorm(btn?: IMoleculeInputControlBtn): IBtn[] | undefined {
		return btn && (Array.isArray(btn) ? btn : [btn]);
	}

	function dropNorm(drop?: IMoleculeInputControlDrop): IDrop[] | undefined {
		return drop && (Array.isArray(drop) ? drop : [drop]);
	}

	return { leftBtnNorm, rightBtnNorm, centerDropNorm, isLeftLint, isRightLint };
}

export default MoleculeInputControlModel;
