import { WebSocketInterfaces } from "../../../WebSocket.interfaces";

export class IsConnectOpen {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (ws: WebSocketInterfaces.TWebSocket): boolean {
			const asd = module.domain.getWSState(ws, "status");

			return module.domain.isWsStatusOpen(asd);
		};
	}
}
