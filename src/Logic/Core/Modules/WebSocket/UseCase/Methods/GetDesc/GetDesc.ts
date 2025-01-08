import { WebSocketInterfaces } from "../../../WebSocket.interfaces";
import { LanguageInterface } from "../../../../Language/Language.interface";

export class GetDesc {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (ws: WebSocketInterfaces.TWebSocket): LanguageInterface.TAllWord {
			return module.domain.getWSState(ws, "desc");
		};
	}
}
