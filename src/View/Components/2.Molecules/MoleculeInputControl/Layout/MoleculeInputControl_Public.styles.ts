import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class MoleculeInputControl_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		...this.mixins.flexCenter,
	};
}

export default new MoleculeInputControl_PublicStyles();
