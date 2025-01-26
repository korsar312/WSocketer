import { MessagesInterfaces } from "../../../Messages.interfaces";

export class InitStore {
	static execute(module: MessagesInterfaces.IModules) {
		return function (): void {
			module.service.store.setStore({ messageList: [] });
		};
	}
}
