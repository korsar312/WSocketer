import UseCases from "../../../UseCases";
import { WebSocketInterfaces } from "../../../../Modules/WebSocket/WebSocket.interfaces";

export class GetChooseWs {
	static execute(moduleChoicer: typeof UseCases) {
		return function (): WebSocketInterfaces.TWebSocket | undefined {
			const wsIdChoice = moduleChoicer.interactor("appStatus", "getWsIdChoice");

			return moduleChoicer.interactor("webSocket", "getWsById", wsIdChoice);
		};
	}
}
