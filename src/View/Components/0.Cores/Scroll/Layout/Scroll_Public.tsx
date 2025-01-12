import { NFC } from "Logic/Libs/Util/TypesUtils";
import ScrollModel from "../Scroll.model";
import { observer } from "mobx-react";
import styles from "./Scroll_Public.styles";

const Scroll: NFC<typeof ScrollModel> = (props) => {
	const { children, extStyle, extStyleScroll, noScrollBar, Tag, htmlRest } = props;

	return (
		<Tag css={[styles.scroll(noScrollBar), styles.extScroll(extStyleScroll), extStyle]} {...htmlRest}>
			{children}
		</Tag>
	);
};

export default observer(Scroll);
