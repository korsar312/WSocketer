import styles from "./AtomPaper_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import AtomPaperModel from "../AtomPaper.model";

const AtomPaper_Public: NFC<typeof AtomPaperModel> = (props) => {
	const { children, color, extStyle, isFull, ...restDiv } = props;

	return (
		<div {...restDiv} css={[styles.wrapper(color), isFull && styles.full, extStyle]}>
			{children}
		</div>
	);
};

export default AtomPaper_Public;
