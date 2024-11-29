import styles from "./ChatPage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import ChatPageModel from "../ChatPage.model";

const ChatPage_Public: NFC<typeof ChatPageModel> = (props) => {
	const {} = props;

	return <div css={styles.wrapper}></div>;
};

export default ChatPage_Public;
