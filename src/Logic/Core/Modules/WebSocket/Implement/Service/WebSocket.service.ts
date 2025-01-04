import { ServiceBase } from "../../../../Helpers/Creators/Factory/Variables/Modules/Service";
import { EStoreList } from "../../../../Helpers/Creators/Factory/Factory.enam";
import APIRequest from "../../../../API/API";
import { CloseConnection } from "./Methods/CloseConnection/CloseConnection";
import { OpenConnection } from "./Methods/OpenConnection/OpenConnection";
import { SendMessage } from "./Methods/SendMessage/SendMessage";

const typeService = EStoreList.WebSocketStore;

export class WebSocketService extends ServiceBase<typeof typeService> {
	constructor(Api: typeof APIRequest) {
		super({ Api, Type: typeService });
	}

	public closeConnection = CloseConnection.execute();
	public openConnection = OpenConnection.execute();
	public sendMessage = SendMessage.execute();
}
