import { NFC } from "Logic/Libs/Util/TypesUtils";
import ChatPageModel from "../WidgetWsInstance.model";
import styles from "./WidgetWsInstance_Public.styles";
import TemplateWsMessage from "View/Components/4.Templates/TemplateWsMessage";
import TemplateLinkControl from "View/Components/4.Templates/TemplateLinkControl";
import TemplateSendMessage from "View/Components/4.Templates/TemplateSendMessage";
import AtomModal from "View/Components/1.Atoms/AtomModal";
import WidgetMessageControl from "View/Components/5.Widget/WidgetMessageControl";
import AtomPaperW from "View/Components/1.Atoms/AtomPaper/Variables/AtomPaperW";

const WidgetWsInstance_Public: NFC<typeof ChatPageModel> = (props) => {
	const { wsInstance, sendTemp, isShowMessage, toggleShowMessage } = props;

	return (
		<div css={styles.chat}>
			<AtomModal isShow={isShowMessage}>
				<AtomPaperW extStyle={{ height: 250, padding: 10, width: 400 }}>
					<WidgetMessageControl messageClick={sendTemp} isMin></WidgetMessageControl>
				</AtomPaperW>
			</AtomModal>

			<TemplateLinkControl wsInstance={wsInstance} />

			<div css={[styles.content, styles.pub.f1]}>
				<TemplateWsMessage wsInstance={wsInstance} />
			</div>

			<TemplateSendMessage leftClick={toggleShowMessage} wsInstance={wsInstance} />
		</div>
	);
};

export default WidgetWsInstance_Public;
