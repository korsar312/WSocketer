import { WebSocketInterfaces } from "../../../WebSocket.interfaces";

export class IsMessageReceive {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (message: WebSocketInterfaces.TMessage): boolean {
			const type = module.domain.getWSMessageState(message, "type");

			return module.domain.isMessageReceive(type);
		};
	}
}
