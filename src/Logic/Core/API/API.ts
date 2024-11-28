import Util from "../../Libs/Util";
import UseCases from "../UseCases/UseCases";
import { GlobalVar } from "../../Config/GlobalVar";
import { LocalStorage } from "./LocalStorage/LocalStorage";

function createRequest<MODULE>(module: MODULE) {
	return function <METHOD extends keyof MODULE, ARGS extends MODULE[METHOD]>(
		method: METHOD,
		...args: ARGS extends (...args: infer P) => unknown ? Parameters<ARGS> : unknown[]
	): ARGS extends (...args: infer P) => any ? ReturnType<ARGS> : unknown {
		const chosenMethod = module[method];

		return Util.polymorph(chosenMethod, module, ...args);
	};
}

class API {
	private modules = {
		ws: new LocalStorage({
			getUrl: () => GlobalVar.WEBSOCKET_URL,
			setConnectSuccess: (status: boolean) => UseCases.interactor("appStatus", "setWebsocketStatus", status),
			removeUpdate: (removeId: string) => UseCases.interactor("appStatus", "removeStatusUpdating", removeId),
			getConnectSuccess: () => !UseCases.interactor("appStatus", "websocketIsDisabled"),
			addUpdate: (): string => UseCases.interactor("appStatus", "addStatusUpdating"),
		}),
	};

	public createRequestWs = createRequest(this.modules.ws);
}

const newApi = new API();

const APIRequest = {
	ws: newApi.createRequestWs,
};

export default APIRequest;
