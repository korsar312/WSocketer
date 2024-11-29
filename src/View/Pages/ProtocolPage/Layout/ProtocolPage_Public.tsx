import styles from "./ProtocolPage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import ProtocolPageModel from "../ProtocolPage.model";

const ProtocolPage_Public: NFC<typeof ProtocolPageModel> = (props) => {
	const {} = props;

	return <div css={styles.wrapper}></div>;
};

export default ProtocolPage_Public;
