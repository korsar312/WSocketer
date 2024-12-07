import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class ChatPage_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		display: "flex",
		flexDirection: "column",
		gap: 26,
		height: "100%",
	};
}

export default new ChatPage_PublicStyles();
