import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class MoleculeCardItem_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		...this.mixins.flexVerCenter,
		padding: 10,
		gap: 6,
		width: 300,
		height: 80,
	};

	public text: CSSObject = {
		...this.mixins.flexCol,
		gap: 6,
	};
}

export default new MoleculeCardItem_PublicStyles();
