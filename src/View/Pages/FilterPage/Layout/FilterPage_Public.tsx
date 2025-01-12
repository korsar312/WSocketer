import styles from "./FilterPage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import FilterPageModel from "../FilterPage.model";

const FilterPage_Public: NFC<typeof FilterPageModel> = (props) => {
	const {} = props;

	return <div css={styles.wrapper}>23</div>;
};

export default FilterPage_Public;
