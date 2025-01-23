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
import { GetAllProtocolsConnect } from "./Methods/GetAllProtocolsConnect/GetAllProtocolsConnect";
import { GetWSProtocol } from "./Methods/GetWSProtocol/GetWSProtocol";
import { GetWSLink } from "./Methods/GetWSLink/GetWSLink";
import { GetWsById } from "./Methods/GetWsById/GetWsById";

export class WebSocketUseCase extends UseCaseBase<EModuleList.WebSocketModule> {
	constructor() {
		super({ modules: Modules, initFn: InitStore });
	}

	public createNewWs = CreateNewWs.execute(this.module);
	public openConnection = OpenConnection.execute(this.module);
	public getAllProtocolsConnect = GetAllProtocolsConnect.execute(this.module);
	public getWSLink = GetWSLink.execute(this.module);
	public getWsList = GetWsList.execute(this.module);
	public getWSProtocol = GetWSProtocol.execute(this.module);
	public getName = GetName.execute(this.module);
	public getId = GetId.execute(this.module);
	public getDesc = GetDesc.execute(this.module);
	public getStatus = GetStatus.execute(this.module);
	public getMessages = GetMessages.execute(this.module);
	public getMessageId = GetMessageId.execute(this.module);
	public getMessageValue = GetMessageValue.execute(this.module);
	public isMessageReceive = IsMessageReceive.execute(this.module);
	public getWsById = GetWsById.execute(this.module);

	//public closeConnection = closeConnection.execute(this.module);
	//public getConnectionStatus = getConnectionStatus.execute(this.module);
	//public sendMessage = sendMessage.execute(this.module);
}
