import styles from "./MoleculeInputControl_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import MoleculeInputControlModel from "../MoleculeInputControl.model";
import AtomDropdownMain from "View/Components/1.Atoms/AtomDropdown/Variables/AtomDropdownMain";
import AtomButtonIcon from "View/Components/1.Atoms/AtomButton/Variables/AtomButtonIcon";
import AtomInputMain from "View/Components/1.Atoms/AtomInput/Variables/AtomInputMain";
import AtomLineVW from "View/Components/1.Atoms/AtomLine/Variables/AtomLineVW";
import AtomPaperB from "View/Components/1.Atoms/AtomPaper/Variables/AtomPaperB";

const MoleculeInputControl_Public: NFC<typeof MoleculeInputControlModel> = (props) => {
	const { leftBtn, RightBtn } = props;

	return (
		<AtomPaperB>
			<div css={[styles.wrapper, styles.pub.p8]}>
				<AtomButtonIcon {...leftBtn} />
				<AtomLineVW />
				<AtomDropdownMain text={[LanguageInterface.EWord.WS, LanguageInterface.EWord.WSS]} />
				<AtomInputMain text={LanguageInterface.EWord.TEST_SERVER} />
				<AtomLineVW />
				<AtomButtonIcon {...RightBtn} />
			</div>
		</AtomPaperB>
	);
};

export default MoleculeInputControl_Public;
