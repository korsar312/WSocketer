import { NFC } from "Logic/Libs/Util/TypesUtils";
import ChatPageModel from "../ChatPage.model";
import MoleculeInputControl from "View/Components/2.Molecules/MoleculeInputControl";
import styles from "./ChatPage_Public.styles";
import TemplateWsMessage from "../../../Components/4.Templates/TemplateWsMessage";

const ChatPage_Public: NFC<typeof ChatPageModel> = (props) => {
	const {} = props;

	return (
		<div css={styles.wrapper}>
			<MoleculeInputControl leftBtn={{ icon: "IconTune" }} rightBtn={{ icon: "IconBlock" }} />

			<div css={[styles.content, styles.pub.f1]}>
				<TemplateWsMessage />
			</div>

			<MoleculeInputControl leftBtn={{ icon: "IconTune" }} rightBtn={{ icon: "IconTune" }} />
		</div>
	);
};

export default ChatPage_Public;
