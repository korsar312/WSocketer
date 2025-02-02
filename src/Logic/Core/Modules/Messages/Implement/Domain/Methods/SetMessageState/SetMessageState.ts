import { MessagesInterfaces } from "../../../../Messages.interfaces";

export class SetMessageState {
	static execute() {
		return function <K extends keyof MessagesInterfaces.TMessage>(
			obj: MessagesInterfaces.TMessage,
			field: K,
			newValue: MessagesInterfaces.TMessage[K],
		): MessagesInterfaces.TMessage {
			switch (field) {
				case "value": {
					return { ...obj, [field]: JSON.stringify(newValue) };
				}
				default: {
					return { ...obj, [field]: newValue };
				}
			}
		};
	}
}
