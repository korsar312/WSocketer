import { WebSocketInterfaces } from "../../../WebSocket.interfaces";

export class SendWsMessage {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (wsInstance: WebSocketInterfaces.TWebSocket, message: string): void {
			const strMessage = JSON.stringify(message);

			const socket = module.domain.getWSState(wsInstance, "socket");
			module.service.sendMessage(socket, strMessage);

			const newMessage = module.domain.createNewMessage(false, strMessage);
			const messageList = module.domain.getWSState(wsInstance, "messages");

			module.domain.addWsMessage(messageList, newMessage);
		};
	}
}
