import { NavigateFunction } from "react-router-dom";
import type { Location } from "@remix-run/router";
import { TTypeModule } from "../../Helpers/Creators/Factory/Factory.enam";

export namespace RouteInterfaces {
	export type TObj = {
		navigateFunc: TNavigateFunction | null;
		location: TLocate | null;
	};

	export const PathName = {
		CHAT_PAGE: ``,
		MESSAGE_PAGE: `message`,
		AUTOTEST_PAGE: `autotest`,
		FILTER_PAGE: `filter`,
		PROTOCOL_PAGE: `protocol`,
		HISTORY_PAGE: `history`,
		SETTING_PAGE: `setting`,
		ERROR_PAGE: `*`,
	} as const;

	export type EPathName = keyof typeof PathName;
	export type TPathName = typeof PathName;
	export type TNavigateFunction = NavigateFunction;
	export type TLocate = () => Location;

	/**
	 * Домен и сервис
	 */
	export type IModules = TTypeModule["RouterModule"];
}
