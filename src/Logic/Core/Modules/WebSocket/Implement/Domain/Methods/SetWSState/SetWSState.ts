import { WebSocketInterfaces } from "../../../../WebSocket.interfaces";

export class SetWSState {
	static execute() {
		return function <K extends keyof WebSocketInterfaces.TWebSocket>(
			obj: WebSocketInterfaces.TWebSocket,
			field: K,
			newValue: WebSocketInterfaces.TWebSocket[K],
		): void {
			obj[field] = newValue;
		};
	}
}