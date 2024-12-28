import { CreateNavigateObj } from "./Methods/CreateNavigateObj/CreateNavigateObj";
import { ServiceBase } from "../../../../Helpers/Creators/Factory/Variables/Modules/Service";
import { EStoreList } from "../../../../Helpers/Creators/Factory/Factory.enam";
import APIRequest from "../../../../API/API";

const typeService = EStoreList.RouterStore;

export class RoutesService extends ServiceBase<typeof typeService> {
	constructor(Api: typeof APIRequest) {
		super({ Api, Type: typeService });
	}

	public createNavigateObj = CreateNavigateObj.execute();
}
