import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

class AtomPaper_PublicStyles extends Styles {
	public wrapper(color?: StylesInterface.TColorChoice): CSSObject {
		return {
			borderRadius: 20,
			background: this.getColors(color || StylesInterface.EColor.PRIME_3),
		};
	}
}

export default new AtomPaper_PublicStyles();
