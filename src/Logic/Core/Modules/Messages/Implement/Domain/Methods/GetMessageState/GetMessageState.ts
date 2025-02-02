import { MessagesInterfaces } from "../../../../Messages.interfaces";

export class GetMessageState {
	static execute() {
		return function <K extends keyof MessagesInterfaces.TMessage>(
			obj: MessagesInterfaces.TMessage,
			field: K,
		): MessagesInterfaces.TMessage[K] {
			switch (field) {
				case "value": {
					try {
						return JSON.parse(obj[field]);
					} catch (e) {
						return obj[field];
					}
				}
				default: {
					return obj[field];
				}
			}
		};
	}
}
