import { WebSocketInterfaces } from "../../../../WebSocket.interfaces";

export class GetWsMessage {
	static execute() {
		return function (messageValue: WebSocketInterfaces.TMessageValue): unknown {
			switch (typeof messageValue) {
				case "string":
					try {
						return JSON.parse(messageValue);
					} catch (e) {
						return messageValue;
					}
				default:
					return null;
			}
		};
	}
}
