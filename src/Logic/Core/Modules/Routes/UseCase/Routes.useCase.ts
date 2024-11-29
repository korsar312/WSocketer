import Modules from "../Implement/Modules";
import { SetNavigateFunc } from "./Methods/SetNavigateFunc/SetNavigateFunc";
import { InitStore } from "./Methods/InitStore/InitStore";
import { GoHomePage } from "./Methods/GoHomePage/GoHomePage";
import { GoLink } from "./Methods/GoLink/GoLink";
import { GetCurrentPageName } from "./Methods/GetCurrentPageName/GetCurrentPageName";
import { SetLocation } from "./Methods/SetLocation/SetLocation";

export class RoutesUseCase {
	private module = Modules.invoker();
	private initStore = InitStore.execute(this.module);

	constructor() {
		this.initStore();
	}

	public goLink = GoLink.execute(this.module);
	public goHomePage = GoHomePage.execute(this.module);
	public setLocation = SetLocation.execute(this.module);
	public setNavigateFunc = SetNavigateFunc.execute(this.module);
	public getCurrentPageName = GetCurrentPageName.execute(this.module);
}
