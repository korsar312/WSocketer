import styles from "./MessagePage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import MessagePageModel from "../MessagePage.model";
import TemplateModalCreateMessageGroup from "View/Components/4.Templates/TemplateModalCreateMessageGroup";
import WidgetMessageList from "View/Components/5.Widget/WidgetMessageList";
import WidgetMessageGroupList from "View/Components/5.Widget/WidgetMessageGroupList";
import WidgetMessageValue from "View/Components/5.Widget/WidgetMessageValue";

const MessagePage_Public: NFC<typeof MessagePageModel> = (props) => {
	const { groupFn, messageFn, isShowCreate, handleDriver, groupId, messageId } = props;

	return (
		<div css={styles.wrapper}>
			<TemplateModalCreateMessageGroup submit={handleDriver} isShow={isShowCreate} />

			<WidgetMessageGroupList choiceId={groupId} click={groupFn.chose} clickCreate={groupFn.openCreate} />

			<div css={styles.dirPlace}>
				<div css={styles.pub.f6}>
					<WidgetMessageList choiceId={messageId} groupId={groupId} click={messageFn.chose} clickCreate={messageFn.openCreate} />
				</div>

				<div css={styles.pub.f4}>
					<WidgetMessageValue groupId={groupId} messageId={messageId} />
				</div>
			</div>
		</div>
	);
};

export default MessagePage_Public;
