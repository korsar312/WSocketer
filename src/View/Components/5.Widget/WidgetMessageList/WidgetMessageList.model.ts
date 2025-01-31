import { IComponent } from "./index";
import UseCases from "Logic/Core/UseCases/UseCases";
import { MessagesInterfaces } from "Logic/Core/Modules/Messages/Messages.interfaces";

function WidgetMessageListModel(props: IComponent) {
	const { groupId, click, choiceId, clickCreate } = props;

	const group = UseCases.interactor("message", "getGroupById", groupId);
	const messageList = UseCases.interactor("message", "getMessageList", group);
	const isShow = Boolean(group);

	function getId(el: MessagesInterfaces.TMessage) {
		return UseCases.interactor("message", "getMessageId", el);
	}

	function isChoice(el: MessagesInterfaces.TMessage) {
		return choiceId === getId(el);
	}

	return { click, messageList, clickCreate, isShow, isChoice, getId };
}

export default WidgetMessageListModel;
