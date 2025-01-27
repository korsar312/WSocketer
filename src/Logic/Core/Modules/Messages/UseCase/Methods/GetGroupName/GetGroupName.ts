import { MessagesInterfaces } from "../../../Messages.interfaces";

export class GetGroupName {
	static execute(module: MessagesInterfaces.IModules) {
		return function (group: MessagesInterfaces.TMessageGroup): string {
			return module.domain.getGroupState(group, "name");
		};
	}
}
