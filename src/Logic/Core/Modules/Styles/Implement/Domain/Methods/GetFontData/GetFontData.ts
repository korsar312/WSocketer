import { StylesInterface } from "../../../../Styles.interface";

type TProperty = "size";

export class GetFontData {
	static execute() {
		return function (styleObj: StylesInterface.TObj, font: StylesInterface.EFont, type: TProperty) {
			function fontData(type: "size"): number;
			function fontData(type: TProperty): number {
				switch (type) {
					case "size":
						return parseInt(styleObj.font[font].fontSize as string);
				}
			}

			return fontData(type);
		};
	}
}
