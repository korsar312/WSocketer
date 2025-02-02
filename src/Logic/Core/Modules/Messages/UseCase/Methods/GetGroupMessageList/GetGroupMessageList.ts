import { MessagesInterfaces } from "../../../Messages.interfaces";

export class GetGroupMessageList {
	static execute(module: MessagesInterfaces.IModules) {
		return function (group?: MessagesInterfaces.TMessageGroup): MessagesInterfaces.TMessage[] {
			if (!group) return [];
			const store = module.service.store.getStore();
			const messageList = module.domain.getMessageList(store);
			const groupId = module.domain.getGroupState(group, "id");

			return module.domain.getGroupMessageList(messageList, groupId);
		};
	}
}
