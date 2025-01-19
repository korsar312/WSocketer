import { InitStore } from "./Methods/InitStore/InitStore";
import Modules from "../Implement/Modules";
import { EModuleList } from "../../../Helpers/Creators/Factory/Factory.enam";
import { UseCaseBase } from "../../../Helpers/Creators/Factory/Variables/Modules/UseCase";
import { CreateNewWs } from "./Methods/CreateNewWs/CreateNewWs";
import { OpenConnection } from "./Methods/OpenConnection/OpenConnection";
import { GetWsList } from "./Methods/GetWsList/GetWsList";
import { GetMessages } from "./Methods/GetMessages/GetMessages";
import { IsMessageReceive } from "./Methods/IsMessageReceive/IsMessageReceive";
import { GetMessageValue } from "./Methods/GetMessageValue/GetMessageValue";
import { GetMessageId } from "./Methods/GetMessageId/GetMessageId";
import { GetName } from "./Methods/GetName/GetName";
import { GetId } from "./Methods/GetId/GetId";
import { GetDesc } from "./Methods/GetDesc/GetDesc";
import { GetStatus } from "./Methods/GetStatus/GetStatus";
import { GetWsChoice } from "./Methods/GetWsChoice/GetWsChoice";
import { SetWsChoice } from "./Methods/SetWsChoice/SetWsChoice";
import { GetAllProtocolsConnect } from "./Methods/GetAllProtocolsConnect/GetAllProtocolsConnect";

export class WebSocketUseCase extends UseCaseBase<EModuleList.WebSocketModule> {
	constructor() {
		super({ modules: Modules, initFn: InitStore });
	}

	public createNewWs = CreateNewWs.execute(this.module);
	public openConnection = OpenConnection.execute(this.module);
	public getAllProtocolsConnect = GetAllProtocolsConnect.execute(this.module);
	public getWsList = GetWsList.execute(this.module);
	public getWsChoice = GetWsChoice.execute(this.module);
	public setWsChoice = SetWsChoice.execute(this.module);
	public getName = GetName.execute(this.module);
	public getId = GetId.execute(this.module);
	public getDesc = GetDesc.execute(this.module);
	public getStatus = GetStatus.execute(this.module);
	public getMessages = GetMessages.execute(this.module);
	public getMessageId = GetMessageId.execute(this.module);
	public getMessageValue = GetMessageValue.execute(this.module);
	public isMessageReceive = IsMessageReceive.execute(this.module);

	//public closeConnection = closeConnection.execute(this.module);
	//public getConnectionStatus = getConnectionStatus.execute(this.module);
	//public sendMessage = sendMessage.execute(this.module);
}
