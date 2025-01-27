import { MessagesInterfaces } from "../../../../Messages.interfaces";

export class GetMessageState {
	static execute() {
		return function <K extends keyof MessagesInterfaces.TMessage>(
			obj: MessagesInterfaces.TMessage,
			field: K,
		): MessagesInterfaces.TMessage[K] {
			return obj[field];
		};
	}
}
