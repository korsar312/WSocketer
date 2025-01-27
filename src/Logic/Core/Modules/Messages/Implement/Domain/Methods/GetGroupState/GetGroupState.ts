import { MessagesInterfaces } from "../../../../Messages.interfaces";

export class GetGroupState {
	static execute() {
		return function <K extends keyof MessagesInterfaces.TMessageGroup>(
			obj: MessagesInterfaces.TMessageGroup,
			field: K,
		): MessagesInterfaces.TMessageGroup[K] {
			return obj[field];
		};
	}
}
