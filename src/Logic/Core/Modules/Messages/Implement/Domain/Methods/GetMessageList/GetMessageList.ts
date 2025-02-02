import { MessagesInterfaces } from "../../../../Messages.interfaces";

export class GetMessageList {
	static execute() {
		return function (messageList: MessagesInterfaces.TObj): MessagesInterfaces.TMessage[] {
			return messageList.messageList;
		};
	}
}
