import { RouteInterfaces } from "../../../../Route.interfaces";

export class GetCurrentPageName {
	static execute() {
		return function (allPath: RouteInterfaces.TPathName, locate: RouteInterfaces.TLocate | null): RouteInterfaces.EPathName {
			if (!locate) return "ERROR_PAGE";

			const { pathname } = locate();

			const page = Object.keys(allPath).find(
				(key) => `/${allPath[key as RouteInterfaces.EPathName]}` === pathname,
			) as RouteInterfaces.EPathName;

			return page ?? "ERROR_PAGE";
		};
	}
}
