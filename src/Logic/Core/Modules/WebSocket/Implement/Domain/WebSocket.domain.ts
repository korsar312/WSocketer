import { DomainBase } from "../../../../Helpers/Creators/Factory/Variables/Modules/Domain";
import { CreateNewWS } from "./Methods/CreateNewWS/CreateNewWS";
import { GetWsById } from "./Methods/GetWsById/GetWsById";
import { GetMessages } from "./Methods/GetMessages/GetMessages";
import { GetWSState } from "./Methods/GetWSState/GetWSState";
import { GetObjState } from "./Methods/GetObjState/GetObjState";
import { SetWsList } from "./Methods/SetWsList/SetWsList";
import { SetWSState } from "./Methods/SetWSState/SetWSState";
import { CreateNewMessage } from "./Methods/CreateNewMessage/CreateNewMessage";
import { GetWSMessageState } from "./Methods/GetWSMessageState/GetWSMessageState";
import { IsMessageReceive } from "./Methods/IsMessageReceive/IsMessageReceive";
import { GetWsMessage } from "./Methods/GetWsMessage/GetWsMessage";
import { SetWsChoice } from "./Methods/SetWsChoice/SetWsChoice";
import { GetAllProtocolsConnect } from "./Methods/GetAllProtocolsConnect/GetAllProtocolsConnect";

export class WebSocketDomain extends DomainBase {
	public createNewMessage = CreateNewMessage.execute();
	public getAllProtocolsConnect = GetAllProtocolsConnect.execute();
	public createNewWS = CreateNewWS.execute();
	public getMessages = GetMessages.execute();
	public getWsMessage = GetWsMessage.execute();
	public getWSMessageState = GetWSMessageState.execute();
	public getWsById = GetWsById.execute();
	public isMessageReceive = IsMessageReceive.execute();
	public getObjState = GetObjState.execute();
	public getWSState = GetWSState.execute();
	public setWsList = SetWsList.execute();
	public setWSState = SetWSState.execute();
	public setWsChoice = SetWsChoice.execute();
}
