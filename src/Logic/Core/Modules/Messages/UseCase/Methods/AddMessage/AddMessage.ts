import { MessagesInterfaces } from "../../../Messages.interfaces";

export class AddMessage {
	static execute(module: MessagesInterfaces.IModules) {
		return function (group: MessagesInterfaces.TMessageGroup, message: string): MessagesInterfaces.TMessage {
			const store = module.service.store.getStore();

			const groupId = module.domain.getGroupState(group, "id");
			const messageList = module.domain.getMessageList(store);
			const newMessage = module.domain.createMessage(message, groupId);
			const newMessageList = module.domain.addMessage(messageList, newMessage);

			const newStore = module.domain.setMessageList(store, newMessageList);

			module.service.store.setStore(newStore);

			return newMessage;
		};
	}
}
