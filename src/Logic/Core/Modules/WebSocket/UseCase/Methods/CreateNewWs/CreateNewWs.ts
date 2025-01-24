import { WebSocketInterfaces } from "../../../WebSocket.interfaces";
import { LanguageInterface } from "../../../../Language/Language.interface";

export class CreateNewWs {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (
			name: LanguageInterface.TAllWord,
			link: string,
			protocol: WebSocketInterfaces.EProtocol,
			desc: LanguageInterface.TAllWord,
		): WebSocketInterfaces.TWebSocket {
			const store = module.service.store.getStore();
			const newWs = module.domain.createNewWS(name, link, protocol, desc);
			const wsList = module.domain.getObjState(store, "WSList");
			module.domain.addWsList(wsList, newWs);

			return newWs;
		};
	}
}
