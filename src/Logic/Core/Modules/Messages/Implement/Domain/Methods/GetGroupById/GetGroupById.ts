import { MessagesInterfaces } from "../../../../Messages.interfaces";

export class GetGroupById {
	static execute() {
		return function (groupList: MessagesInterfaces.TMessageGroup[], groupId?: string): MessagesInterfaces.TMessageGroup | undefined {
			return groupList.find((el) => el.id === groupId);
		};
	}
}
