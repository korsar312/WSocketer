import { NFC } from "Logic/Libs/Util/TypesUtils";
import MoleculeCardAddModel from "../MoleculeCardAdd.model";
import AtomPaperW from "../../../1.Atoms/AtomPaper/Variables/AtomPaperW";
import styles from "./MoleculeCardAdd_Public.styles";
import Images from "../../../0.Cores/Images";

const MoleculeCardAdd_Public: NFC<typeof MoleculeCardAddModel> = (props) => {
	const { click, image } = props;

	return (
		<AtomPaperW extStyle={styles.wrapper} onClick={click}>
			<Images size={40} {...image} />
		</AtomPaperW>
	);
};

export default MoleculeCardAdd_Public;
