import { WebSocketInterfaces } from "../../../../WebSocket.interfaces";

export class SendMessage {
	static execute() {
		return function (socket: WebSocket | null, message: WebSocketInterfaces.TMessageValue): void {
			socket?.send(message);
		};
	}
}
