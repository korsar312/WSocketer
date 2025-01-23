import { TTypeModule } from "../../Helpers/Creators/Factory/Factory.enam";
import { LanguageInterface } from "../Language/Language.interface";

export namespace WebSocketInterfaces {
	/**
	 * Основной объект
	 */
	export type TObj = {
		WSList: TWebSocket[];
	};

	export type TWebSocket = {
		id: string;
		status: EStateWS;
		messages: TMessage[];
		socket: WebSocket | null;
		protocol: EProtocol;
		link: string;
		name: LanguageInterface.TAllWord;
		desc: LanguageInterface.TAllWord;
	};

	export type TMessage = {
		id: string;
		type: EMessageType;
		value: TMessageValue;
		date: string;
	};

	export type TMessageValue = string | Blob | ArrayBuffer | null;

	export enum EMessageType {
		SEND = "SEND",
		RECEIVE = "RECEIVE",
	}

	export enum EStateWS {
		AWAIT = "AWAIT",
		CLOSED = "CLOSED",
		OPEN = "OPEN",
	}

	export enum EProtocol {
		WS = "WS",
		WSS = "WSS",
		HTTP = "HTTP",
		HTTPS = "HTTPS",
	}

	/**
	 * Домен и сервис
	 */
	export type IModules = TTypeModule["WebSocketModule"];
}
