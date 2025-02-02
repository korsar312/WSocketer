import { MessagesInterfaces } from "../../../../Messages.interfaces";
import { v4 as id } from "uuid";

export class CreateMessage {
	static execute() {
		return function (name: string, groupId: string): MessagesInterfaces.TMessage {
			return {
				id: id(),
				value: "",
				disc: "",
				groupId,
				name,
			};
		};
	}
}
