import { StylesInterface } from "../../../../Styles.interface";

type TProperty = "size";

export class GetFontData {
	static execute() {
		return function (styleObj: StylesInterface.TObj, font: StylesInterface.EFont, type: TProperty) {
			function fontData(type: "size"): number;
			function fontData(type: TProperty): number {
				switch (type) {
					case "size":
						const fontSize = parseInt(styleObj.font[font].fontSize as string);
						const lineSize = parseInt(styleObj.font[font].lineHeight as string) / 4;

						return fontSize + lineSize;
				}
			}

			return fontData(type);
		};
	}
}
