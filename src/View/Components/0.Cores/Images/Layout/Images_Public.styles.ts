import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { TImagesSize } from "../index";

class Images_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		transition: this.variables.transition,
	};

	public size(size: TImagesSize = 20): CSSObject {
		return {
			width: size,
			maxHeight: size,
		};
	}

	public color(colors: StylesInterface.TColorChoice): CSSObject {
		const color = this.getColors(colors);

		return {
			stroke: color,
			path: { fill: color },
			div: { background: color },
		};
	}

	public disabled: CSSObject = {
		opacity: 0.6,
	};
}

export default new Images_PublicStyles();
