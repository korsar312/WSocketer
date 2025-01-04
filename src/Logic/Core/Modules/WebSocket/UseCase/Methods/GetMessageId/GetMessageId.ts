import { WebSocketInterfaces } from "../../../WebSocket.interfaces";

export class GetMessageId {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (message: WebSocketInterfaces.TMessage): string {
			return module.domain.getWSMessageState(message, "id");
		};
	}
}
