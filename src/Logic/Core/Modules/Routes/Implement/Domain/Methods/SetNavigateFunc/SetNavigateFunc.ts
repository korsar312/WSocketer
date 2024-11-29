import { RouteInterfaces } from "../../../../Route.interfaces";

export class SetNavigateFunc {
	static execute() {
		return function (navigateObj: RouteInterfaces.TObj, navigate: RouteInterfaces.TNavigateFunction): RouteInterfaces.TObj {
			return { ...navigateObj, navigateFunc: navigate };
		};
	}
}
