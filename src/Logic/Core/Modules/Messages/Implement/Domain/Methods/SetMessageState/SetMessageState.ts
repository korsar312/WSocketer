import { MessagesInterfaces } from "../../../../Messages.interfaces";

export class SetMessageState {
	static execute() {
		return function <K extends keyof MessagesInterfaces.TMessage>(
			obj: MessagesInterfaces.TMessage,
			field: K,
			newValue: MessagesInterfaces.TMessage[K],
		): MessagesInterfaces.TMessage {
			return { ...obj, [field]: newValue };
		};
	}
}
