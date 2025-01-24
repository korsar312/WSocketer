import { DomainBase } from "../../../../Helpers/Creators/Factory/Variables/Modules/Domain";
import { CreateNewWS } from "./Methods/CreateNewWS/CreateNewWS";
import { GetWsById } from "./Methods/GetWsById/GetWsById";
import { GetWSState } from "./Methods/GetWSState/GetWSState";
import { GetObjState } from "./Methods/GetObjState/GetObjState";
import { ModifyWsState } from "./Methods/ModifyWsState/ModifyWsState";
import { CreateNewMessage } from "./Methods/CreateNewMessage/CreateNewMessage";
import { GetWSMessageState } from "./Methods/GetWSMessageState/GetWSMessageState";
import { IsMessageReceive } from "./Methods/IsMessageReceive/IsMessageReceive";
import { GetWsMessage } from "./Methods/GetWsMessage/GetWsMessage";
import { GetAllProtocolsConnect } from "./Methods/GetAllProtocolsConnect/GetAllProtocolsConnect";
import { AddWsList } from "./Methods/AddWsList/AddWsList";
import { AddWsMessage } from "./Methods/AddWsMessage/AddWsMessage";

export class WebSocketDomain extends DomainBase {
	public createNewMessage = CreateNewMessage.execute();
	public getAllProtocolsConnect = GetAllProtocolsConnect.execute();
	public createNewWS = CreateNewWS.execute();
	public getWsMessage = GetWsMessage.execute();
	public getWSMessageState = GetWSMessageState.execute();
	public getWsById = GetWsById.execute();
	public isMessageReceive = IsMessageReceive.execute();
	public getObjState = GetObjState.execute();
	public getWSState = GetWSState.execute();
	public modifyWsState = ModifyWsState.execute();
	public addWsList = AddWsList.execute();
	public addWsMessage = AddWsMessage.execute();
}
