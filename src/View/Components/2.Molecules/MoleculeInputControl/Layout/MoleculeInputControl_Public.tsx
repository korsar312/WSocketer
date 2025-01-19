import styles from "./MoleculeInputControl_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import MoleculeInputControlModel from "../MoleculeInputControl.model";
import AtomDropdownMain from "View/Components/1.Atoms/AtomDropdown/Variables/AtomDropdownMain";
import AtomButtonIcon from "View/Components/1.Atoms/AtomButton/Variables/AtomButtonIcon";
import AtomInputFull from "View/Components/1.Atoms/AtomInput/Variables/AtomInputFull";
import AtomLineVW from "View/Components/1.Atoms/AtomLine/Variables/AtomLineVW";
import AtomPaperB from "View/Components/1.Atoms/AtomPaper/Variables/AtomPaperB";

const MoleculeInputControl_Public: NFC<typeof MoleculeInputControlModel> = (props) => {
	const { leftBtnNorm, rightBtnNorm, centerDropNorm, isLeftLint, isRightLint } = props;

	return (
		<AtomPaperB extStyle={[styles.wrapper, styles.pub.pd8]}>
			{leftBtnNorm?.map((el) => <AtomButtonIcon key={el.icon} {...el} />)}

			{isLeftLint && <AtomLineVW />}

			{centerDropNorm?.map((el) => <AtomDropdownMain key={el.text[0]} {...el} />)}
			<AtomInputFull text={LanguageInterface.EWord.TEST_SERVER} />

			{isRightLint && <AtomLineVW />}

			{rightBtnNorm?.map((el) => <AtomButtonIcon key={el.icon} {...el} />)}
		</AtomPaperB>
	);
};

export default MoleculeInputControl_Public;
