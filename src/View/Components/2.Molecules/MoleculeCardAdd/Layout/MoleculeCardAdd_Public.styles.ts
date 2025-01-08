import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class MoleculeCardAdd_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		...this.mixins.flexCenter,
		width: "100%",
		height: "100%",
	};
}

export default new MoleculeCardAdd_PublicStyles();
