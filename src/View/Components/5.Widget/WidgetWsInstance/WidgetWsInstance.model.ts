import { IComponent } from "./index";
import { MessagesInterfaces } from "Logic/Core/Modules/Messages/Messages.interfaces";
import UseCases from "Logic/Core/UseCases/UseCases";
import { useState } from "react";

function WidgetWsInstanceModel(props: IComponent) {
	const { wsInstance } = props;

	const [isShowMessage, setIsShowMessage] = useState(false);

	function toggleShowMessage() {
		setIsShowMessage((old) => !old);
	}

	function sendTemp(val: MessagesInterfaces.TMessage) {
		const value = UseCases.interactor("message", "getMessageValue", val);
		toggleShowMessage();

		UseCases.interactor("webSocket", "sendWsMessage", wsInstance, value);
	}

	return { wsInstance, sendTemp, isShowMessage, toggleShowMessage };
}

export default WidgetWsInstanceModel;
