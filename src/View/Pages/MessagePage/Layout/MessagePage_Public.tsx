import styles from "./MessagePage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import MessagePageModel from "../MessagePage.model";
import AtomPaperG from "../../../Components/1.Atoms/AtomPaper/Variables/AtomPaperG";

const MessagePage_Public: NFC<typeof MessagePageModel> = (props) => {
	const {} = props;

	return (
		<div css={styles.wrapper}>
			<AtomPaperG extStyle={styles.dirList}>123</AtomPaperG>

			<div css={styles.dirWrap}>
				<AtomPaperG extStyle={styles.dir}>123</AtomPaperG>
				<AtomPaperG extStyle={styles.element}>123</AtomPaperG>
			</div>
		</div>
	);
};

export default MessagePage_Public;
