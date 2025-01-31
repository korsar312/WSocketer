import { MessagesInterfaces } from "../../../../Messages.interfaces";

export class GetMessageList {
	static execute() {
		return function (group?: MessagesInterfaces.TMessageGroup): MessagesInterfaces.TMessage[] {
			return group?.dir || [];
		};
	}
}
