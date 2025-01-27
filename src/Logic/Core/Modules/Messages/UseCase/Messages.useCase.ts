import { InitStore } from "./Methods/InitStore/InitStore";
import Modules from "../Implement/Modules";
import { EModuleList } from "../../../Helpers/Creators/Factory/Factory.enam";
import { UseCaseBase } from "../../../Helpers/Creators/Factory/Variables/Modules/UseCase";
import { AddGroup } from "./Methods/AddGroup/AddGroup";
import { GetGroupList } from "./Methods/GetGroupList/GetGroupList";
import { GetGroupId } from "./Methods/GetGroupId/GetGroupId";
import { GetGroupName } from "./Methods/GetGroupName/GetGroupName";

export class MessagesUseCase extends UseCaseBase<EModuleList.MessagesModule> {
	constructor() {
		super({ modules: Modules, initFn: InitStore });
	}

	public addGroup = AddGroup.execute(this.module);
	public getGroupId = GetGroupId.execute(this.module);
	public getGroupName = GetGroupName.execute(this.module);
	public getGroupList = GetGroupList.execute(this.module);
}
