import { RouteInterfaces } from "../../../Route.interfaces";

export class SetCurrentPage {
	static execute(module: RouteInterfaces.IModules) {
		return function (currentPage: RouteInterfaces.EPathName): void {
			const store = module.service.store.getStore();
			const newStore = module.domain.setCurrentPage(store, currentPage, RouteInterfaces.PathName);

			module.service.store.setStore(newStore);
		};
	}
}
