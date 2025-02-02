import { MessagesInterfaces } from "../../../../Messages.interfaces";

export class GetGroupMessageList {
	static execute() {
		return function (messageList: MessagesInterfaces.TMessage[], groupId?: string): MessagesInterfaces.TMessage[] {
			return messageList.filter((el) => el.groupId === groupId) || [];
		};
	}
}
