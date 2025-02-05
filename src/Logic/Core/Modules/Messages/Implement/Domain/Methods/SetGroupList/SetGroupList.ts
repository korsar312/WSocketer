import { MessagesInterfaces } from "../../../../Messages.interfaces";

export class SetGroupList {
	static execute() {
		return function (obj: MessagesInterfaces.TObj, groupList: MessagesInterfaces.TMessageGroup[]): MessagesInterfaces.TObj {
			return { ...obj, groupList };
		};
	}
}
