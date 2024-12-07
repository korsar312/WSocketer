import { NFC } from "Logic/Libs/Util/TypesUtils";
import styles from "./SubstanceMessagePlace_Public.styles";
import SubstanceMessagePlaceModel from "../SubstanceMessagePlace.model";
import AtomPaperW from "View/Components/1.Atoms/AtomPaper/Variables/AtomPaperW";
import MoleculeTextBubble from "../../../2.Molecules/MoleculeTextBubble";

const SubstanceMessagePlace_Public: NFC<typeof SubstanceMessagePlaceModel> = (props) => {
	const {} = props;

	return (
		<AtomPaperW isFull>
			<div css={styles.wrapper}>
				<MoleculeTextBubble />
			</div>
		</AtomPaperW>
	);
};

export default SubstanceMessagePlace_Public;
