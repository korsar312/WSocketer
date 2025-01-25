import { WebSocketInterfaces } from "../../../../WebSocket.interfaces";

export class IsWsStatusOpen {
	static execute() {
		return function (status: WebSocketInterfaces.EStateWS): boolean {
			return status === WebSocketInterfaces.EStateWS.OPEN;
		};
	}
}
