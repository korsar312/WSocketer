import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { TAtomInputText } from "../index";
import { StylesInterface } from "../../../../../Logic/Core/Modules/Styles/Styles.interface";

class AtomTextarea_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		...this.mixins.flexCenter,
		width: "100%",
		background: this.getColors(false),
		outline: "none",
		border: "none",
		padding: "0",
		wordBreak: "break-all",
	};

	public text(textProp: TAtomInputText): CSSObject {
		return {
			...this.getFonts(textProp.font || StylesInterface.EFont.Mont_E_10),
			color: this.getColors(textProp.color),
		};
	}
}

export default new AtomTextarea_PublicStyles();
