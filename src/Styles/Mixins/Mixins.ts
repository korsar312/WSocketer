import { CSSObject } from "@emotion/react";

class MixinsVars {
	public flexCenter: CSSObject = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};

	public absolute: CSSObject = {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	};

	public fixed: CSSObject = {
		position: "fixed",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	};

	public lineBreak(line: number): CSSObject {
		return {
			display: "-webkit-box",
			WebkitLineClamp: line,
			WebkitBoxOrient: "vertical",
			overflow: "hidden",
		};
	}
}

const Mixins = new MixinsVars();
export default Mixins;
