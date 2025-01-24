import { WebSocketInterfaces } from "../../../../WebSocket.interfaces";

export class AddWsMessage {
	static execute() {
		return function (messageList: WebSocketInterfaces.TMessage[], value: WebSocketInterfaces.TMessage): void {
			messageList.unshift(value);
		};
	}
}
