import { InitStore } from "./Methods/InitStore/InitStore";
import Modules from "../Implement/Modules";
import { EModuleList } from "../../../Helpers/Creators/Factory/Factory.enam";
import { UseCaseBase } from "../../../Helpers/Creators/Factory/Variables/Modules/UseCase";
import { AddGroup } from "./Methods/AddGroup/AddGroup";
import { GetGroupList } from "./Methods/GetGroupList/GetGroupList";
import { GetGroupId } from "./Methods/GetGroupId/GetGroupId";
import { GetGroupName } from "./Methods/GetGroupName/GetGroupName";
import { GetMessageId } from "./Methods/GetMessageId/GetMessageId";
import { GetMessageList } from "./Methods/GetMessageList/GetMessageList";
import { GetMessageName } from "./Methods/GetMessageName/GetMessageName";
import { AddMessage } from "./Methods/AddMessage/AddMessage";
import { GetMessageById } from "./Methods/GetMessageById/GetMessageById";
import { GetGroupById } from "./Methods/GetGroupById/GetGroupById";
import { GetMessageValue } from "./Methods/GetMessageValue/GetMessageValue";

export class MessagesUseCase extends UseCaseBase<EModuleList.MessagesModule> {
	constructor() {
		super({ modules: Modules, initFn: InitStore });
	}

	public addGroup = AddGroup.execute(this.module);
	public getGroupId = GetGroupId.execute(this.module);
	public getGroupById = GetGroupById.execute(this.module);
	public getGroupName = GetGroupName.execute(this.module);
	public getGroupList = GetGroupList.execute(this.module);

	public addMessage = AddMessage.execute(this.module);
	public getMessageId = GetMessageId.execute(this.module);
	public getMessageById = GetMessageById.execute(this.module);
	public getMessageName = GetMessageName.execute(this.module);
	public getMessageList = GetMessageList.execute(this.module);
	public getMessageValue = GetMessageValue.execute(this.module);
}
