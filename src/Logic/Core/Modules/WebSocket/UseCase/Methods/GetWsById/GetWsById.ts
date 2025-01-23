import { WebSocketInterfaces } from "../../../WebSocket.interfaces";

export class GetWsById {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (id?: string): WebSocketInterfaces.TWebSocket | undefined {
			const store = module.service.store.getStore();
			const wsList = module.domain.getObjState(store, "WSList");

			return module.domain.getWsById(wsList, id);
		};
	}
}
