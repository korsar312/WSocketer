import { MessagesInterfaces } from "../../../../Messages.interfaces";

export class GetMessageById {
	static execute() {
		return function (messageList: MessagesInterfaces.TMessage[], messageId?: string): MessagesInterfaces.TMessage | undefined {
			return messageList.find((el) => el.id === messageId);
		};
	}
}
