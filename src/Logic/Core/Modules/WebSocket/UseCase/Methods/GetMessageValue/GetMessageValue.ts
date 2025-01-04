import { WebSocketInterfaces } from "../../../WebSocket.interfaces";

export class GetMessageValue {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (message: WebSocketInterfaces.TMessage): unknown {
			const mess = module.domain.getWSMessageState(message, "value");

			return module.domain.getWsMessage(mess);
		};
	}
}
