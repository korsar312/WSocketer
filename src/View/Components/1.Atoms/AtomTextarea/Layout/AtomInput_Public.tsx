import styles from "./AtomInput_Public.styles";
import AtomInputModel from "../AtomInput.model";
import { NFC } from "Logic/Libs/Util/TypesUtils";

const AtomInput_Public: NFC<typeof AtomInputModel> = (props) => {
	const { textObj, onClick, handleChange, text, extStyle, name, type } = props;

	return (
		<input
			type={type}
			name={name}
			defaultValue={String(text)}
			css={[styles.wrapper, styles.text(textObj), extStyle]}
			onClick={onClick}
			onInput={handleChange}
		/>
	);
};

export default AtomInput_Public;
