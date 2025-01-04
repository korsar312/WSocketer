import { NFC } from "Logic/Libs/Util/TypesUtils";
import SubstanceMessagePlaceModel from "../SubstanceMessagePlace.model";
import AtomPaperW from "View/Components/1.Atoms/AtomPaper/Variables/AtomPaperW";
import styles from "./SubstanceMessagePlace_Public.styles";
import Scroll from "View/Components/0.Cores/Scroll";
import ArrayAnimation from "View/Components/0.Cores/ArrayAnimation";
import MoleculeTextBubble, { IComponent as IBubble } from "View/Components/2.Molecules/MoleculeTextBubble";

const SubstanceMessagePlace_Public: NFC<typeof SubstanceMessagePlaceModel> = (props) => {
	const { messages, listRef, handleScroll, sendState, receiveState } = props;

	function row(id: string, text: unknown, isLeft: boolean) {
		const props: IBubble = { message: text, ...(isLeft ? sendState : receiveState) };

		return (
			<div key={id} css={isLeft ? styles.rowLeft : styles.rowRight}>
				<div css={styles.message}>
					<MoleculeTextBubble {...props} />
				</div>
			</div>
		);
	}

	return (
		<AtomPaperW isFull>
			<Scroll.div onScroll={handleScroll} ref={listRef} extStyle={styles.wrapper}>
				<ArrayAnimation type={"sliceA"} uniqueKey={(_item, index) => messages[index].id}>
					{messages.map((el) => row(el.id, el.value, el.isSending))}
				</ArrayAnimation>
			</Scroll.div>
		</AtomPaperW>
	);
};

export default SubstanceMessagePlace_Public;
