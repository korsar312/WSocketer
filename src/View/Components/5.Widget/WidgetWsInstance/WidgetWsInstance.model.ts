import { IComponent } from "./index";
import { WebSocketInterfaces } from "../../../../Logic/Core/Modules/WebSocket/WebSocket.interfaces";
import UseCases from "../../../../Logic/Core/UseCases/UseCases";

function WidgetWsInstanceModel(props: IComponent) {
	const { wsInstance } = props;

	function openConnect(link: string, protocol: WebSocketInterfaces.EProtocol) {
		let ws = wsInstance;
		if (!ws) ws = UseCases.interactor("webSocket", "createNewWs", link, protocol);

		UseCases.interactor("webSocket", "openConnection", ws);
	}

	return { wsInstance, openConnect };
}

export default WidgetWsInstanceModel;
