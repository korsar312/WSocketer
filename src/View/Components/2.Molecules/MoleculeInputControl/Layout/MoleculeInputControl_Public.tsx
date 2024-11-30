import styles from "./MoleculeInputControl_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import MoleculeInputControlModel from "../MoleculeInputControl.model";
import AtomInputMain from "View/Components/1.Atoms/AtomInput/Variables/AtomInputMain";
import AtomLineVW from "View/Components/1.Atoms/AtomLine/Variables/AtomLineVW";
import AtomPaperB from "View/Components/1.Atoms/AtomPaper/Variables/AtomPaperB";
import AtomButtonIcon from "View/Components/1.Atoms/AtomButton/Variables/AtomButtonIcon";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";

const MoleculeInputControl_Public: NFC<typeof MoleculeInputControlModel> = (props) => {
	const {} = props;

	return (
		<AtomPaperB>
			<div css={[styles.wrapper, styles.pub.p8]}>
				<AtomButtonIcon icon={"IconTune"} text={LanguageInterface.EWord.BUTTON} />

				<AtomLineVW />

				<AtomButtonIcon icon={"IconTune"} text={LanguageInterface.EWord.BUTTON} />

				<AtomInputMain />

				<AtomLineVW />

				<AtomButtonIcon icon={"IconBug"} text={LanguageInterface.EWord.BUTTON} />
			</div>
		</AtomPaperB>
	);
};

export default MoleculeInputControl_Public;
