import { StylesInterface } from "../../../../Styles.interface";

export class GetColor {
	static execute() {
		return function (
			colorObj: StylesInterface.TObj,
			theme: StylesInterface.ETheme,
			color: StylesInterface.EColor,
		): StylesInterface.TColorHEXFormat {
			return colorObj.color[color][theme];
		};
	}
}
