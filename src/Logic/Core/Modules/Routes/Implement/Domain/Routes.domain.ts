import { GetNavigateFunc } from "./Methods/GetNavigateFunc/GetNavigateFunc";
import { SetNavigateFunc } from "./Methods/SetNavigateFunc/SetNavigateFunc";
import { RouterGo } from "./Methods/RouterGo/RouterGo";
import { GetCurrentPage } from "./Methods/GetCurrentPage/GetCurrentPage";
import { DomainBase } from "../../../../Helpers/Creators/Factory/Variables/Modules/Domain";
import { SetCurrentPage } from "./Methods/SetCurrentPage/SetCurrentPage";

export class RoutesDomain extends DomainBase {
	public routerGo = RouterGo.execute();
	public setCurrentPage = SetCurrentPage.execute();
	public getCurrentPage = GetCurrentPage.execute();
	public setNavigateFunc = SetNavigateFunc.execute();
	public getNavigateFunc = GetNavigateFunc.execute();
}
