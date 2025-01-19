import { WebSocketInterfaces } from "../../../WebSocket.interfaces";

export class GetWSProtocol {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (ws: WebSocketInterfaces.TWebSocket): WebSocketInterfaces.EProtocol {
			return module.domain.getWSState(ws, "protocol");
		};
	}
}
