import { WebSocketInterfaces } from "../../../../WebSocket.interfaces";

type TPrimitive = Omit<WebSocketInterfaces.TWebSocket, "messages">;

export class ModifyWsState {
	static execute() {
		return function <K extends keyof TPrimitive>(
			obj: WebSocketInterfaces.TWebSocket,
			field: K,
			newValue: WebSocketInterfaces.TWebSocket[K],
		): void {
			obj[field] = newValue;
		};
	}
}
