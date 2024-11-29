import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class SubstanceAsideMenu_PublicStyles extends Styles {
	public wrapper(): CSSObject {
		const padV = 30;

		return {
			...this.mixins.flexGorCenter,
			flexDirection: "column",
			width: 220,
			padding: `${padV}px 42px`,
			height: `calc(100% - ${padV * 2}px)`,
		};
	}

	public work: CSSObject = {
		...this.mixins.flexCenterCol,
		gap: 70,
	};

	public headWrap: CSSObject = {
		...this.mixins.flexCenter,
		gap: 6,
	};

	public btnField: CSSObject = {
		...this.mixins.flexCol,
		width: "100%",
		gap: 38,
	};

	public btnWrap: CSSObject = {
		...this.mixins.flexCol,
		gap: 16,
	};

	public catWrap: CSSObject = {
		...this.mixins.flexCenter,
		flex: 1,
	};
}

export default new SubstanceAsideMenu_PublicStyles();
