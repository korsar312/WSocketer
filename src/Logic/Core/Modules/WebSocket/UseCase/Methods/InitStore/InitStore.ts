import { WebSocketInterfaces } from "../../../WebSocket.interfaces";

export class InitStore {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (): void {
			module.service.store.setStore({ WSList: [], WSChoiceId: undefined });
		};
	}
}
