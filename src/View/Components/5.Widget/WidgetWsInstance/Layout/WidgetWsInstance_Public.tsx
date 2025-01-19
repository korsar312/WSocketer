import { NFC } from "Logic/Libs/Util/TypesUtils";
import ChatPageModel from "../WidgetWsInstance.model";
import styles from "./WidgetWsInstance_Public.styles";
import TemplateWsMessage from "View/Components/4.Templates/TemplateWsMessage";
import TemplateLinkControl from "View/Components/4.Templates/TemplateLinkControl";
import TemplateSendMessage from "View/Components/4.Templates/TemplateSendMessage";

const WidgetWsInstance_Public: NFC<typeof ChatPageModel> = (props) => {
	const { wsInstance } = props;

	return (
		<div css={styles.chat}>
			<TemplateLinkControl wsInstance={wsInstance} />

			<div css={[styles.content, styles.pub.f1]}>
				<TemplateWsMessage wsInstance={wsInstance} />
			</div>

			<TemplateSendMessage wsInstance={wsInstance} />
		</div>
	);
};

export default WidgetWsInstance_Public;
