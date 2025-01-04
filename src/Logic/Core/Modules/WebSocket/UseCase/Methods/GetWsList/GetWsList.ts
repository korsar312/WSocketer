import { WebSocketInterfaces } from "../../../WebSocket.interfaces";

export class GetWsList {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (): WebSocketInterfaces.TWebSocket[] {
			const store = module.service.store.getStore();

			return module.domain.getWSList(store);
		};
	}
}
