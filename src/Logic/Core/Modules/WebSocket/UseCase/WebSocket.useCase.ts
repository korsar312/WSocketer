import { InitStore } from "./Methods/InitStore/InitStore";
import Modules from "../Implement/Modules";
import { EModuleList } from "../../../Helpers/Creators/Factory/Factory.enam";
import { UseCaseBase } from "../../../Helpers/Creators/Factory/Variables/Modules/UseCase";

const typeService = EModuleList.WebSocketModule;

export class WebSocketUseCase extends UseCaseBase<typeof typeService> {
	constructor() {
		super({ modules: Modules, initFn: InitStore });
	}
}
