import Modules from "../Implement/Modules";
import { SetNavigateFunc } from "./Methods/SetNavigateFunc/SetNavigateFunc";
import { InitStore } from "./Methods/InitStore/InitStore";
import { GoHomePage } from "./Methods/GoHomePage/GoHomePage";
import { GoLink } from "./Methods/GoLink/GoLink";
import { GetCurrentPage } from "./Methods/GetCurrentPage/GetCurrentPage";
import { SetCurrentPage } from "./Methods/SetCurrentPage/SetCurrentPage";
import { EModuleList } from "../../../Helpers/Creators/Factory/Factory.enam";
import { UseCaseBase } from "../../../Helpers/Creators/Factory/Variables/Modules/UseCase";

export class RoutesUseCase extends UseCaseBase<EModuleList.RouterModule> {
	constructor() {
		super({ modules: Modules, initFn: InitStore });
	}

	public goLink = GoLink.execute(this.module);
	public goHomePage = GoHomePage.execute(this.module);
	public getCurrentPage = GetCurrentPage.execute(this.module);
	public setCurrentPage = SetCurrentPage.execute(this.module);
	public setNavigateFunc = SetNavigateFunc.execute(this.module);
}
