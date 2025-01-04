import { WebSocketInterfaces } from "../../../../WebSocket.interfaces";
import { v4 as uuid } from "uuid";

export class CreateNewWS {
	static execute() {
		return function (link: string, protocol: WebSocketInterfaces.EProtocol): WebSocketInterfaces.TWebSocket {
			return {
				messages: [],
				status: WebSocketInterfaces.EStateWS.CLOSED,
				id: uuid(),
				socket: null,
				protocol,
				link,
			};
		};
	}
}
