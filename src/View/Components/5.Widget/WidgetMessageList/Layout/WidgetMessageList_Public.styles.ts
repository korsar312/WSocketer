import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class WidgetMessageList_PublicStyles extends Styles {
	private pad = this.variables.radiusStandard;

	public dirWrap: CSSObject = {
		position: "relative",
		height: "100%",
	};

	public dir: CSSObject = {
		display: "grid",
		gridAutoRows: 100,
		gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
		padding: this.pad,
		boxSizing: "border-box",
		gap: this.pad,
	};

	public elementWrap: CSSObject = {
		position: "relative",
		flex: 4,
	};

	public element: CSSObject = {
		position: "relative",
		padding: this.pad,
		flex: 4,
	};
}

export default new WidgetMessageList_PublicStyles();
