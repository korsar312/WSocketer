import { WebSocketInterfaces } from "../../../WebSocket.interfaces";

export class OpenConnection {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (wsInstance: WebSocketInterfaces.TWebSocket): void {
			const link = module.domain.getWSState(wsInstance, "link");
			const protocol = module.domain.getWSState(wsInstance, "protocol");
			module.domain.setWSState(wsInstance, "status", WebSocketInterfaces.EStateWS.CLOSED);

			const setOpenFn = () => module.domain.setWSState(wsInstance, "status", WebSocketInterfaces.EStateWS.OPEN);
			const setCloseFn = () => module.domain.setWSState(wsInstance, "status", WebSocketInterfaces.EStateWS.CLOSED);
			const errorFn = () => module.domain.setWSState(wsInstance, "status", WebSocketInterfaces.EStateWS.CLOSED);
			const messageFn = (val: WebSocketInterfaces.TMessageValue) => module.domain.createNewMessage(true, val);

			const socket = module.service.openConnection(link, protocol, { setOpenFn, errorFn, messageFn, setCloseFn });
			module.domain.setWSState(wsInstance, "socket", socket);
		};
	}
}
