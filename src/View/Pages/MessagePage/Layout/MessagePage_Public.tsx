import styles from "./MessagePage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import MessagePageModel from "../MessagePage.model";
import WidgetMessageControl from "View/Components/5.Widget/WidgetMessageControl";

const MessagePage_Public: NFC<typeof MessagePageModel> = (props) => {
	const {} = props;

	return (
		<div css={styles.wrapper}>
			<WidgetMessageControl isEditable />
		</div>
	);
};

export default MessagePage_Public;
