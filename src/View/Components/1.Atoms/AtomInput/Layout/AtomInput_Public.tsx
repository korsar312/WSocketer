import styles from "./AtomInput_Public.styles";
import AtomInputModel from "../AtomInput.model";
import { NFC } from "Logic/Libs/Util/TypesUtils";

const AtomInput_Public: NFC<typeof AtomInputModel> = (props) => {
	const { textObj, handleClick, handleChange, text, extStyle, name } = props;

	return (
		<input
			name={name}
			defaultValue={String(text)}
			css={[styles.wrapper(textObj.font), styles.text(textObj), extStyle]}
			onClick={handleClick}
			onInput={handleChange}
		/>
	);
};

export default AtomInput_Public;
