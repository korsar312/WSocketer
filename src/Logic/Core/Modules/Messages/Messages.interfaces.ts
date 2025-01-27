import { TTypeModule } from "../../Helpers/Creators/Factory/Factory.enam";

export namespace MessagesInterfaces {
	/**
	 * Основной объект
	 */
	export type TObj = {
		messageList: TMessageGroup[];
	};

	export type TMessageGroup = {
		id: string;
		name: string;
		dir: TMessage[];
	};

	export type TMessage = {
		id: string;
		name: string;
		disc: string;
		value: string;
	};

	/**
	 * Домен и сервис
	 */
	export type IModules = TTypeModule["MessagesModule"];
}
