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
		position: "relative",
		margin: `34px 62px 0 62px`,
		flex: 1,
	};

	public scroll: CSSObject = {
		overflow: "auto",
		scrollbarGutter: "stable both-edges",

		"&::-webkit-scrollbar": {
			width: 22,
		},
	};
}
//-webkit-scrollbar-track
//-webkit-scrollbar-thumb
export default new PagesLayout_PublicStyles();
