import { RouteInterfaces } from "../../../Route.interfaces";

export class SetNavigateFunc {
	static execute(module: RouteInterfaces.IModules) {
		return function (navFunction: RouteInterfaces.TNavigateFunction): void {
			const storeNavigate = module.service.store.getStore();
			const newStore = module.domain.setNavigateFunc(storeNavigate, navFunction);

			module.service.store.setStore(newStore);
		};
	}
}
