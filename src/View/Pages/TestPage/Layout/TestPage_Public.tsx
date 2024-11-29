import styles from "./TestPage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import TestPageModel from "../TestPage.model";

const TestPage_Public: NFC<typeof TestPageModel> = (props) => {
	const { handleClick } = props;

	return <div css={styles.wrapper} onClick={handleClick}></div>;
};

export default TestPage_Public;
