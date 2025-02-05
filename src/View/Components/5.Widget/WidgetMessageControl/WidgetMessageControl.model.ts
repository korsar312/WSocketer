import { IComponent } from "./index";
import { useRef, useState } from "react";
import { TMoleculeFormSchemaAddForm } from "View/Components/2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaAdd";
import UseCases from "Logic/Core/UseCases/UseCases";
import { MessagesInterfaces } from "Logic/Core/Modules/Messages/Messages.interfaces";

enum ECreate {
	GROUP = "GROUP",
	MESSAGE = "MESSAGE",
}

function WidgetMessageControlModel(props: IComponent) {
	const { isEditable, isMin, messageClick } = props;

	const currentForm = useRef<ECreate>(ECreate.GROUP);

	const [isShowCreate, setIsShowCreate] = useState(false);
	const [groupId, setGroupId] = useState<string>();
	const [messageId, setMessageId] = useState<string>();

	const message = UseCases.interactor("message", "getMessageById", messageId);
	const value = message && UseCases.interactor("message", "getMessageValue", message);

	const isShow = Boolean(message);

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
			setGroupId(id);
		},

		getId(group: MessagesInterfaces.TMessageGroup) {
			return UseCases.interactor("message", "getGroupId", group);
		},
	};

	const messageFn = {
		create(props: TMoleculeFormSchemaAddForm) {
			toggleShowCreate(false);

			const group = UseCases.interactor("message", "getGroupById", groupId);
			const message = group && UseCases.interactor("message", "addMessage", group, props.topText);
			messageFn.chose(message);
		},

		openCreate() {
			currentForm.current = ECreate.MESSAGE;
			toggleShowCreate(true);
		},

		chose(message?: MessagesInterfaces.TMessage) {
			if (messageClick) return message && messageClick?.(message);

			const id = message && UseCases.interactor("message", "getMessageId", message);
			setMessageId(id);
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

	function saveChange(val: string) {
		message && UseCases.interactor("message", "setMessageValue", message, val);
	}

	return { groupFn, messageFn, isShowCreate, handleDriver, groupId, messageId, isShow, value, saveChange, isEditable, isMin };
}

export default WidgetMessageControlModel;
