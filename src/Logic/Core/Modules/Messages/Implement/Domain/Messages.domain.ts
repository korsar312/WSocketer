import { DomainBase } from "../../../../Helpers/Creators/Factory/Variables/Modules/Domain";
import { GetGroupList } from "./Methods/GetGroupList/GetGroupList";
import { GetGroupState } from "./Methods/GetGroupState/GetGroupState";
import { GetMessageState } from "./Methods/GetMessageState/GetMessageState";
import { SetGroupList } from "./Methods/SetGroupList/SetGroupList";
import { SetGroupState } from "./Methods/SetGroupState/SetGroupState";
import { SetMessageState } from "./Methods/SetMessageState/SetMessageState";
import { CreateGroup } from "./Methods/CreateGroup/CreateGroup";
import { AddGroup } from "./Methods/AddGroup/AddGroup";

export class MessagesDomain extends DomainBase {
	public addGroup = AddGroup.execute();
	public createGroup = CreateGroup.execute();

	public getGroupList = GetGroupList.execute();
	public setGroupList = SetGroupList.execute();

	public getGroupState = GetGroupState.execute();
	public setGroupState = SetGroupState.execute();

	public getMessageState = GetMessageState.execute();
	public setMessageState = SetMessageState.execute();
}
