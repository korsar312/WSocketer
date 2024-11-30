import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

class AtomPaper_PublicStyles extends Styles {
	public wrapper(color?: StylesInterface.EColor): CSSObject {
		return {
			borderRadius: 20,
			background: this.getColors(color || StylesInterface.EColor.WHITE_3),
		};
	}
}

export default new AtomPaper_PublicStyles();
