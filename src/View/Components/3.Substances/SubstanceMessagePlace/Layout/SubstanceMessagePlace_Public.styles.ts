import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class SubstanceMessagePlace_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		display: "flex",
		flexDirection: "column-reverse",
		boxSizing: "border-box",
		gap: 20,
	};

	public rowLeft: CSSObject = { display: "flex", justifyContent: "flex-start" };
	public rowRight: CSSObject = { display: "flex", justifyContent: "flex-end" };

	public message: CSSObject = {
		maxWidth: "80%",
	};
}

export default new SubstanceMessagePlace_PublicStyles();
