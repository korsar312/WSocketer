import { TTypeModule } from "../../Helpers/Creators/Factory/Factory.enam";

export namespace MessagesInterfaces {
	/**
	 * Основной объект
	 */
	export type TObj = {
		messageList: TMessage[];
		groupList: TMessageGroup[];
	};

	export type TMessageGroup = {
		id: string;
		name: string;
		dirId: string[];
	};

	export type TMessage = {
		id: string;
		name: string;
		disc: string;
		value: string;
		groupId: string;
	};

	/**
	 * Домен и сервис
	 */
	export type IModules = TTypeModule["MessagesModule"];
}
