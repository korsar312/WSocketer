import styles from "./BackgroundLayout_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import BackgroundLayoutModel from "../BackgroundLayout.model";

const BackgroundLayout_Public: NFC<typeof BackgroundLayoutModel> = (props) => {
	const { color } = props;

	return <div css={styles.background(color)} />;
};

export default BackgroundLayout_Public;
