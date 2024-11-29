import { RouteInterfaces } from "../../../../Route.interfaces";

export class GetLocation {
	static execute() {
		return function (navigateObj: RouteInterfaces.TObj): RouteInterfaces.TLocate | null {
			return navigateObj.location;
		};
	}
}
