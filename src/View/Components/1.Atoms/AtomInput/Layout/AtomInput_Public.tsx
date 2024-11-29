import styles from "./AtomInput_Public.styles";
import AtomInputModel from "../AtomInput.model";
import { NFC } from "Logic/Libs/Util/TypesUtils";

const AtomInput_Public: NFC<typeof AtomInputModel> = (props) => {
	const { textObj, handleClick, handleChange } = props;

	return <input css={[styles.wrapper(textObj.font), styles.text(textObj)]} onClick={handleClick} onInput={handleChange} />;
};

export default AtomInput_Public;
