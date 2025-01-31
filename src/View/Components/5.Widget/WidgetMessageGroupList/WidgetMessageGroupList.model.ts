import { IComponent } from "./index";
import UseCases from "Logic/Core/UseCases/UseCases";
import { MessagesInterfaces } from "Logic/Core/Modules/Messages/Messages.interfaces";

function WidgetMessageGroupListModel(props: IComponent) {
	const { click, choiceId, clickCreate } = props;

	const groupList = UseCases.interactor("message", "getGroupList");

	function getId(el: MessagesInterfaces.TMessageGroup) {
		return UseCases.interactor("message", "getGroupId", el);
	}

	function isChoice(el: MessagesInterfaces.TMessageGroup) {
		return choiceId === getId(el);
	}

	return { click, groupList, clickCreate, isChoice, getId };
}

export default WidgetMessageGroupListModel;
