import { RouteInterfaces } from "../../../Route.interfaces";

export class GetCurrentPage {
	static execute(module: RouteInterfaces.IModules) {
		return function (): RouteInterfaces.EPathName | null {
			const store = module.service.store.getStore();

			return module.domain.getCurrentPage(store);
		};
	}
}
