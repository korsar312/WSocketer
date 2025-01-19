import { WebSocketInterfaces } from "../../../WebSocket.interfaces";

export class GetAllProtocolsConnect {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (): WebSocketInterfaces.EProtocol[] {
			return module.domain.getAllProtocolsConnect();
		};
	}
}
