import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react/dist/emotion-react.cjs";

class PagesLayout_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		position: "relative",
		display: "flex",
		height: "100vh",
	};

	public aside: CSSObject = {
		display: "flex",
		height: "100%",
	};

	public pages: CSSObject = {
		flex: 1,
		padding: "34px 62px 0 62px",
	};
}

export default new PagesLayout_PublicStyles();
