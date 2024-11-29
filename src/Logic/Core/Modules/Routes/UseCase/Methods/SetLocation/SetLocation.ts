import { RouteInterfaces } from "../../../Route.interfaces";

export class SetLocation {
	static execute(module: RouteInterfaces.IModules) {
		return function (location: RouteInterfaces.TLocate): void {
			const storeNavigate = module.service.store.getStore();
			const newStore = module.domain.setLocation(storeNavigate, location);

			module.service.store.setStore(newStore);
		};
	}
}
