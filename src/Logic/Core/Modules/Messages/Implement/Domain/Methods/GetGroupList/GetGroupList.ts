import { MessagesInterfaces } from "../../../../Messages.interfaces";

export class GetGroupList {
	static execute() {
		return function (obj: MessagesInterfaces.TObj): MessagesInterfaces.TMessageGroup[] {
			return obj.groupList || [];
		};
	}
}
