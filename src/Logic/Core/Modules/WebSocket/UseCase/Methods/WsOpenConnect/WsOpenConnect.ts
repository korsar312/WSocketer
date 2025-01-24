import { WebSocketInterfaces } from "../../../WebSocket.interfaces";

export class WsOpenConnect {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (wsInstance: WebSocketInterfaces.TWebSocket): void {
			const link = module.domain.getWSState(wsInstance, "link");
			const protocol = module.domain.getWSState(wsInstance, "protocol");

			module.domain.modifyWsState(wsInstance, "status", WebSocketInterfaces.EStateWS.AWAIT);

			const handlers: WebSocketInterfaces.TOpenConnectEvent = {
				openFn: () => module.domain.modifyWsState(wsInstance, "status", WebSocketInterfaces.EStateWS.OPEN),
				errorFn: () => module.domain.modifyWsState(wsInstance, "status", WebSocketInterfaces.EStateWS.CLOSED),
				closeFn: () => module.domain.modifyWsState(wsInstance, "status", WebSocketInterfaces.EStateWS.CLOSED),
				messageFn: (val: WebSocketInterfaces.TMessageValue) => {
					const newMessage = module.domain.createNewMessage(true, val);
					const messageList = module.domain.getWSState(wsInstance, "messages");

					module.domain.addWsMessage(messageList, newMessage);
				},
			};

			const socket = module.service.openConnection(link, protocol, handlers);

			module.domain.modifyWsState(wsInstance, "socket", socket);
		};
	}
}
