import { MessagesInterfaces } from "../../../Messages.interfaces";

export class AddGroup {
	static execute(module: MessagesInterfaces.IModules) {
		return function (newGroup: string): MessagesInterfaces.TMessageGroup {
			const store = module.service.store.getStore();
			const groupList = module.domain.getGroupList(store);
			const createGroup = module.domain.createGroup(newGroup);
			const newGroupList = module.domain.addGroup(groupList, createGroup);
			const newStore = module.domain.setGroupList(store, newGroupList);

			module.service.store.setStore(newStore);

			return createGroup;
		};
	}
}
