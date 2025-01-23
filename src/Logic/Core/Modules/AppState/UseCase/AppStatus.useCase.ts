import { InitStore } from "./Methods/InitStore/InitStore";
import Modules from "../Implement/Modules";
import { GetStatusUpdating } from "./Methods/GetStatusUpdating/GetStatusUpdating";
import { AddStatusUpdating } from "./Methods/AddStatusUpdating/AddStatusUpdating";
import { RemoveStatusUpdating } from "./Methods/RemoveStatusUpdating/RemoveStatusUpdating";
import { InitDone } from "./Methods/InitDone/InitDone";
import { IsInitDone } from "./Methods/IsInitDone/IsInitDone";
import { ResetFront } from "./Methods/ResetFront/ResetFront";
import { SetWebsocketStatus } from "./Methods/SetWebsocketStatus/SetWebsocketStatus";
import { WebsocketIsDisabled } from "./Methods/WebsocketIsDisabled/WebsocketIsDisabled";
import { ToggleErrorModals } from "./Methods/ToggleErrorModals/ToggleErrorModals";
import { EModuleList } from "../../../Helpers/Creators/Factory/Factory.enam";
import { UseCaseBase } from "../../../Helpers/Creators/Factory/Variables/Modules/UseCase";
import { SetWsIdChoice } from "./Methods/SetWsIdChoice/SetWsIdChoice";
import { GetWsIdChoice } from "./Methods/GetWsIdChoice/GetWsIdChoice";

export class AppStatusUseCase extends UseCaseBase<EModuleList.AppStatusModule> {
	constructor() {
		super({ modules: Modules, initFn: InitStore });
	}

	public initDone = InitDone.execute(this.module);
	public isInitDone = IsInitDone.execute(this.module);
	public resetFront = ResetFront.execute(this.module);
	public getWsIdChoice = GetWsIdChoice.execute(this.module);
	public setWsIdChoice = SetWsIdChoice.execute(this.module);
	public toggleErrorModals = ToggleErrorModals.execute(this.module);
	public getStatusUpdating = GetStatusUpdating.execute(this.module);
	public addStatusUpdating = AddStatusUpdating.execute(this.module);
	public setWebsocketStatus = SetWebsocketStatus.execute(this.module);
	public websocketIsDisabled = WebsocketIsDisabled.execute(this.module);
	public removeStatusUpdating = RemoveStatusUpdating.execute(this.module);
}
