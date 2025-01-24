import { WebSocketInterfaces } from "../../../../WebSocket.interfaces";

export class OpenConnection {
	static execute() {
		return function (link: string, protocol: WebSocketInterfaces.EProtocol, fn: WebSocketInterfaces.TOpenConnectEvent): WebSocket {
			const socket = new WebSocket(`${protocol}://${link}`);

			const { messageFn, openFn, closeFn, errorFn } = fn;

			socket.onmessage = (val) => messageFn(val.data);
			socket.onopen = openFn;
			socket.onclose = closeFn;
			socket.onerror = errorFn;

			return socket;
		};
	}
}
