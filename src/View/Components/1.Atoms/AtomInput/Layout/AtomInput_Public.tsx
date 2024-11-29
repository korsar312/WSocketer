import styles from "./AtomInput_Public.styles";
import AtomInputModel from "../AtomInput.model";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import Text from "../../../0.Cores/Text";

const AtomInput_Public: NFC<typeof AtomInputModel> = (props) => {
	const { textObj, handleClick, handleChange } = props;

	return (
		<div css={styles.wrapper(textObj.font)} onClick={handleClick} onInput={handleChange}>
			<Text {...textObj} />;
		</div>
	);
};

export default AtomInput_Public;
