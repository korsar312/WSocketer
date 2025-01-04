import { TTypeModule } from "../../Helpers/Creators/Factory/Factory.enam";

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
		protocol: EProtocol;
		socket: WebSocket | null;
		link: string;
	};

	export type TMessage = {
		id: string;
		type: EMessageType;
		value: TMessageValue;
		date: string;
	};

	export type TMessageValue = string | Blob | ArrayBuffer | null;

	export enum EMessageType {
		IN = "IN",
		OUT = "OUT",
	}

	export enum EStateWS {
		CLOSED = "CLOSED",
		OPEN = "OPEN",
	}

	export enum EProtocol {
		ws = "ws",
		wss = "wss",
		http = "http",
		https = "https",
	}

	/**
	 * Домен и сервис
	 */
	export type IModules = TTypeModule["WebSocketModule"];
}
