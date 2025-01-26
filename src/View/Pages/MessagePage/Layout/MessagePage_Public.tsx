import styles from "./MessagePage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import MessagePageModel from "../MessagePage.model";
import AtomPaperG from "View/Components/1.Atoms/AtomPaper/Variables/AtomPaperG";
import Scroll from "../../../Components/0.Cores/Scroll";
import AtomTextareaFull from "../../../Components/1.Atoms/AtomTextarea/Variables/AtomTextareaFull";
import TemplateModalCreateMessageGroup from "../../../Components/4.Templates/TemplateModalCreateMessageGroup";
import TemplateCardMessageGroup from "../../../Components/4.Templates/TemplateCardMessageGroup";

const MessagePage_Public: NFC<typeof MessagePageModel> = (props) => {
	const { isShowCreateGroup, toggleShowCreateWs, facadeCreateGroup } = props;

	return (
		<div css={styles.wrapper}>
			<TemplateModalCreateMessageGroup submit={facadeCreateGroup} isShow={isShowCreateGroup} />

			<AtomPaperG extStyle={styles.dirList}>
				<Scroll.div>
					<TemplateCardMessageGroup onClick={() => toggleShowCreateWs(true)} />
				</Scroll.div>
			</AtomPaperG>

			<div css={styles.dirWrap}>
				<AtomPaperG extStyle={styles.dir}>
					<Scroll.div>23456</Scroll.div>
				</AtomPaperG>

				<AtomPaperG extStyle={styles.element}>
					<AtomTextareaFull />
				</AtomPaperG>
			</div>
		</div>
	);
};

export default MessagePage_Public;
