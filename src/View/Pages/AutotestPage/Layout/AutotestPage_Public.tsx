import styles from "./AutotestPage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import AutotestPageModel from "../AutotestPage.model";

const AutotestPage_Public: NFC<typeof AutotestPageModel> = (props) => {
	const {} = props;

	return <div css={styles.wrapper}></div>;
};

export default AutotestPage_Public;
