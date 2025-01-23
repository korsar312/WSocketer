import { AppStatusInterfaces } from "../../../AppStatus.interfaces";

export class SetWsIdChoice {
	static execute(module: AppStatusInterfaces.IModules) {
		return function (id?: string): void {
			const store = module.service.store.getStore();
			const newStore = module.domain.setWsIdChoice(store, id);

			module.service.store.setStore(newStore);
		};
	}
}
