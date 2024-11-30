import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

class AtomButton_PublicStyles extends Styles {
	public wrapper(isFullWidth?: boolean): CSSObject {
		return {
			...this.mixins.flexCenter,
			justifyContent: "space-between",
			transition: this.variables.fastTransition,
			width: isFullWidth ? "100%" : "auto",
			gap: 4,
			cursor: "pointer",

			"&:hover": {
				opacity: 0.5,
			},
		};
	}

	public icon: CSSObject = {
		...this.mixins.flexCenter,
		gap: 4,
	};

	public color(color: StylesInterface.TColorChoice): CSSObject {
		return {
			background: this.getColors(color),
		};
	}
}

export default new AtomButton_PublicStyles();
