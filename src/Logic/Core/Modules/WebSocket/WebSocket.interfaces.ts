import { TTypeModule } from "../../Helpers/Creators/Factory/Factory.enam";

export namespace WebSocketInterfaces {
	/**
	 * Основной объект настроек
	 */
	export type TObj = {
		WSList: TWebSocket[];
	};

	export type TWebSocket = {};

	/**
	 * Домен и сервис
	 */
	export type IModules = TTypeModule["WebSocketModule"];
}
