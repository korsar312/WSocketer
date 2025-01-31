import { MessagesInterfaces } from "../../../Messages.interfaces";

export class GetMessageName {
	static execute(module: MessagesInterfaces.IModules) {
		return function (message: MessagesInterfaces.TMessage): string {
			return module.domain.getMessageState(message, "name");
		};
	}
}
