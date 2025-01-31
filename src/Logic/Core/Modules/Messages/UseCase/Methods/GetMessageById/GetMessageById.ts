import { MessagesInterfaces } from "../../../Messages.interfaces";

export class GetMessageById {
	static execute(module: MessagesInterfaces.IModules) {
		return function (group?: MessagesInterfaces.TMessageGroup, messageId?: string): MessagesInterfaces.TMessage | undefined {
			const messageList = module.domain.getMessageList(group);

			return module.domain.getMessageById(messageList, messageId);
		};
	}
}
