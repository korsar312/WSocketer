import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { TAtomInputText } from "../index";

class AtomInput_PublicStyles extends Styles {
	public wrapper(font: StylesInterface.EFont): CSSObject {
		return {
			height: this.getSizeFonts(font),
			minHeight: 10,
			minWidth: 10,
			background: this.getColors(false),
			outline: "none",
			border: "none",
			padding: "0",
		};
	}

	public text(textProp: TAtomInputText): CSSObject {
		return {
			...this.getFonts(textProp.font),
			color: this.getColors(textProp.color),
		};
	}
}

export default new AtomInput_PublicStyles();
