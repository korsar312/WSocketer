import { WebSocketInterfaces } from "../../../WebSocket.interfaces";

export class GetStatus {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (ws: WebSocketInterfaces.TWebSocket): WebSocketInterfaces.EStateWS {
			return module.domain.getWSState(ws, "status");
		};
	}
}
