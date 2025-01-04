import { WebSocketInterfaces } from "../../../../WebSocket.interfaces";

export class GetWsMessage {
	static execute() {
		return function (messageValue: WebSocketInterfaces.TMessageValue): unknown {
			switch (typeof messageValue) {
				case "string":
					return JSON.parse(messageValue);
				default:
					return null;
			}
		};
	}
}
