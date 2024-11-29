import { GetColor } from "./Methods/GetColor/GetColor";
import { Hex2rgba } from "./Methods/Hex2rgba/Hex2rgba";
import { GetFont } from "./Methods/GetFont/GetFont";
import { GetFontData } from "./Methods/GetFontData/GetFontData";

export class StylesDomain {
	public getFont = GetFont.execute();
	public hex2rgba = Hex2rgba.execute();
	public getColor = GetColor.execute();
	public getFontData = GetFontData.execute();
}
