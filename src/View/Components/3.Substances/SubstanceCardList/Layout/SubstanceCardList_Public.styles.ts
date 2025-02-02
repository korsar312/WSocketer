import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class SubstanceCardList_PublicStyles extends Styles {
	private pad = this.variables.radiusStandard;

	public oneRow: CSSObject = {
		display: "grid",
		gridAutoFlow: "column",
		boxSizing: "border-box",
	};

	public sizeList1: CSSObject = {
		gridTemplateRows: 100,
		gridAutoColumns: "minmax(200px, 1fr)",
		padding: this.pad,
		gap: this.pad,
	};

	public dir: CSSObject = {
		display: "grid",
		boxSizing: "border-box",
	};

	public sizeList2: CSSObject = {
		gridAutoRows: 100,
		padding: this.pad,
		gap: this.pad,
		gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
	};
}

export default new SubstanceCardList_PublicStyles();
