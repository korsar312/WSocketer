import styles from "./MoleculeInputControl_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import MoleculeInputControlModel from "../MoleculeInputControl.model";
import AtomInputSimple from "View/Components/1.Atoms/AtomInput/Variables/AtomInputSimple";
import AtomLineVB from "View/Components/1.Atoms/AtomLine/Variables/AtomLineVB";
import AtomPaperW from "View/Components/1.Atoms/AtomPaper/Variables/AtomPaperW";

const MoleculeInputControl_Public: NFC<typeof MoleculeInputControlModel> = (props) => {
	const {} = props;

	return (
		<AtomPaperW>
			<div css={styles.wrapper}>
				<div></div>

				<AtomLineVB />

				<div>
					<AtomInputSimple />
				</div>

				<AtomLineVB />

				<div></div>
			</div>
		</AtomPaperW>
	);
};

export default MoleculeInputControl_Public;
