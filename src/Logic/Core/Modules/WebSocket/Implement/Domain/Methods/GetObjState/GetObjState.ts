import { WebSocketInterfaces } from "../../../../WebSocket.interfaces";

export class GetObjState {
	static execute() {
		return function <K extends keyof WebSocketInterfaces.TObj>(obj: WebSocketInterfaces.TObj, field: K): WebSocketInterfaces.TObj[K] {
			return obj[field];
		};
	}
}
