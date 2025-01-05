import { WebSocketInterfaces } from "../../../WebSocket.interfaces";
import { LanguageInterface } from "../../../../Language/Language.interface";

export class CreateNewWs {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (name: LanguageInterface.TAllWord): WebSocketInterfaces.TWebSocket {
			const store = module.service.store.getStore();
			const newWs = module.domain.createNewWS(name);
			const wsList = module.domain.getWSList(store);
			const newStore = module.domain.setWsList(store, wsList, newWs);
			module.service.store.setStore(newStore);

			return newWs;
		};
	}
}
