import styles from "./HistoryPage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import HistoryPageModel from "../HistoryPage.model";

const HistoryPage_Public: NFC<typeof HistoryPageModel> = (props) => {
	const {} = props;

	return <div css={styles.wrapper}></div>;
};

export default HistoryPage_Public;
