import { WebSocketInterfaces } from "../../../WebSocket.interfaces";

export class OpenConnection {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (wsInstance: WebSocketInterfaces.TWebSocket, link: string, protocol: WebSocketInterfaces.EProtocol): void {
			module.domain.setWSState(wsInstance, "status", WebSocketInterfaces.EStateWS.CLOSED);

			const setOpenFn = () => module.domain.setWSState(wsInstance, "status", WebSocketInterfaces.EStateWS.OPEN);
			const setCloseFn = () => module.domain.setWSState(wsInstance, "status", WebSocketInterfaces.EStateWS.CLOSED);
			const errorFn = () => module.domain.setWSState(wsInstance, "status", WebSocketInterfaces.EStateWS.CLOSED);
			const messageFn = (val: WebSocketInterfaces.TMessageValue) => {
				const messageList = module.domain.getWSState(wsInstance, "messages");
				const message = module.domain.createNewMessage(true, val);

				module.domain.setWSState(wsInstance, "messages", [message, ...messageList]);
			};

			const socket = module.service.openConnection(link, protocol, { setOpenFn, errorFn, messageFn, setCloseFn });
			module.domain.setWSState(wsInstance, "socket", socket);
		};
	}
}
