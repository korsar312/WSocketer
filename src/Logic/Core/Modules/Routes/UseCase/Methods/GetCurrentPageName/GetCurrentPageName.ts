import { RouteInterfaces } from "../../../Route.interfaces";

export class GetCurrentPageName {
	static execute(module: RouteInterfaces.IModules) {
		return function (): RouteInterfaces.EPathName {
			const store = module.service.store.getStore();
			const location = module.domain.getLocation(store);

			return module.domain.getCurrentPageName(RouteInterfaces.PathName, location);
		};
	}
}
