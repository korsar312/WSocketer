import { MessagesInterfaces } from "../../../../Messages.interfaces";
import { v4 as id } from "uuid";

export class CreateGroup {
	static execute() {
		return function (group: string): MessagesInterfaces.TMessageGroup {
			return {
				id: id(),
				name: group,
				dirId: [],
			};
		};
	}
}
