import { MessagesInterfaces } from "../../../../Messages.interfaces";

export class SetGroupState {
	static execute() {
		return function <K extends keyof MessagesInterfaces.TMessageGroup>(
			obj: MessagesInterfaces.TMessageGroup,
			field: K,
			newValue: MessagesInterfaces.TMessageGroup[K],
		): MessagesInterfaces.TMessageGroup {
			return { ...obj, [field]: newValue };
		};
	}
}
