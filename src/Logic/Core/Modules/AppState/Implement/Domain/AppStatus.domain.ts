import { GetStatusUpdating } from "./Methods/GetStatusUpdating/GetStatusUpdating";
import { AddStatusUpdating } from "./Methods/AddStatusUpdating/AddStatusUpdating";
import { RemoveStatusUpdating } from "./Methods/RemoveStatusUpdating/RemoveStatusUpdating";
import { CreateStatusUpdatingObj } from "./Methods/CreateStatusUpdatingObj/CreateStatusUpdatingObj";
import { IsInitDone } from "./Methods/IsInitDone/IsInitDone";
import { InitDone } from "./Methods/InitDone/InitDone";
import { ResetFront } from "./Methods/ResetFront/ResetFront";
import { ToggleErrorModals } from "./Methods/ToggleErrorModals/ToggleErrorModals";
import { SetWebsocketStatus } from "./Methods/SetWebsocketStatus/SetWebsocketStatus";
import { WebsocketIsDisabled } from "./Methods/WebsocketIsDisabled/WebsocketIsDisabled";
import { DomainBase } from "../../../../Helpers/Creators/Factory/Variables/Modules/Domain";
import { GetWsIdChoice } from "./Methods/GetWsIdChoice/GetWsIdChoice";
import { SetWsIdChoice } from "./Methods/SetWsIdChoice/SetWsIdChoice";

export class AppStatusDomain extends DomainBase {
	public initDone = InitDone.execute();
	public isInitDone = IsInitDone.execute();
	public resetFront = ResetFront.execute();
	public getWsIdChoice = GetWsIdChoice.execute();
	public setWsIdChoice = SetWsIdChoice.execute();
	public getStatusUpdating = GetStatusUpdating.execute();
	public addStatusUpdating = AddStatusUpdating.execute();
	public toggleErrorModals = ToggleErrorModals.execute();
	public setWebsocketStatus = SetWebsocketStatus.execute();
	public websocketIsDisabled = WebsocketIsDisabled.execute();
	public removeStatusUpdating = RemoveStatusUpdating.execute();
	public createStatusUpdatingObj = CreateStatusUpdatingObj.execute();
}
