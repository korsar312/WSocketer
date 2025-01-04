import { WebSocketInterfaces } from "../../../../WebSocket.interfaces";

export class IsMessageReceive {
	static execute() {
		return function (typeMessage: WebSocketInterfaces.EMessageType): boolean {
			return typeMessage === WebSocketInterfaces.EMessageType.RECEIVE;
		};
	}
}
