import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

class MoleculeTextBubble_PublicStyles extends Styles {
	public wrapper: CSSObject = {};

	public block: CSSObject = {
		"&:hover": { background: this.getColors(StylesInterface.EColor.SECOND_4, 0.4) },
	};
}

export default new MoleculeTextBubble_PublicStyles();
