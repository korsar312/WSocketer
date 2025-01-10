import { WebSocketInterfaces } from "../../../../WebSocket.interfaces";

export class SetWsList {
	static execute() {
		return function (
			obj: WebSocketInterfaces.TObj,
			wsList: WebSocketInterfaces.TWebSocket[],
			newWs: WebSocketInterfaces.TWebSocket,
		): WebSocketInterfaces.TObj {
			const find = wsList.findIndex((el) => newWs.id === el.id);
			const WSList = find !== -1 ? wsList.toSpliced(find, 1, newWs) : [...wsList, newWs];

			return { ...obj, WSList };
		};
	}
}
