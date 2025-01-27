import { MessagesInterfaces } from "../../../../Messages.interfaces";

export class AddGroup {
	static execute() {
		return function (
			groupList: MessagesInterfaces.TMessageGroup[],
			newGroup: MessagesInterfaces.TMessageGroup,
		): MessagesInterfaces.TMessageGroup[] {
			const isFind = groupList.findIndex((el) => el.id === newGroup.id);

			return isFind !== -1 ? groupList.toSpliced(isFind, 1, newGroup) : [...groupList, newGroup];
		};
	}
}
