import { MessagesInterfaces } from "../../../../Messages.interfaces";
import { v4 as id } from "uuid";

export class CreateMessage {
	static execute() {
		return function (name: string): MessagesInterfaces.TMessage {
			return {
				id: id(),
				name: name,
				value: "",
				disc: "",
			};
		};
	}
}
