import { WebSocketInterfaces } from "../../../WebSocket.interfaces";

export class GetMessages {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (ws: WebSocketInterfaces.TWebSocket): WebSocketInterfaces.TMessage[] {
			return module.domain.getWSState(ws, "messages");
		};
	}
}
