import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

class AtomLine_PublicStyles extends Styles {
	public wrapper(color: StylesInterface.EColor): CSSObject {
		return {
			background: this.getColors(color),
			borderRadius: 100,
		};
	}

	public size(isHorizon: boolean): CSSObject {
		const min = 1.6;
		const max = "100%";

		const h = isHorizon ? min : max;
		const w = isHorizon ? max : min;

		return {
			minHeight: h,
			maxHeight: h,
			minWidth: w,
			maxWidth: w,
		};
	}
}

export default new AtomLine_PublicStyles();
