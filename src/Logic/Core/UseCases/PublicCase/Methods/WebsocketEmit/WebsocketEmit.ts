import UseCases from "../../../UseCases";
import API from "../../../../API/API";
import { LocalStorageInterface } from "../../../../API/LocalStorage/LocalStorage.interface";

export class WebsocketEmit {
	static execute(moduleChoicer: typeof UseCases) {
		return async function (emitType: LocalStorageInterface.EMethodNameInternal, event: LocalStorageInterface.TMethodEmitterFn) {
			return API.ws("addMethodEmitter", emitType, event);
		};
	}
}
