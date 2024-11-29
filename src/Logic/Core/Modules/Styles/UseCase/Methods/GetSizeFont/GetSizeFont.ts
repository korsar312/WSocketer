import { StylesInterface } from "../../../Styles.interface";

export class GetSizeFont {
	static execute(module: StylesInterface.IModules) {
		return function (font: StylesInterface.EFont) {
			const store = module.service.store.getStore();

			return module.domain.getFontData(store, font, "size");
		};
	}
}
