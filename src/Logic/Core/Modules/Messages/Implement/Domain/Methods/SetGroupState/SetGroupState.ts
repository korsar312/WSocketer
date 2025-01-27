import { MessagesInterfaces } from "../../../../Messages.interfaces";

export class SetGroupState {
	static execute() {
		return function <K extends keyof MessagesInterfaces.TMessageGroup>(
			obj: MessagesInterfaces.TMessage,
			field: K,
			newValue: MessagesInterfaces.TMessageGroup[K],
		): MessagesInterfaces.TMessage {
			return { ...obj, [field]: newValue };
		};
	}
}
