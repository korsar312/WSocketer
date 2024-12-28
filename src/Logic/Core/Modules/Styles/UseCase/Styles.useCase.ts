import { InitStore } from "./Methods/InitStore/InitStore";
import { GetColor } from "./Methods/GetColor/GetColor";
import Modules from "../Implement/Modules";
import { GetFont } from "./Methods/GetFont/GetFont";
import { GetSizeFont } from "./Methods/GetSizeFont/GetSizeFont";
import { UseCaseBase } from "../../../Helpers/Creators/Factory/Variables/Modules/UseCase";
import { EModuleList } from "../../../Helpers/Creators/Factory/Factory.enam";

export class StylesUseCase extends UseCaseBase<EModuleList.StyleModule> {
	constructor() {
		super({ modules: Modules, initFn: InitStore });
	}

	public getFont = GetFont.execute(this.module);
	public getColor = GetColor.execute(this.module);
	public getSizeFont = GetSizeFont.execute(this.module);
}
