import styles from "./Test2Page_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import Test2PageModel from "../Test2Page.model";
import ExampleTemplates from "View/Components/4.Templates/ExampleTemplates";

const Test2Page_Public: NFC<typeof Test2PageModel> = (props) => {
	const { handleClick } = props;

	return (
		<div css={styles.wrapper} onClick={handleClick}>
			<ExampleTemplates />
		</div>
	);
};

export default Test2Page_Public;
