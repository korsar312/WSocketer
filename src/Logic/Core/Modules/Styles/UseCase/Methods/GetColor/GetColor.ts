import { StylesInterface } from "../../../Styles.interface";

export class GetColor {
	static execute(module: StylesInterface.IModules) {
		return function (
			theme: StylesInterface.ETheme,
			color?: StylesInterface.TColorChoice,
			opacity: number = 1,
		): StylesInterface.TColorRGBFormat | "none" | "undefined" {
			const store = module.service.store.getStore();

			if (color === undefined || color === "null") return "undefined";
			if (color === false) return "none";

			const hex = module.domain.getColor(store, theme, color);

			return module.domain.hex2rgba(hex, opacity);
		};
	}
}
