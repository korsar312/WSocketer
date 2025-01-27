import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class MoleculeCardSelector_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		...this.mixins.flexCenterCol,
		height: "100%",
		boxSizing: "border-box",
		padding: 10,
	};
}

export default new MoleculeCardSelector_PublicStyles();
