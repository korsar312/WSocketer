import { DomainBase } from "../../../../Helpers/Creators/Factory/Variables/Modules/Domain";
import { GetGroupList } from "./Methods/GetGroupList/GetGroupList";
import { GetGroupState } from "./Methods/GetGroupState/GetGroupState";
import { GetMessageState } from "./Methods/GetMessageState/GetMessageState";
import { SetGroupList } from "./Methods/SetGroupList/SetGroupList";
import { SetGroupState } from "./Methods/SetGroupState/SetGroupState";
import { SetMessageState } from "./Methods/SetMessageState/SetMessageState";
import { CreateGroup } from "./Methods/CreateGroup/CreateGroup";
import { AddGroup } from "./Methods/AddGroup/AddGroup";
import { GetMessageList } from "./Methods/GetMessageList/GetMessageList";
import { SetMessageList } from "./Methods/SetMessageList/SetMessageList";
import { CreateMessage } from "./Methods/CreateMessage/CreateMessage";
import { AddMessage } from "./Methods/AddMessage/AddMessage";
import { GetGroupById } from "./Methods/GetGroupById/GetGroupById";
import { GetMessageById } from "./Methods/GetMessageById/GetMessageById";

export class MessagesDomain extends DomainBase {
	public addGroup = AddGroup.execute();
	public createGroup = CreateGroup.execute();
	public getGroupById = GetGroupById.execute();

	public getGroupList = GetGroupList.execute();
	public setGroupList = SetGroupList.execute();

	public getGroupState = GetGroupState.execute();
	public setGroupState = SetGroupState.execute();

	public addMessage = AddMessage.execute();
	public createMessage = CreateMessage.execute();
	public getMessageById = GetMessageById.execute();

	public getMessageState = GetMessageState.execute();
	public setMessageState = SetMessageState.execute();

	public getMessageList = GetMessageList.execute();
	public setMessageList = SetMessageList.execute();
}
