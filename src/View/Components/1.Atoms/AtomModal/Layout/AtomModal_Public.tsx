import styles from "./AtomModal_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import AtomModalModel from "../AtomModal.model";

const AtomModal_Public: NFC<typeof AtomModalModel> = (props) => {
	const { children, refDialog, close, isShow } = props;

	return (
		<dialog ref={refDialog} onCancel={close} css={styles.wrapper}>
			{children}
		</dialog>
	);
};

export default AtomModal_Public;
