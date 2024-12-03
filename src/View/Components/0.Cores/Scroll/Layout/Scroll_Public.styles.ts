import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class Scroll_PublicStyles extends Styles {
	private scrollSize = 2;
	private scrollPad = 6;

	public scroll: CSSObject = {
		overflow: "auto",
		scrollbarGutter: "stable",
		height: "100%",
		paddingRight: this.scrollPad,
		marginRight: -this.scrollSize - this.scrollPad,

		"&::-webkit-scrollbar": {
			width: this.scrollSize,
		},
	};

	public extScroll(val?: CSSObject): CSSObject {
		return { "&::-webkit-scrollbar-track": { ...val } };
	}
}

export default new Scroll_PublicStyles();
