import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

class MoleculeTextBubble_PublicStyles extends Styles {
	public wrapper(color: StylesInterface.TColorChoice): CSSObject {
		return {
			background: this.getColors(color),
			borderRadius: this.variables.radiusStandard / 1.5,
		};
	}

	public block(isBlack: boolean): CSSObject {
		return {
			"&:hover": { background: this.getColors(isBlack ? StylesInterface.EColor.YELLOW_1 : StylesInterface.EColor.PRIME_4, 0.4) },
		};
	}
}

export default new MoleculeTextBubble_PublicStyles();
