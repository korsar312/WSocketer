import styles from "./ChatPage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import ChatPageModel from "../ChatPage.model";
import MoleculeInputControl from "../../../Components/2.Molecules/MoleculeInputControl";
import Images from "../../../Components/0.Cores/Images";
import { StylesInterface } from "../../../../Logic/Core/Modules/Styles/Styles.interface";

const ChatPage_Public: NFC<typeof ChatPageModel> = (props) => {
	const {} = props;

	return (
		<div css={styles.wrapper}>
			<MoleculeInputControl />
			<Images img={"IconMessage"} color={StylesInterface.EColor.BLACK_3} size={20} />
			<Images img={"IconMessage"} color={StylesInterface.EColor.GREEN_3} size={40} />
		</div>
	);
};

export default ChatPage_Public;
