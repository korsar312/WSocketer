import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

class Paper_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		borderRadius: 20,
		background: this.getColors(StylesInterface.EColor.WHITE_3),
	};
}

export default new Paper_PublicStyles();
