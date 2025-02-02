import styles from "./HistoryPage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import HistoryPageModel from "../HistoryPage.model";
import WidgetMessageControl from "View/Components/5.Widget/WidgetMessageControl";

const HistoryPage_Public: NFC<typeof HistoryPageModel> = (props) => {
	const {} = props;

	return (
		<div css={styles.wrapper}>
			<WidgetMessageControl isMin />
		</div>
	);
};

export default HistoryPage_Public;
