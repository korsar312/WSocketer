import { InitStore } from "./Methods/InitStore/InitStore";
import Modules from "../Implement/Modules";
import { EModuleList } from "../../../Helpers/Creators/Factory/Factory.enam";
import { UseCaseBase } from "../../../Helpers/Creators/Factory/Variables/Modules/UseCase";
import { CreateNewWs } from "./Methods/CreateNewWs/CreateNewWs";
import { OpenConnection } from "./Methods/OpenConnection/OpenConnection";

export class WebSocketUseCase extends UseCaseBase<EModuleList.WebSocketModule> {
	constructor() {
		super({ modules: Modules, initFn: InitStore });
	}

	public createNewWs = CreateNewWs.execute(this.module);
	public openConnection = OpenConnection.execute(this.module);
	//public closeConnection = closeConnection.execute(this.module);
	//public getConnectionStatus = getConnectionStatus.execute(this.module);
	//public getMessages = getMessages.execute(this.module);
	//public sendMessage = sendMessage.execute(this.module);
}
