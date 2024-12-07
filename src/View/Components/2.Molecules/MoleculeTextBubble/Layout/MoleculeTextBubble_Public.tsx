import styles from "./MoleculeTextBubble_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import MoleculeTextBubbleModel from "../MoleculeTextBubble.model";
import AtomPaperB from "View/Components/1.Atoms/AtomPaper/Variables/AtomPaperB";

const MoleculeTextBubble_Public: NFC<typeof MoleculeTextBubbleModel> = (props) => {
	const {} = props;

	return (
		<AtomPaperB>
			<div css={[styles.wrapper, styles.pub.p8]}>23456</div>
		</AtomPaperB>
	);
};

export default MoleculeTextBubble_Public;
