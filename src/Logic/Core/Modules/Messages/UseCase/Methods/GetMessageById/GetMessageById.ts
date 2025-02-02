import { MessagesInterfaces } from "../../../Messages.interfaces";

export class GetMessageById {
	static execute(module: MessagesInterfaces.IModules) {
		return function (messageId?: string): MessagesInterfaces.TMessage | undefined {
			const store = module.service.store.getStore();
			const messageList = module.domain.getMessageList(store);

			return module.domain.getMessageById(messageList, messageId);
		};
	}
}
