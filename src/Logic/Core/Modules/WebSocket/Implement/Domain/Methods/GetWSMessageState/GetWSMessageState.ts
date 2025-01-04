import { WebSocketInterfaces } from "../../../../WebSocket.interfaces";

export class GetWSMessageState {
	static execute() {
		return function <K extends keyof WebSocketInterfaces.TMessage>(
			obj: WebSocketInterfaces.TMessage,
			field: K,
		): WebSocketInterfaces.TMessage[K] {
			return obj[field];
		};
	}
}
