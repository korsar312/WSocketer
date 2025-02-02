import { MessagesInterfaces } from "../../../Messages.interfaces";

export class SetMessageValue {
	static execute(module: MessagesInterfaces.IModules) {
		return function (message: MessagesInterfaces.TMessage, value: string): void {
			const store = module.service.store.getStore();
			const messageList = module.domain.getMessageList(store);
			const newMessage = module.domain.setMessageState(message, "value", value);
			const newMessageList = module.domain.addMessage(messageList, newMessage);
			const newStore = module.domain.setMessageList(store, newMessageList);

			module.service.store.setStore(newStore);
		};
	}
}
