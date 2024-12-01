import { NFC } from "Logic/Libs/Util/TypesUtils";
import ChatPageModel from "../ChatPage.model";
import MoleculeInputControl from "View/Components/2.Molecules/MoleculeInputControl";
import styles from "./ChatPage_Public.styles";

const ChatPage_Public: NFC<typeof ChatPageModel> = (props) => {
	const {} = props;

	return (
		<div css={styles.wrapper}>
			<div>
				<MoleculeInputControl />
			</div>

			<div css={{ flex: 1 }}>
				<MoleculeInputControl />
			</div>

			<div>
				<MoleculeInputControl />
			</div>
		</div>
	);
};

export default ChatPage_Public;
