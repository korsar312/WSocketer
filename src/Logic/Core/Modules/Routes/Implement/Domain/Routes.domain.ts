import { GetNavigateFunc } from "./Methods/GetNavigateFunc/GetNavigateFunc";
import { SetNavigateFunc } from "./Methods/SetNavigateFunc/SetNavigateFunc";
import { RouterGo } from "./Methods/RouterGo/RouterGo";
import { GetCurrentPageName } from "./Methods/GetCurrentPageName/GetCurrentPageName";
import { SetLocation } from "./Methods/SetLocation/SetLocation";
import { GetLocation } from "./Methods/GetLocation/GetLocation";
import { DomainBase } from "../../../../Helpers/Creators/Factory/Variables/Modules/Domain";

export class RoutesDomain extends DomainBase {
	public routerGo = RouterGo.execute();
	public setLocation = SetLocation.execute();
	public getLocation = GetLocation.execute();
	public setNavigateFunc = SetNavigateFunc.execute();
	public getNavigateFunc = GetNavigateFunc.execute();
	public getCurrentPageName = GetCurrentPageName.execute();
}
