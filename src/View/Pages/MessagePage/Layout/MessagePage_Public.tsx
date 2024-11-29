import styles from "./MessagePage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import MessagePageModel from "../MessagePage.model";

const MessagePage_Public: NFC<typeof MessagePageModel> = (props) => {
	const {} = props;

	return <div css={styles.wrapper}></div>;
};

export default MessagePage_Public;
