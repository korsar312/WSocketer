import { CSSObject } from "@emotion/react";
import { Styles } from "Styles/Styles";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

class BackgroundLayout_PublicStyles extends Styles {
	public background(): CSSObject {
		return {
			...this.mixins.absolute,
			background: this.getColors(StylesInterface.EColor.PRIME_2),
			backgroundSize: "cover",
			backgroundPosition: "center",
		};
	}
}

export default new BackgroundLayout_PublicStyles();
