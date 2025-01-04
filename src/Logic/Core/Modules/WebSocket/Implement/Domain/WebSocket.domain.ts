import { DomainBase } from "../../../../Helpers/Creators/Factory/Variables/Modules/Domain";
import { CreateNewWS } from "./Methods/CreateNewWS/CreateNewWS";
import { GetWsById } from "./Methods/GetWsById/GetWsById";
import { GetMessages } from "./Methods/GetMessages/GetMessages";
import { GetWSState } from "./Methods/GetWSState/GetWSState";
import { GetWSList } from "./Methods/GetWSList/GetWSList";
import { SetWsList } from "./Methods/SetWsList/SetWsList";
import { SetWSState } from "./Methods/SetWSState/SetWSState";
import { CreateNewMessage } from "./Methods/CreateNewMessage/CreateNewMessage";

export class WebSocketDomain extends DomainBase {
	public createNewMessage = CreateNewMessage.execute();
	public createNewWS = CreateNewWS.execute();
	public getMessages = GetMessages.execute();
	public getWsById = GetWsById.execute();
	public getWSList = GetWSList.execute();
	public getWSState = GetWSState.execute();
	public setWsList = SetWsList.execute();
	public setWSState = SetWSState.execute();
}
