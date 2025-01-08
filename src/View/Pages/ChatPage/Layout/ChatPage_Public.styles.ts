import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class ChatPage_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		display: "flex",
		gap: 16,
		height: "100%",
	};

	public chosen: CSSObject = {
		padding: 16,
		flex: 1,
	};

	public list(isLong: boolean): CSSObject {
		return { flex: isLong ? "initial" : 1 };
	}

	public elem(isLong: boolean): CSSObject {
		return {
			padding: 16,
			display: "flex",
			flexDirection: isLong ? "column" : "initial",
			flexWrap: "wrap",
			gap: 16,
		};
	}
}

export default new ChatPage_PublicStyles();
