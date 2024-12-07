import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

class AtomDropdown_PublicStyles extends Styles {
	private bRad = 10;
	private pad = 6;

	public wrapper(color: StylesInterface.TColorChoice): CSSObject {
		return {
			position: "relative",
			background: this.getColors(color),
			padding: this.pad,
			borderRadius: this.bRad,
		};
	}

	public variable(color: StylesInterface.TColorChoice): CSSObject {
		return {
			position: "absolute",
			left: 0,
			minWidth: "max-content",
			background: this.getColors(color),
			height: "max-content",
			maxHeight: 100,
			borderRadius: this.bRad,
			top: `calc(100% + ${this.pad}px)`,
		};
	}

	public scrollCorrect: CSSObject = {
		marginTop: this.bRad,
		marginBottom: this.bRad,
	};

	public list: CSSObject = {
		padding: this.pad,
		listStyleType: "none",
	};

	public element: CSSObject = {};
}

export default new AtomDropdown_PublicStyles();
