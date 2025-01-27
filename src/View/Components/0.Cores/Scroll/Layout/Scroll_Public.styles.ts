import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class Scroll_PublicStyles extends Styles {
	private scrollSize = this.variables.scrollSize;

	public scroll(isHiddenScroll?: boolean): CSSObject {
		return {
			transitionBehavior: "allow-discrete",
			overflow: "overlay",
			height: "100%",

			"&::-webkit-scrollbar": {
				width: this.scrollSize,
				display: isHiddenScroll ? "none" : "initial",
			},
		};
	}

	public extScroll(val?: CSSObject): CSSObject {
		return { "&::-webkit-scrollbar-track": { ...val } };
	}
}

export default new Scroll_PublicStyles();
