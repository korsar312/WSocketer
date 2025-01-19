import styles from "./MoleculeInputControl_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import MoleculeInputControlModel from "../MoleculeInputControl.model";
import AtomDropdownMain from "View/Components/1.Atoms/AtomDropdown/Variables/AtomDropdownMain";
import AtomButtonIcon from "View/Components/1.Atoms/AtomButton/Variables/AtomButtonIcon";
import AtomInputFull from "View/Components/1.Atoms/AtomInput/Variables/AtomInputFull";
import AtomLineVW from "View/Components/1.Atoms/AtomLine/Variables/AtomLineVW";
import AtomPaperB from "View/Components/1.Atoms/AtomPaper/Variables/AtomPaperB";
import { ReactNode } from "react";

const MoleculeInputControl_Public: NFC<typeof MoleculeInputControlModel> = (props) => {
	const { leftBtnNorm, rightBtnNorm, dropNorm, inputNorm, isLeftLint, isRightLint } = props;

	function elementRender(child: ReactNode) {
		return <div css={styles.element}>{child}</div>;
	}

	return (
		<AtomPaperB extStyle={[styles.wrapper, styles.pub.pd8]}>
			{leftBtnNorm && elementRender(leftBtnNorm?.map((el) => <AtomButtonIcon key={el.icon} {...el} />))}

			{isLeftLint && <AtomLineVW />}

			{dropNorm && elementRender(dropNorm?.map((el) => <AtomDropdownMain key={el.text[0]} {...el} />))}
			{inputNorm?.map((el) => <AtomInputFull key={el.text} {...el} />)}

			{isRightLint && <AtomLineVW />}

			{rightBtnNorm && elementRender(rightBtnNorm?.map((el) => <AtomButtonIcon key={el.icon} {...el} />))}
		</AtomPaperB>
	);
};

export default MoleculeInputControl_Public;
