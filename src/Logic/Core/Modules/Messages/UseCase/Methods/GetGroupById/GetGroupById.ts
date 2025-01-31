import { MessagesInterfaces } from "../../../Messages.interfaces";

export class GetGroupById {
	static execute(module: MessagesInterfaces.IModules) {
		return function (groupId?: string): MessagesInterfaces.TMessageGroup | undefined {
			const store = module.service.store.getStore();
			const groupList = module.domain.getGroupList(store);

			return module.domain.getGroupById(groupList, groupId);
		};
	}
}
