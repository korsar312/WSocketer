import { WebSocketInterfaces } from "../../../../WebSocket.interfaces";

export class SetWsList {
	static execute() {
		return function (
			obj: WebSocketInterfaces.TObj,
			wsList: WebSocketInterfaces.TWebSocket[],
			newWs: WebSocketInterfaces.TWebSocket,
		): WebSocketInterfaces.TObj {
			return { ...obj, WSList: [...wsList, newWs] };
		};
	}
}
