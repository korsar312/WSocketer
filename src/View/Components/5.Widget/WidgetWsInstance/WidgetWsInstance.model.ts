import { IComponent } from "./index";
import { WebSocketInterfaces } from "../../../../Logic/Core/Modules/WebSocket/WebSocket.interfaces";
import UseCases from "../../../../Logic/Core/UseCases/UseCases";

function WidgetWsInstanceModel(props: IComponent) {
	const { wsInstance } = props;

	function openConnect(link: string, protocol: WebSocketInterfaces.EProtocol) {
		UseCases.interactor("webSocket", "openConnection", wsInstance, link, protocol);
	}

	return { wsInstance, openConnect };
}

export default WidgetWsInstanceModel;
