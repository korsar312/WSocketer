import { IComponent } from "./index";
import Util from "../../../../Logic/Libs/Util";

function MoleculeInputControlModel(props: IComponent) {
	const { leftBtn, rightBtn, drop, inputArea, input } = props;

	const normalize = Util.toArray;

	const leftBtnNorm = normalize(leftBtn);
	const rightBtnNorm = normalize(rightBtn);
	const inputAreaNorm = normalize(inputArea);
	const inputNorm = normalize(input);
	const dropNorm = normalize(drop);

	const isLeftLint = Boolean(leftBtnNorm?.length);
	const isRightLint = Boolean(rightBtnNorm?.length && dropNorm?.length && inputNorm?.length);

	return { leftBtnNorm, rightBtnNorm, inputAreaNorm, inputNorm, dropNorm, isLeftLint, isRightLint };
}

export default MoleculeInputControlModel;
