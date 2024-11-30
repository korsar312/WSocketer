import styles from "./AtomLine_Public.styles";
import AtomLineModel from "../AtomLine.model";
import { NFC } from "Logic/Libs/Util/TypesUtils";

const AtomLine_Public: NFC<typeof AtomLineModel> = (props) => {
	const { isHorizon, color } = props;

	return <div css={styles.wrapper(color, isHorizon)} />;
};

export default AtomLine_Public;
