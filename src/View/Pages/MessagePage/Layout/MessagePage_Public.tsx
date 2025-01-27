import styles from "./MessagePage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import MessagePageModel from "../MessagePage.model";
import AtomPaperG from "View/Components/1.Atoms/AtomPaper/Variables/AtomPaperG";
import Scroll from "../../../Components/0.Cores/Scroll";
import AtomTextareaFull from "../../../Components/1.Atoms/AtomTextarea/Variables/AtomTextareaFull";
import TemplateModalCreateMessageGroup from "../../../Components/4.Templates/TemplateModalCreateMessageGroup";
import TemplateCardMessageGroup from "../../../Components/4.Templates/TemplateCardMessageGroup";
import ArrayAnimation from "../../../Components/0.Cores/ArrayAnimation";

const MessagePage_Public: NFC<typeof MessagePageModel> = (props) => {
	const { isShowCreateGroup, toggleShowCreateWs, createGroup, groupList, choseGroup, isChosen, getIdWs } = props;

	return (
		<div css={styles.wrapper}>
			<TemplateModalCreateMessageGroup submit={createGroup} isShow={isShowCreateGroup} />

			<AtomPaperG>
				<Scroll.div extStyle={styles.elem}>
					<TemplateCardMessageGroup onClick={() => toggleShowCreateWs(true)} />

					<ArrayAnimation type={"sliceA"} uniqueKey={(_item, index) => groupList[index].id}>
						{groupList.map((el) => (
							<TemplateCardMessageGroup key={getIdWs(el)} isChose={isChosen(el)} messageGroup={el} onClick={choseGroup} />
						))}
					</ArrayAnimation>
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
