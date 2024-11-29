import styles from "./ChatPage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import ChatPageModel from "../ChatPage.model";
import AtomInput from "../../../Components/1.Atoms/AtomInput";
import { StylesInterface } from "../../../../Logic/Core/Modules/Styles/Styles.interface";

const ChatPage_Public: NFC<typeof ChatPageModel> = (props) => {
	const {} = props;

	return (
		<div css={styles.wrapper}>
			<AtomInput onChange={console.log} initText={{ text: "sdf", font: StylesInterface.EFont.Mont_M_36 }} />
		</div>
	);
};

export default ChatPage_Public;
