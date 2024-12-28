import { NFC } from "Logic/Libs/Util/TypesUtils";
import styles from "./SubstanceMessagePlace_Public.styles";
import SubstanceMessagePlaceModel from "../SubstanceMessagePlace.model";
import AtomPaperW from "View/Components/1.Atoms/AtomPaper/Variables/AtomPaperW";
import MoleculeTextBubble from "../../../2.Molecules/MoleculeTextBubble";
import Scroll from "../../../0.Cores/Scroll";

const SubstanceMessagePlace_Public: NFC<typeof SubstanceMessagePlaceModel> = (props) => {
	const { messages } = props;

	function row(id: string, text: unknown, isLeft: boolean) {
		return (
			<div key={id} css={isLeft ? styles.rowLeft : styles.rowRight}>
				{message(text)}
			</div>
		);
	}

	function message(text: unknown) {
		return (
			<div css={styles.message}>
				<MoleculeTextBubble message={text} />
			</div>
		);
	}

	return (
		<AtomPaperW isFull>
			<Scroll.div extStyle={[styles.wrapper, styles.pub.pd12]}>{messages.map((el) => row(el.id, el.value, el.isSending))}</Scroll.div>
		</AtomPaperW>
	);
};

export default SubstanceMessagePlace_Public;
