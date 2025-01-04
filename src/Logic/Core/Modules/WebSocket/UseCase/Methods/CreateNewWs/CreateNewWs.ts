import { WebSocketInterfaces } from "../../../WebSocket.interfaces";

export class CreateNewWs {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (link: string, protocol: WebSocketInterfaces.EProtocol): WebSocketInterfaces.TWebSocket {
			const store = module.service.store.getStore();
			const newWs = module.domain.createNewWS(link, protocol);
			const wsList = module.domain.getWSList(store);
			const newStore = module.domain.setWsList(store, wsList, newWs);
			module.service.store.setStore(newStore);

			return newWs;
		};
	}
}
