import styles from "./AtomPaper_Public.styles";
import { observer } from "mobx-react";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import AtomPaperModel from "../AtomPaper.model";

const Paper: NFC<typeof AtomPaperModel> = (props) => {
	const { children, color } = props;

	return <div css={styles.wrapper(color)}>{children}</div>;
};

export default observer(Paper);
