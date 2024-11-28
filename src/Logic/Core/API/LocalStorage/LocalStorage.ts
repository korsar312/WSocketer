import { LocalStorageInterface } from "./LocalStorage.interface";
import { LocalStorageCore } from "./LocalStorage.core";
import { AppStatusInterfaces } from "../../Modules/AppState/AppStatus.interfaces";

const link = LocalStorageInterface.Name;

export class LocalStorage extends LocalStorageCore implements LocalStorageInterface.TWSRequest {
	public addMethodEmitter(emitType: LocalStorageInterface.EMethodNameInternal, event: LocalStorageInterface.TMethodEmitterFn) {
		super.addMethodEmitter(emitType, event);
	}

	public removeMethodEmitter(emitType: LocalStorageInterface.EMethodNameInternal, event: LocalStorageInterface.TMethodEmitterFn) {
		super.removeMethodEmitter(emitType, event);
	}

	public getSuccessStatus() {
		return super.getSuccessStatus();
	}

	public EMULATE_EXAMPLE() {
		return this.request<void, AppStatusInterfaces.TErrorData>(link.EMULATE_EXAMPLE, undefined, {
			isInternal: true,
			data: {
				ActionResult: LocalStorageInterface.EResponseWsResult.OK,
				result: { name: AppStatusInterfaces.EErrorModalList.errorAny },
				id: "internal",
				method: LocalStorageInterface.EMethodNameInternal.ExampleInternal,
			},
		});
	}

	public EMULATE_REQUEST() {
		return this.request<AppStatusInterfaces.TErrorData>(link.EMULATE_REQUEST);
	}
}
