import { InitStore } from "./Methods/InitStore/InitStore";
import { GetColor } from "./Methods/GetColor/GetColor";
import Modules from "../Implement/Modules";
import { GetFont } from "./Methods/GetFont/GetFont";
import { GetSizeFont } from "./Methods/GetSizeFont/GetSizeFont";

export class StylesUseCase {
	private module = Modules.invoker();
	private initStore = InitStore.execute(this.module);

	constructor() {
		this.initStore();
	}

	public getFont = GetFont.execute(this.module);
	public getColor = GetColor.execute(this.module);
	public getSizeFont = GetSizeFont.execute(this.module);
}
