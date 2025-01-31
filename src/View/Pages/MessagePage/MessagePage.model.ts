import { IComponent } from "./index";
import { useRef, useState } from "react";
import { TMoleculeFormSchemaAddForm } from "View/Components/2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaAdd";
import UseCases from "Logic/Core/UseCases/UseCases";
import { MessagesInterfaces } from "Logic/Core/Modules/Messages/Messages.interfaces";

enum ECreate {
	GROUP = "GROUP",
	MESSAGE = "MESSAGE",
}

function MessagePageModel(props: IComponent) {
	const {} = props;

	const currentForm = useRef<ECreate>(ECreate.GROUP);

	const [isShowCreate, setIsShowCreate] = useState(false);
	const [currentGroupId, setCurrentGroupId] = useState<string>();
	const [currentMessageId, setCurrentMessageId] = useState<string>();

	const groupList = UseCases.interactor("message", "getGroupList");
	const curGroup = UseCases.interactor("message", "getGroupById", currentGroupId);

	const messageList = UseCases.interactor("message", "getMessageList", curGroup);
	const curMessage = UseCases.interactor("message", "getMessageById", curGroup, currentMessageId);

	const messageId = curMessage && UseCases.interactor("message", "getMessageId", curMessage);
	const messageValue = curMessage && UseCases.interactor("message", "getMessageValue", curMessage);

	const isGroupChose = Boolean(curGroup);
	const isMessageChose = Boolean(curMessage && currentMessageId);

	console.log(curMessage);

	const groupFn = {
		create(props: TMoleculeFormSchemaAddForm) {
			toggleShowCreate(false);

			const group = UseCases.interactor("message", "addGroup", props.topText);
			groupFn.chose(group);
		},

		openCreate() {
			currentForm.current = ECreate.GROUP;
			toggleShowCreate(true);
		},

		chose(group?: MessagesInterfaces.TMessageGroup) {
			const id = group && UseCases.interactor("message", "getGroupId", group);
			setCurrentGroupId(id);
		},

		isChosen(group: MessagesInterfaces.TMessageGroup) {
			return currentGroupId === groupFn.getId(group);
		},

		getId(group: MessagesInterfaces.TMessageGroup) {
			return UseCases.interactor("message", "getGroupId", group);
		},
	};

	const messageFn = {
		create(props: TMoleculeFormSchemaAddForm) {
			toggleShowCreate(false);

			const message = curGroup && UseCases.interactor("message", "addMessage", curGroup, props.topText);
			messageFn.chose(message);
		},

		openCreate() {
			currentForm.current = ECreate.MESSAGE;
			toggleShowCreate(true);
		},

		chose(message?: MessagesInterfaces.TMessage) {
			const id = message && UseCases.interactor("message", "getMessageId", message);
			setCurrentMessageId(id);
		},

		isChosen(message: MessagesInterfaces.TMessage) {
			return currentMessageId === messageFn.getId(message);
		},

		getId(message: MessagesInterfaces.TMessage) {
			return UseCases.interactor("message", "getMessageId", message);
		},
	};

	function toggleShowCreate(isShow?: boolean) {
		setIsShowCreate(isShow ?? false);
	}

	function handleDriver(val: TMoleculeFormSchemaAddForm) {
		switch (currentForm.current) {
			case "MESSAGE": {
				return messageFn.create(val);
			}
			case "GROUP": {
				return groupFn.create(val);
			}
		}
	}

	return {
		groupFn,
		messageFn,
		groupList,
		messageList,
		isShowCreate,
		handleDriver,
		isGroupChose,
		isMessageChose,
		messageValue,
		messageId,
	};
}

export default MessagePageModel;
