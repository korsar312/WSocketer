import { CreateStyleObj } from "./Methods/CreateStyleObj/CreateStyleObj";
import { GetColorList } from "./Methods/GetColorList/GetColorList";
import { GetFontList } from "./Methods/GetFontList/GetFontList";
import { EStoreList } from "../../../../Helpers/Creators/Factory/Factory.enam";
import { ServiceBase } from "../../../../Helpers/Creators/Factory/Variables/Modules/Service";
import APIRequest from "../../../../API/API";

const typeService = EStoreList.StyleStore;

export class StylesService extends ServiceBase<typeof typeService> {
	constructor(Api: typeof APIRequest) {
		super({ Api, Type: typeService });
	}

	public getColorList = GetColorList.execute();
	public getFontList = GetFontList.execute();
	public createStyleObj = CreateStyleObj.execute();
}
