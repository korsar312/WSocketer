import { TTypeModule } from "../../Helpers/Creators/Factory/Factory.enam";

export namespace MessagesInterfaces {
	/**
	 * Основной объект
	 */
	export type TObj = {
		messageList: TMessage[];
	};

	export type TMessage = {};

	/**
	 * Домен и сервис
	 */
	export type IModules = TTypeModule["MessagesModule"];
}
