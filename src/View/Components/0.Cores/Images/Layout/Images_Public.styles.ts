import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { TImagesSize } from "../index";

class Images_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		transition: this.variables.fastTransition,
	};

	public size(size: TImagesSize = 20): CSSObject {
		return {
			width: size,
			height: size,
		};
	}

	public color(colors: StylesInterface.TColorChoice): CSSObject {
		return { path: { fill: this.getColors(colors), transition: this.variables.fastTransition } };
	}
}

export default new Images_PublicStyles();
