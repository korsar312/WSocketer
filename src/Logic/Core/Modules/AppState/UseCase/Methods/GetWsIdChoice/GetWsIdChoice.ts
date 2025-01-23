import { AppStatusInterfaces } from "../../../AppStatus.interfaces";

export class GetWsIdChoice {
	static execute(module: AppStatusInterfaces.IModules) {
		return function (): string | undefined {
			const store = module.service.store.getStore();

			return module.domain.getWsIdChoice(store);
		};
	}
}
