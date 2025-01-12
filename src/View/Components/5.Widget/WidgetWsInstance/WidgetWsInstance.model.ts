import { IComponent } from "./index";
import UseCases from "Logic/Core/UseCases/UseCases";
import { TImageComponent } from "View/Components/0.Cores/Images";
import { WebSocketInterfaces } from "Logic/Core/Modules/WebSocket/WebSocket.interfaces";
import { useEffect } from "react";

function WidgetWsInstanceModel(props: IComponent) {
	const { wsInstance } = props;

	const wsStatusConnect = UseCases.interactor("webSocket", "getStatus", wsInstance);

	useEffect(() => {
		console.log(567890);
	}, [wsInstance]);

	const wsStatusIcon = imageChoice(wsStatusConnect);
	const isOpenImpossibly = wsStatusConnect !== WebSocketInterfaces.EStateWS.CLOSED;

	function openConnect() {
		UseCases.interactor("webSocket", "openConnection", wsInstance);
	}

	function imageChoice(status: WebSocketInterfaces.EStateWS): TImageComponent {
		switch (status) {
			case WebSocketInterfaces.EStateWS.AWAIT:
				return "IconPending";
			case WebSocketInterfaces.EStateWS.OPEN:
				return "IconBlock";
			case WebSocketInterfaces.EStateWS.CLOSED:
				return "IconPlay";
		}
	}

	return { wsInstance, openConnect, wsStatusIcon, isOpenImpossibly };
}

export default WidgetWsInstanceModel;
