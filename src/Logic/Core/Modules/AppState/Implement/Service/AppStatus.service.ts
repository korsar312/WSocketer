import { ServiceBase } from "../../../../Helpers/Creators/Factory/Variables/Modules/Service";
import { EStoreList } from "../../../../Helpers/Creators/Factory/Factory.enam";
import APIRequest from "../../../../API/API";

const typeService = EStoreList.AppStatusStore;

export class AppStatusService extends ServiceBase<typeof typeService> {
	constructor(Api: typeof APIRequest) {
		super({ Api, Type: typeService });
	}
}
