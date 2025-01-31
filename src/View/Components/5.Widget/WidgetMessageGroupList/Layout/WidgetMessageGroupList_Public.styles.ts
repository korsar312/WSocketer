import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class WidgetMessageGroupList_PublicStyles extends Styles {
	private pad = this.variables.radiusStandard;

	public dirList: CSSObject = {
		display: "grid",
		gridTemplateRows: 100,
		gridAutoColumns: "minmax(200px, 1fr)",
		gridAutoFlow: "column",
		boxSizing: "border-box",
		padding: this.pad,
		gap: this.pad,
	};
}

export default new WidgetMessageGroupList_PublicStyles();
