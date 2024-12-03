import styles from "./FilterPage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import FilterPageModel from "../FilterPage.model";
import MoleculeInputControl from "View/Components/2.Molecules/MoleculeInputControl";

const FilterPage_Public: NFC<typeof FilterPageModel> = (props) => {
	const {} = props;

	return (
		<div css={styles.wrapper}>
			<MoleculeInputControl />
		</div>
	);
};

export default FilterPage_Public;
