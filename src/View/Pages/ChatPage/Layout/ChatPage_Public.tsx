import { NFC } from "Logic/Libs/Util/TypesUtils";
import ChatPageModel from "../ChatPage.model";
import styles from "./ChatPage_Public.styles";
import TemplateWsMessage from "View/Components/4.Templates/TemplateWsMessage";
import AtomPaperW from "View/Components/1.Atoms/AtomPaper/Variables/AtomPaperW";
import { WebSocketInterfaces } from "Logic/Core/Modules/WebSocket/WebSocket.interfaces";
import WidgetWsInstance from "View/Components/5.Widget/WidgetWsInstance";

const ChatPage_Public: NFC<typeof ChatPageModel> = (props) => {
	const { wsList, wsInstance, createWs, choseWs } = props;

	function isChosen(ws: WebSocketInterfaces.TWebSocket) {
		return <WidgetWsInstance wsInstance={ws} />;
	}

	function isChose() {
		return (
			<div css={styles.wrapper}>
				{wsList.map((el) => (
					<div css={styles.el} onClick={() => choseWs(el)}>
						<TemplateWsMessage isSmall wsInstance={el} />
					</div>
				))}
				<AtomPaperW onClick={createWs} extStyle={styles.el}>
					12
				</AtomPaperW>
			</div>
		);
	}

	return wsInstance ? isChosen(wsInstance) : isChose();
};

export default ChatPage_Public;
