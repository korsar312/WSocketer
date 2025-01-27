import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class MessagePage_PublicStyles extends Styles {
	private pad = this.variables.radiusStandard;

	public wrapper: CSSObject = {
		...this.mixins.flexCol,
		height: "100%",
		gap: this.pad,
	};

	public dirList: CSSObject = {
		display: "flex",
		height: "100%",
		alignItems: "center",
		padding: this.pad,
		boxSizing: "border-box",
		gap: this.pad,
	};

	public dirWrap: CSSObject = {
		minHeight: 0,
		display: "flex",
		gap: this.pad,
		flex: 1,
	};

	public dir: CSSObject = {
		padding: this.pad,
		flex: 6,
	};

	public element: CSSObject = {
		padding: this.pad,
		flex: 4,
	};

	public elem: CSSObject = {
		padding: this.variables.radiusStandard,
		boxSizing: "border-box",
		display: "flex",
		gap: 16,
	};
}

export default new MessagePage_PublicStyles();
