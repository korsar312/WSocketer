import { MessagesInterfaces } from "../../../Messages.interfaces";

export class AddMessage {
	static execute(module: MessagesInterfaces.IModules) {
		return function (group: MessagesInterfaces.TMessageGroup, message: string): MessagesInterfaces.TMessage {
			const store = module.service.store.getStore();

			const messageList = module.domain.getMessageList(group);
			const newMessage = module.domain.createMessage(message);
			const newMessageList = module.domain.addMessage(messageList, newMessage);

			const groupList = module.domain.getGroupList(store);
			const newGroup = module.domain.setGroupState(group, "dir", newMessageList);
			const newGroupList = module.domain.addGroup(groupList, newGroup);

			const newStore = module.domain.setGroupList(store, newGroupList);

			module.service.store.setStore(newStore);

			return newMessage;
		};
	}
}
