import { MessagesInterfaces } from "../../../../Messages.interfaces";

export class SetMessageList {
	static execute() {
		return function (obj: MessagesInterfaces.TObj, messageList: MessagesInterfaces.TMessage[]): MessagesInterfaces.TObj {
			return { ...obj, messageList };
		};
	}
}
