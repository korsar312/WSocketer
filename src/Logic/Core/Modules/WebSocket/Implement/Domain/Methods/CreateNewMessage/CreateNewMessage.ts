import { WebSocketInterfaces } from "../../../../WebSocket.interfaces";
import { v4 as uuid } from "uuid";

export class CreateNewMessage {
	static execute() {
		return function (isServerMessage: boolean, value: WebSocketInterfaces.TMessageValue): WebSocketInterfaces.TMessage {
			return {
				id: uuid(),
				type: isServerMessage ? WebSocketInterfaces.EMessageType.RECEIVE : WebSocketInterfaces.EMessageType.SEND,
				date: new Date().toISOString(),
				value,
			};
		};
	}
}
