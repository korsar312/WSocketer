import { WebSocketInterfaces } from "../../../../WebSocket.interfaces";

export class GetWSState {
	static execute() {
		return function <K extends keyof WebSocketInterfaces.TWebSocket>(
			obj: WebSocketInterfaces.TWebSocket,
			field: K,
		): WebSocketInterfaces.TWebSocket[K] {
			return obj[field];
		};
	}
}
