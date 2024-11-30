import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class MoleculeInputControl_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		...this.mixins.flexCenter,
		gap: 10,
		width: "100%",
		height: 80,
		boxSizing: "border-box",
	};
}

export default new MoleculeInputControl_PublicStyles();
