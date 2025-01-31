import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class WidgetMessageValueStyles extends Styles {
	private pad = this.variables.radiusStandard;

	public elementWrap: CSSObject = {
		position: "relative",
		height: "100%",
	};

	public element: CSSObject = {
		padding: this.pad,
	};
}

export default new WidgetMessageValueStyles();
