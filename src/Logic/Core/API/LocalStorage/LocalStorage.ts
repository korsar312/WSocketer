import { WebsocketInterface } from "./LocalStorage.interface";
import { LocalStorageCore } from "./LocalStorage.core";
import { AppStatusInterfaces } from "../../Modules/AppState/AppStatus.interfaces";

const link = WebsocketInterface.Name;

export class LocalStorage extends LocalStorageCore implements WebsocketInterface.TWSRequest {
	public addMethodEmitter(emitType: WebsocketInterface.EMethodNameInternal, event: WebsocketInterface.TMethodEmitterFn) {
		super.addMethodEmitter(emitType, event);
	}

	public removeMethodEmitter(emitType: WebsocketInterface.EMethodNameInternal, event: WebsocketInterface.TMethodEmitterFn) {
		super.removeMethodEmitter(emitType, event);
	}

	public getSuccessStatus() {
		return super.getSuccessStatus();
	}

	public EMULATE_EXAMPLE() {
		return this.request<void, AppStatusInterfaces.TErrorData>(link.EMULATE_EXAMPLE, undefined, {
			isInternal: true,
			data: {
				ActionResult: WebsocketInterface.EResponseWsResult.OK,
				result: { name: AppStatusInterfaces.EErrorModalList.errorAny },
				id: "internal",
				method: WebsocketInterface.EMethodNameInternal.ExampleInternal,
			},
		});
	}

	public EMULATE_REQUEST() {
		return this.request<AppStatusInterfaces.TErrorData>(link.EMULATE_REQUEST);
	}
}
