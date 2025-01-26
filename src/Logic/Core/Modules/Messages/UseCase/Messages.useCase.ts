import { InitStore } from "./Methods/InitStore/InitStore";
import Modules from "../Implement/Modules";
import { EModuleList } from "../../../Helpers/Creators/Factory/Factory.enam";
import { UseCaseBase } from "../../../Helpers/Creators/Factory/Variables/Modules/UseCase";

export class MessagesUseCase extends UseCaseBase<EModuleList.MessagesModule> {
	constructor() {
		super({ modules: Modules, initFn: InitStore });
	}
}
