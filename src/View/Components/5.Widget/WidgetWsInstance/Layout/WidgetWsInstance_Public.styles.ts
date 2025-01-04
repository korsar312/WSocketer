import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class WidgetWsInstance_PublicStyles extends Styles {
	public chat: CSSObject = {
		display: "flex",
		flexDirection: "column",
		gap: 26,
		height: "100%",
	};

	public content: CSSObject = {
		flex: 1,
		minHeight: 1,
	};
}

export default new WidgetWsInstance_PublicStyles();
