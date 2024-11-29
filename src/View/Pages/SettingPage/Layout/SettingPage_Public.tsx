import styles from "./SettingPage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import SettingPageModel from "../SettingPage.model";

const SettingPage_Public: NFC<typeof SettingPageModel> = (props) => {
	const {} = props;

	return <div css={styles.wrapper}></div>;
};

export default SettingPage_Public;
