import { GetColor } from "./Methods/GetColor/GetColor";
import { Hex2rgba } from "./Methods/Hex2rgba/Hex2rgba";
import { GetFont } from "./Methods/GetFont/GetFont";
import { GetFontData } from "./Methods/GetFontData/GetFontData";
import { DomainBase } from "../../../../Helpers/Creators/Factory/Variables/Modules/Domain";

export class StylesDomain extends DomainBase {
	public getFont = GetFont.execute();
	public hex2rgba = Hex2rgba.execute();
	public getColor = GetColor.execute();
	public getFontData = GetFontData.execute();
}
