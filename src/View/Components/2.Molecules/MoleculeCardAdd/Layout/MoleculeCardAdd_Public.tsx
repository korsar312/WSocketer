import { NFC } from "Logic/Libs/Util/TypesUtils";
import MoleculeCardAddModel from "../MoleculeCardAdd.model";
import AtomPaperW from "../../../1.Atoms/AtomPaper/Variables/AtomPaperW";
import styles from "./MoleculeCardAdd_Public.styles";

const MoleculeCardAdd_Public: NFC<typeof MoleculeCardAddModel> = (props) => {
	const { click, image } = props;

	return (
		<AtomPaperW extStyle={styles.wrapper} onClick={click}>
			1213
		</AtomPaperW>
	);
};

export default MoleculeCardAdd_Public;
