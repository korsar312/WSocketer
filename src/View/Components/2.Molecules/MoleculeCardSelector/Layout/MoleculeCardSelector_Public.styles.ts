import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class MoleculeCardSelector_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		...this.mixins.flexCenterCol,
		padding: 10,
	};
}

export default new MoleculeCardSelector_PublicStyles();
