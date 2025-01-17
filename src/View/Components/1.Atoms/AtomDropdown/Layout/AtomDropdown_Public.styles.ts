import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

class AtomDropdown_PublicStyles extends Styles {
	private bRad = 10;
	private pad = 6;

	public wrapper: CSSObject = { borderRadius: this.bRad };
	public element: CSSObject = { padding: this.pad };

	public listWrap: CSSObject = {
		position: "relative",
		transition: this.variables.fastTransition,
		maxHeight: 0,
		width: 0,
	};

	public dropWrap: CSSObject = {
		position: "absolute",
		transform: "translateY(6px)",
		transition: this.variables.fastTransition,
		borderRadius: this.bRad,
		marginRight: 0,
		paddingRight: 0,
	};

	public openList(size: number): CSSObject {
		return { width: size };
	}

	public openDrop(size: number): CSSObject {
		return { height: size };
	}

	public color(color: StylesInterface.TColorChoice): CSSObject {
		return { backgroundColor: this.getColors(color) };
	}

	public hidden: CSSObject = {
		position: "absolute",
		visibility: "hidden",
	};
}

export default new AtomDropdown_PublicStyles();
