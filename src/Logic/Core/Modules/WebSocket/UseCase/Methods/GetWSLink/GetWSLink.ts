import { WebSocketInterfaces } from "../../../WebSocket.interfaces";

export class GetWSLink {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (ws: WebSocketInterfaces.TWebSocket): string {
			return module.domain.getWSState(ws, "link");
		};
	}
}
