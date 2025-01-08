import { WebSocketInterfaces } from "../../../../WebSocket.interfaces";
import { v4 as uuid } from "uuid";
import { LanguageInterface } from "../../../../../Language/Language.interface";

export class CreateNewWS {
	static execute() {
		return function (
			name: LanguageInterface.TAllWord,
			link: string,
			protocol: WebSocketInterfaces.EProtocol,
			desc: LanguageInterface.TAllWord,
		): WebSocketInterfaces.TWebSocket {
			return {
				messages: [],
				status: WebSocketInterfaces.EStateWS.CLOSED,
				id: uuid(),
				socket: null,
				link,
				protocol,
				name,
				desc,
			};
		};
	}
}
