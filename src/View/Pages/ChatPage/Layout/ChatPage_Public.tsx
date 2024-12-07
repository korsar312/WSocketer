import { NFC } from "Logic/Libs/Util/TypesUtils";
import ChatPageModel from "../ChatPage.model";
import MoleculeInputControl from "View/Components/2.Molecules/MoleculeInputControl";
import styles from "./ChatPage_Public.styles";
import SubstanceMessagePlace from "../../../Components/3.Substances/SubstanceMessagePlace";

const ChatPage_Public: NFC<typeof ChatPageModel> = (props) => {
	const {} = props;

	return (
		<div css={styles.wrapper}>
			<MoleculeInputControl leftBtn={{ icon: "IconTune" }} RightBtn={{ icon: "IconTune" }} />

			<div css={styles.pub.f1}>
				<SubstanceMessagePlace />
			</div>

			<MoleculeInputControl leftBtn={{ icon: "IconTune" }} RightBtn={{ icon: "IconTune" }} />
		</div>
	);
};

export default ChatPage_Public;
