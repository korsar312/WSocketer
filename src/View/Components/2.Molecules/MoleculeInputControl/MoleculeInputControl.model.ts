import { IComponent } from "./index";
import Util from "../../../../Logic/Libs/Util";

function MoleculeInputControlModel(props: IComponent) {
	const { leftBtn, rightBtn, drop, input } = props;

	const normalize = Util.toArray;
	const [leftBtnNorm, rightBtnNorm, dropNorm, inputNorm] = [normalize(leftBtn), normalize(rightBtn), normalize(drop), normalize(input)];

	const isLeftLint = Boolean(leftBtnNorm?.length);
	const isRightLint = Boolean(rightBtnNorm?.length && dropNorm?.length && inputNorm?.length);

	return { leftBtnNorm, rightBtnNorm, dropNorm, inputNorm, isLeftLint, isRightLint };
}

export default MoleculeInputControlModel;
