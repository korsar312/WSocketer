import { WebSocketInterfaces } from "../../../WebSocket.interfaces";

export class GetId {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (ws: WebSocketInterfaces.TWebSocket): string {
			return module.domain.getWSState(ws, "id");
		};
	}
}
