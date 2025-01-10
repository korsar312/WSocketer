import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { TImagesSize } from "../../../0.Cores/Images";

class MoleculeCardItem_PublicStyles extends Styles {
	private padding = 10;

	public wrapper(imgSize: TImagesSize): CSSObject {
		const isFull = typeof imgSize === "string";

		return {
			//width: `calc(${this.padding * 2}px + ${imgSize}${isFull ? "" : "px"})`,
			overflow: "hidden",
		};
	}

	public content: CSSObject = {
		...this.mixins.flexVerCenter,
		padding: this.padding,
		gap: 6,
		maxWidth: 300,
		height: 80,
	};

	public text: CSSObject = {
		...this.mixins.flexCol,
		gap: 6,
	};
}

export default new MoleculeCardItem_PublicStyles();
