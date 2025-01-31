import styles from "./MessagePage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import MessagePageModel from "../MessagePage.model";
import AtomPaperG from "View/Components/1.Atoms/AtomPaper/Variables/AtomPaperG";
import Scroll from "View/Components/0.Cores/Scroll";
import AtomTextareaFull from "View/Components/1.Atoms/AtomTextarea/Variables/AtomTextareaFull";
import TemplateModalCreateMessageGroup from "View/Components/4.Templates/TemplateModalCreateMessageGroup";
import TemplateCardMessageGroup from "View/Components/4.Templates/TemplateCardMessageGroup";
import ArrayAnimation from "View/Components/0.Cores/ArrayAnimation";
import TemplateCardMessage from "View/Components/4.Templates/TemplateCardMessage";
import BaseAnimation from "../../../Components/0.Cores/BaseAnimation";

const MessagePage_Public: NFC<typeof MessagePageModel> = (props) => {
	const {
		groupFn,
		messageFn,
		groupList,
		messageList,
		isShowCreate,
		handleDriver,
		isGroupChose,
		isMessageChose,
		messageValue,
		messageId,
	} = props;

	return (
		<div css={styles.wrapper}>
			<TemplateModalCreateMessageGroup submit={handleDriver} isShow={isShowCreate} />

			<AtomPaperG>
				<Scroll.div extStyle={styles.dirList}>
					<TemplateCardMessageGroup onClick={groupFn.openCreate} />

					<ArrayAnimation type={"sliceA"} uniqueKey={(_item, index) => groupList[index].id}>
						{groupList.map((el) => (
							<TemplateCardMessageGroup
								key={groupFn.getId(el)}
								isChose={groupFn.isChosen(el)}
								messageGroup={el}
								onClick={groupFn.chose}
							/>
						))}
					</ArrayAnimation>
				</Scroll.div>
			</AtomPaperG>

			<div css={styles.dirPlace}>
				<AtomPaperG extStyle={styles.dirWrap}>
					<BaseAnimation type={"slice"} deps={isGroupChose}>
						<Scroll.div extStyle={styles.dir}>
							{isGroupChose && (
								<>
									<TemplateCardMessage onClick={messageFn.openCreate} />

									<ArrayAnimation type={"slice"} uniqueKey={(_item, index) => messageList[index].id}>
										{messageList.map((el) => (
											<TemplateCardMessage
												key={messageFn.getId(el)}
												isChose={messageFn.isChosen(el)}
												message={el}
												onClick={messageFn.chose}
											/>
										))}
									</ArrayAnimation>
								</>
							)}
						</Scroll.div>
					</BaseAnimation>
				</AtomPaperG>

				<AtomPaperG extStyle={styles.elementWrap}>
					<BaseAnimation type={"slice"} extStyle={styles.element} deps={[isMessageChose, messageId]}>
						{isMessageChose && <AtomTextareaFull text={messageValue} />}
					</BaseAnimation>
				</AtomPaperG>
			</div>
		</div>
	);
};

export default MessagePage_Public;
