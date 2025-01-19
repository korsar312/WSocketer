import { WebSocketInterfaces } from "../../../../WebSocket.interfaces";

export class GetAllProtocolsConnect {
	static execute() {
		return function (): WebSocketInterfaces.EProtocol[] {
			return Object.values(WebSocketInterfaces.EProtocol);
		};
	}
}
