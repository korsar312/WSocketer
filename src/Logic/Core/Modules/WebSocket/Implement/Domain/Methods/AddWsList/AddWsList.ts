import { WebSocketInterfaces } from "../../../../WebSocket.interfaces";

export class AddWsList {
	static execute() {
		return function (wsList: WebSocketInterfaces.TWebSocket[], newWs: WebSocketInterfaces.TWebSocket): void {
			wsList.push(newWs);
		};
	}
}
