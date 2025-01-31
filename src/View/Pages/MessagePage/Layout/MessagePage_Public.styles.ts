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
		display: "grid",
		gridTemplateRows: 100,
		gridAutoColumns: "minmax(200px, 1fr)",
		gridAutoFlow: "column",
		boxSizing: "border-box",
		padding: this.pad,
		gap: this.pad,
	};

	public dirPlace: CSSObject = {
		minHeight: 0,
		display: "flex",
		gap: this.pad,
		flex: 1,
	};

	public dirWrap: CSSObject = {
		position: "relative",
		flex: 6,
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

export default new MessagePage_PublicStyles();
