import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class WidgetMessageControl_PublicStyles extends Styles {
	private pad = this.variables.radiusStandard;

	public wrapper: CSSObject = {
		...this.mixins.flexCol,
		height: "100%",
		gap: this.pad,
	};

	public dirPlace: CSSObject = {
		minHeight: 0,
		display: "flex",
		gap: this.pad,
		flex: 1,
	};

	public elementWrap: CSSObject = {
		position: "relative",
		height: "100%",
	};

	public element: CSSObject = {
		padding: this.pad,
	};
}

export default new WidgetMessageControl_PublicStyles();
