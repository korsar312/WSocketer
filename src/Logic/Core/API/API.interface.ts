import { RouteInterfaces } from "../Modules/Routes/Route.interfaces";
import { LocalStorageInterface } from "./LocalStorage/LocalStorage.interface";

export namespace APIInterface {
	export type TLogParam = {
		page?: RouteInterfaces.EPathName;
		action?: ELogEvent;
		element?: string;
		data?: string;
		comment?: string;
	};

	export enum ELogEvent {
		reConnect = "reConnect",
		startFront = "startFront",
		finishInit = "finishInit",
		error = "error",
		click = "click",
		goLink = "goLink",
		getScan = "getScan",
		setScan = "setScan",
	}

	export type TAllRequest = keyof LocalStorageInterface.TWSRequest;
}
