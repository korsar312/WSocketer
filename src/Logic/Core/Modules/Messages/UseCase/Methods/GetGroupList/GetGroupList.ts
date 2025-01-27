import { MessagesInterfaces } from "../../../Messages.interfaces";

export class GetGroupList {
	static execute(module: MessagesInterfaces.IModules) {
		return function (): MessagesInterfaces.TMessageGroup[] {
			const store = module.service.store.getStore();

			return module.domain.getGroupList(store);
		};
	}
}
