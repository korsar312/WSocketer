import styles from "./Scroll_Public.styles";
import { observer } from "mobx-react";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import ScrollModel from "../Scroll.model";

const Scroll: NFC<typeof ScrollModel> = (props) => {
	const { children, extStyle, extStyleScroll, noScrollBar, Tag } = props;

	return <Tag css={[styles.scroll(noScrollBar), styles.extScroll(extStyleScroll), extStyle]}>{children}</Tag>;
};

export default observer(Scroll);
