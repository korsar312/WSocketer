import { NFC } from "Logic/Libs/Util/TypesUtils";
import ChatPageModel from "../WidgetMessageValue.model";
import styles from "./WidgetMessageValue.styles";
import AtomPaperG from "View/Components/1.Atoms/AtomPaper/Variables/AtomPaperG";
import BaseAnimation from "../../../0.Cores/BaseAnimation";
import AtomTextareaFull from "../../../1.Atoms/AtomTextarea/Variables/AtomTextareaFull";

const WidgetMessageValue_Public: NFC<typeof ChatPageModel> = (props) => {
	const { isShow, value, messageId } = props;

	return (
		<AtomPaperG extStyle={styles.elementWrap}>
			<BaseAnimation type={"slice"} extStyle={styles.element} deps={[messageId, isShow]}>
				{isShow && <AtomTextareaFull text={value} />}
			</BaseAnimation>
		</AtomPaperG>
	);
};

export default WidgetMessageValue_Public;
