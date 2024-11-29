import { NavigateFunction } from "react-router-dom";
import { RoutesDomain } from "./Implement/Domain/Routes.domain";
import { RoutesService } from "./Implement/Service/Routes.service";
import type { Location } from "@remix-run/router";

export namespace RouteInterfaces {
	export type TObj = {
		navigateFunc: TNavigateFunction | null;
		location: TLocate | null;
	};

	export const PathName = {
		HOME_PAGE: ``,
		TEST_PAGE: `test`,
		TEST_PAGE_2: `test2`,
		ERROR_PAGE: `*`,
	} as const;

	export type EPathName = keyof typeof PathName;
	export type TPathName = typeof PathName;
	export type TNavigateFunction = NavigateFunction;
	export type TLocate = () => Location;

	/**
	 * Домен и сервис
	 */
	export interface IModules {
		domain: RoutesDomain;
		service: RoutesService;
	}
}
