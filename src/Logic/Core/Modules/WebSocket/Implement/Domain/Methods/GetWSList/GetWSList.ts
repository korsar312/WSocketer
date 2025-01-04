import { WebSocketInterfaces } from "../../../../WebSocket.interfaces";

export class GetWSList {
	static execute() {
		return function (obj: WebSocketInterfaces.TObj): WebSocketInterfaces.TWebSocket[] {
			return obj.WSList;
		};
	}
}
