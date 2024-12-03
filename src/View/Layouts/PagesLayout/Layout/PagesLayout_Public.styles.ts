import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react/dist/emotion-react.cjs";

class PagesLayout_PublicStyles extends Styles {
	private pad = 32;

	public wrapper: CSSObject = {
		position: "relative",
		display: "flex",
		height: "100vh",
	};

	public aside: CSSObject = {
		display: "flex",
		height: "100%",
	};

	public pagesWrap: CSSObject = {
		position: "relative",
		flex: 1,
		margin: "0 62px",
	};

	public pages: CSSObject = {
		paddingTop: this.pad,
		height: `calc(100% - ${this.pad}px)`,
	};

	public scroll: CSSObject = {
		marginTop: this.pad,
	};
}

export default new PagesLayout_PublicStyles();
