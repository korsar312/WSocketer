import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

class AtomInput_PublicStyles extends Styles {
	public wrapper(font: StylesInterface.EFont): CSSObject {
		return {
			height: this.getSizeFonts(font),
			minHeight: 10,
			minWidth: 10,
			backgroundColor: "white",
		};
	}
}

export default new AtomInput_PublicStyles();
