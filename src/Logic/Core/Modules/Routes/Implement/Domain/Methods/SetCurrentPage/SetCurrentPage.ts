import { RouteInterfaces } from "../../../../Route.interfaces";

export class SetCurrentPage {
	static execute() {
		return function (
			navigateObj: RouteInterfaces.TObj,
			path: RouteInterfaces.EPathName,
			allPath: RouteInterfaces.TPathName,
		): RouteInterfaces.TObj {
			const page = Object.keys(allPath).find(
				(key) => `/${allPath[key as RouteInterfaces.EPathName]}` === path,
			) as RouteInterfaces.EPathName;

			return { ...navigateObj, currentPage: page };
		};
	}
}
