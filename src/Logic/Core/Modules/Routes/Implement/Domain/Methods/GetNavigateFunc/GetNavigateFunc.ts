import { RouteInterfaces } from "../../../../Route.interfaces";

export class GetNavigateFunc {
	static execute() {
		return function (navigateObj: RouteInterfaces.TObj): RouteInterfaces.TNavigateFunction | null {
			return navigateObj.navigateFunc;
		};
	}
}
