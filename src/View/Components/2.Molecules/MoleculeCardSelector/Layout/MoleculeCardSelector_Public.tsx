import { NFC } from "Logic/Libs/Util/TypesUtils";
import MoleculeCardSelectorModel from "../MoleculeCardSelector.model";
import AtomPaper from "View/Components/1.Atoms/AtomPaper";
import Images from "../../../0.Cores/Images";
import Text from "../../../0.Cores/Text";
import styles from "./MoleculeCardSelector_Public.styles";

const MoleculeCardSelector_Public: NFC<typeof MoleculeCardSelectorModel> = (props) => {
	const { title, image, click, color } = props;

	return (
		<AtomPaper extStyle={styles.wrapper} color={color} onClick={click}>
			<Images {...image} />
			<Text {...title} />
		</AtomPaper>
	);
};

export default MoleculeCardSelector_Public;
