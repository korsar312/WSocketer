import styles from "./Paper_Public.styles";
import { observer } from "mobx-react";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import PaperModel from "../Paper.model";

const Paper: NFC<typeof PaperModel> = (props) => {
	const { children } = props;

	return <div css={styles.wrapper}>{children}</div>;
};

export default observer(Paper);
