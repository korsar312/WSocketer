import { LanguageInterface } from "../Language/Language.interface";
import { TTypeModule } from "../../Helpers/Creators/Factory/Factory.enam";

export namespace AppStatusInterfaces {
	/**
	 * Основной объект настроек
	 */
	export type TObj = {
		isAwaitRequest: boolean;
		websocketIsDisabled: boolean;
		isDone: boolean;
		modalError: TErrorData | null;
		updating: TStatusUpdate[];
	};

	export type TErrorData = {
		name: EErrorModalList;
		data?: unknown;
	};

	export enum EErrorModalList {
		errorAny = "errorAny",
	}

	export type TStatusUpdate = {
		id: string;
		title: LanguageInterface.TAllWord;
	};

	/**
	 * Домен и сервис
	 */
	export type IModules = TTypeModule["AppStatusModule"];
}
