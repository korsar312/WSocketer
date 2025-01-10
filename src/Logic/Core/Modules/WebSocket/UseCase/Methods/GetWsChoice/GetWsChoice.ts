import { WebSocketInterfaces } from "../../../WebSocket.interfaces";

export class GetWsChoice {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (): WebSocketInterfaces.TWebSocket | undefined {
			const store = module.service.store.getStore();
			const WSList = module.domain.getObjState(store, "WSList");
			const WSChoiceId = module.domain.getObjState(store, "WSChoiceId");

			return module.domain.getWsById(WSList, WSChoiceId);
		};
	}
}
