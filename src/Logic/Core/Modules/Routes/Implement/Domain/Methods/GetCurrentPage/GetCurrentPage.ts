import { RouteInterfaces } from "../../../../Route.interfaces";

export class GetCurrentPage {
	static execute() {
		return function (navigateObj: RouteInterfaces.TObj): RouteInterfaces.EPathName {
			return navigateObj.currentPage ?? "ERROR_PAGE";
		};
	}
}
