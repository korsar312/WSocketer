import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { TAtomInputText } from "../index";
import { StylesInterface } from "../../../../../Logic/Core/Modules/Styles/Styles.interface";

class AtomTextarea_PublicStyles extends Styles {
	public wrapper: CSSObject = {};

	public text(textProp: TAtomInputText): CSSObject {
		return {
			...this.getFonts(textProp.font || StylesInterface.EFont.Mont_E_10),
			color: this.getColors(textProp.color),
		};
	}
}

export default new AtomTextarea_PublicStyles();
