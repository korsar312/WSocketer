import { WebSocketInterfaces } from "../../../WebSocket.interfaces";

export class SetWsChoice {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (newWs?: WebSocketInterfaces.TWebSocket): void {
			const store = module.service.store.getStore();
			const id = newWs ? module.domain.getWSState(newWs, "id") : undefined;
			const newStore = module.domain.setWsChoice(store, id);

			module.service.store.setStore(newStore);
		};
	}
}
