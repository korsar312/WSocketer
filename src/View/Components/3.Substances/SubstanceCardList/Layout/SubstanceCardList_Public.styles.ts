import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { TSubstanceCardListSize } from "View/Components/3.Substances/SubstanceCardList/SubstanceCardList.model";

class SubstanceCardList_PublicStyles extends Styles {
	public oneRow(size: TSubstanceCardListSize): CSSObject {
		return {
			display: "grid",
			gridAutoFlow: "column",
			boxSizing: "border-box",

			gridTemplateRows: size.rowSize,
			gridAutoColumns: `minmax(${size.minSize}, ${size.maxSize})`,
		};
	}

	public manyRow(size: TSubstanceCardListSize): CSSObject {
		return {
			display: "grid",
			boxSizing: "border-box",

			gridAutoRows: size.rowSize,
			gridTemplateColumns: `repeat(auto-fit, minmax(${size.minSize}, ${size.maxSize}))`,
		};
	}
}

export default new SubstanceCardList_PublicStyles();
