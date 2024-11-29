import { RouteInterfaces } from "../../../../Route.interfaces";

export class CreateNavigateObj {
	static execute() {
		return function (): RouteInterfaces.TObj {
			return {
				navigateFunc: null,
				location: null,
			};
		};
	}
}
