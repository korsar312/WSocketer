import { WebSocketInterfaces } from "../../../../WebSocket.interfaces";

export class SetWsChoice {
	static execute() {
		return function (obj: WebSocketInterfaces.TObj, newWsId?: string): WebSocketInterfaces.TObj {
			return { ...obj, WSChoiceId: newWsId };
		};
	}
}
