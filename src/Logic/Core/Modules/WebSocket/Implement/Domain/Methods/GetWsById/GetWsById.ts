import { WebSocketInterfaces } from "../../../../WebSocket.interfaces";

export class GetWsById {
	static execute() {
		return function (WSList: WebSocketInterfaces.TWebSocket[], id?: string): WebSocketInterfaces.TWebSocket | undefined {
			return WSList.find((el) => el.id === id);
		};
	}
}
