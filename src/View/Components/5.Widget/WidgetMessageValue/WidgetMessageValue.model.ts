import { IComponent } from "./index";
import UseCases from "Logic/Core/UseCases/UseCases";

function WidgetMessageValueModel(props: IComponent) {
	const { groupId, messageId } = props;

	const group = UseCases.interactor("message", "getGroupById", groupId);
	const message = UseCases.interactor("message", "getMessageById", group, messageId);
	const value = message && UseCases.interactor("message", "getMessageValue", message);

	const isShow = Boolean(messageId);

	return { isShow, value, messageId };
}

export default WidgetMessageValueModel;
