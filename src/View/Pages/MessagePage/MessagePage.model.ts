import { IComponent } from "./index";
import { useState } from "react";
import { TMoleculeFormSchemaAddForm } from "../../Components/2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaAdd";
import UseCases from "../../../Logic/Core/UseCases/UseCases";
import { MessagesInterfaces } from "../../../Logic/Core/Modules/Messages/Messages.interfaces";

function MessagePageModel(props: IComponent) {
	const {} = props;

	const groupList = UseCases.interactor("message", "getGroupList");

	const [isShowCreateGroup, setIsShowCreateGroup] = useState(false);
	const [isCurrentGroupId, setIsCurrentGroupId] = useState<string>();
	const [isCurrentMessage, setIsCurrentMessage] = useState();

	function createGroup(props: TMoleculeFormSchemaAddForm) {
		toggleShowCreateWs();
		UseCases.interactor("message", "addGroup", props.topText);
	}

	function toggleShowCreateWs(isShow?: boolean) {
		setIsShowCreateGroup(isShow || false);
	}

	function choseGroup(group: MessagesInterfaces.TMessageGroup) {
		setIsCurrentGroupId(getIdWs(group));
	}

	function isChosen(group: MessagesInterfaces.TMessageGroup) {
		return isCurrentGroupId === getIdWs(group);
	}

	function getIdWs(group: MessagesInterfaces.TMessageGroup) {
		return UseCases.interactor("message", "getGroupId", group);
	}

	return { isShowCreateGroup, toggleShowCreateWs, createGroup, groupList, choseGroup, isChosen, getIdWs };
}

export default MessagePageModel;
