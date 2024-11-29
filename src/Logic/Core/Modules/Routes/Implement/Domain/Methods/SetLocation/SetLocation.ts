import { RouteInterfaces } from "../../../../Route.interfaces";

export class SetLocation {
	static execute() {
		return function (navigateObj: RouteInterfaces.TObj, navigate: RouteInterfaces.TLocate): RouteInterfaces.TObj {
			return { ...navigateObj, location: navigate };
		};
	}
}
