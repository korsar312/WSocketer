import { MessagesInterfaces } from "../../../../Messages.interfaces";

export class SetMessageList {
	static execute() {
		return function (obj: MessagesInterfaces.TMessageGroup, dir: MessagesInterfaces.TMessage[]): MessagesInterfaces.TMessageGroup {
			return { ...obj, dir };
		};
	}
}
