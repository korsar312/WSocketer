import styles from "./AtomTextarea_Public.styles";
import AtomTextareaModel from "../AtomTextarea.model";
import { NFC } from "Logic/Libs/Util/TypesUtils";

const AtomTextarea_Public: NFC<typeof AtomTextareaModel> = (props) => {
	const { textObj, onClick, handleChange, text, extStyle, name } = props;

	return (
		<textarea
			name={name}
			defaultValue={String(text)}
			css={[styles.wrapper, styles.text(textObj), extStyle]}
			onClick={onClick}
			onChange={handleChange}
		/>
	);
};

export default AtomTextarea_Public;
