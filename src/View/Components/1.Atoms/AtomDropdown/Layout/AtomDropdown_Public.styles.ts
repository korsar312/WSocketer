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
			borderRadius: this.bRad,
			outline: "none",
			border: "none",
		};
	}

	public listWrap: CSSObject = {
		height: 0,
	};

	public dropWrap: CSSObject = {
		transform: "translateY(10px)",
		transition: this.variables.fastTransition,
		height: "auto",
		maxHeight: 0,
		maxWidth: 0,
		borderRadius: this.bRad,
	};

	public openDrop: CSSObject = {
		maxHeight: 100,
		maxWidth: 200,
	};

	public drop(color: StylesInterface.TColorChoice): CSSObject {
		return { background: this.getColors(color) };
	}

	public element: CSSObject = {
		padding: this.pad,
	};
}

export default new AtomDropdown_PublicStyles();
