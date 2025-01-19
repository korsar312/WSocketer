import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class MoleculeInputControl_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		...this.mixins.flexCenter,
		gap: 10,
		width: "100%",
		height: 70,
		boxSizing: "border-box",
	};

	public element: CSSObject = {
		...this.mixins.flexGorCenter,
		flex: 1,
	};
}

export default new MoleculeInputControl_PublicStyles();
