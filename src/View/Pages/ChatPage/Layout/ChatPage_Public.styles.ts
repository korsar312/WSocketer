import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class ChatPage_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		gap: 16,
	};

	public el: CSSObject = {
		width: "300px",
		height: "400px",
	};
}

export default new ChatPage_PublicStyles();
