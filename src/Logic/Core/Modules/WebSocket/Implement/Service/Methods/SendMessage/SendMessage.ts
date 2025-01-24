export class SendMessage {
	static execute() {
		return function (socket: WebSocket | null, message: string): void {
			socket?.send(message);
		};
	}
}
