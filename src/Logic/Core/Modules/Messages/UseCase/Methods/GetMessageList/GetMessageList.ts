import { MessagesInterfaces } from "../../../Messages.interfaces";

export class GetMessageList {
	static execute(module: MessagesInterfaces.IModules) {
		return function (group?: MessagesInterfaces.TMessageGroup): MessagesInterfaces.TMessage[] {
			return module.domain.getMessageList(group);
		};
	}
}
