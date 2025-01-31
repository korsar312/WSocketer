import { MessagesInterfaces } from "../../../../Messages.interfaces";

export class AddMessage {
	static execute() {
		return function (groupList: MessagesInterfaces.TMessage[], newMessage: MessagesInterfaces.TMessage): MessagesInterfaces.TMessage[] {
			const isFind = groupList.findIndex((el) => el.id === newMessage.id);

			return isFind !== -1 ? groupList.toSpliced(isFind, 1, newMessage) : [...groupList, newMessage];
		};
	}
}
