import styles from "./ChatPage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import ChatPageModel from "../ChatPage.model";
import MoleculeInputControl from "../../../Components/2.Molecules/MoleculeInputControl";

const ChatPage_Public: NFC<typeof ChatPageModel> = (props) => {
	const {} = props;

	return (
		<div css={styles.wrapper}>
			<MoleculeInputControl />
		</div>
	);
};

export default ChatPage_Public;
