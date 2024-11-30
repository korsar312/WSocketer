import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

class AtomLine_PublicStyles extends Styles {
	public wrapper(color: StylesInterface.EColor, isHorizon: boolean): CSSObject {
		const min = 2;
		const max = "100%";

		return {
			height: isHorizon ? min : max,
			width: isHorizon ? max : min,
			background: this.getColors(color),
		};
	}
}

export default new AtomLine_PublicStyles();
