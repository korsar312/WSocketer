import { WebSocketInterfaces } from "../../../../WebSocket.interfaces";

type TEvent = {
	messageFn: (val: WebSocketInterfaces.TMessageValue) => void;
	setOpenFn: () => void;
	setCloseFn: () => void;
	errorFn: () => void;
};

export class OpenConnection {
	static execute() {
		return function (link: string, protocol: WebSocketInterfaces.EProtocol, fn: TEvent): WebSocket {
			const socket = new WebSocket(link, protocol);

			const { messageFn, setOpenFn, setCloseFn, errorFn } = fn;

			socket.onmessage = (val) => messageFn(val.data);
			socket.onopen = setOpenFn;
			socket.onclose = setCloseFn;
			socket.onerror = errorFn;

			return socket;
		};
	}
}
