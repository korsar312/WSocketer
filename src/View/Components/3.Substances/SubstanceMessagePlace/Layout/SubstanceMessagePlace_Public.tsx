import { NFC } from "Logic/Libs/Util/TypesUtils";
import SubstanceMessagePlaceModel from "../SubstanceMessagePlace.model";
import AtomPaperW from "View/Components/1.Atoms/AtomPaper/Variables/AtomPaperW";
import MoleculeTextBubble from "View/Components/2.Molecules/MoleculeTextBubble";
import styles from "./SubstanceMessagePlace_Public.styles";
import Scroll from "View/Components/0.Cores/Scroll";
import ArrayAnimation from "View/Components/0.Cores/ArrayAnimation";

const SubstanceMessagePlace_Public: NFC<typeof SubstanceMessagePlaceModel> = (props) => {
	const { messages, listRef, handleScroll } = props;

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
			<Scroll.div onScroll={handleScroll} ref={listRef} extStyle={[styles.wrapper, styles.pub.pd12]}>
				<ArrayAnimation uniqueKey={(_item, index) => messages[index].id}>
					{messages.map((el) => row(el.id, el.value, el.isSending))}
				</ArrayAnimation>
			</Scroll.div>
		</AtomPaperW>
	);
};

export default SubstanceMessagePlace_Public;
