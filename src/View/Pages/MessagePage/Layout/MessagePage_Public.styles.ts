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
		padding: this.pad,
	};

	public dirWrap: CSSObject = {
		display: "flex",
		gap: this.pad,
		flex: 1,
	};

	public dir: CSSObject = {
		padding: this.pad,
		flex: 4,
	};

	public element: CSSObject = {
		padding: this.pad,
		flex: 2,
	};
}

export default new MessagePage_PublicStyles();
