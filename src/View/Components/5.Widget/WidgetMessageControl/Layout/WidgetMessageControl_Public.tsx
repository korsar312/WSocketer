import { NFC } from "Logic/Libs/Util/TypesUtils";
import ChatPageModel from "View/Components/5.Widget/WidgetMessageControl/WidgetMessageControl.model";
import styles from "View/Components/5.Widget/WidgetMessageControl/Layout/WidgetMessageControl_Public.styles";
import TemplateModalCreateMessageGroup from "View/Components/4.Templates/TemplateModalCreateMessageGroup";
import TemplateMessageGroupList from "View/Components/4.Templates/TemplateMessageGroupList";
import TemplateMessageWithGroupList from "View/Components/4.Templates/TemplateMessageWithGroupList";
import AtomPaperG from "View/Components/1.Atoms/AtomPaper/Variables/AtomPaperG";
import BaseAnimation from "View/Components/0.Cores/BaseAnimation";
import AtomTextareaFull from "View/Components/1.Atoms/AtomTextarea/Variables/AtomTextareaFull";

const WidgetMessageControl_Public: NFC<typeof ChatPageModel> = (props) => {
	const { groupFn, messageFn, isShowCreate, handleDriver, groupId, messageId, isShow, value, saveChange, isEditable, isMin } = props;

	return (
		<div css={styles.wrapper}>
			{isEditable && <TemplateModalCreateMessageGroup submit={handleDriver} isShow={isShowCreate} />}

			<TemplateMessageGroupList
				isSmall={isMin}
				choiceId={groupId}
				click={groupFn.chose}
				clickCreate={isEditable ? groupFn.openCreate : undefined}
				extStyle={styles.lists(isMin)}
			/>

			<div css={styles.dirPlace}>
				<div css={styles.pub.f6}>
					<TemplateMessageWithGroupList
						isSmall={isMin}
						choiceId={messageId}
						groupId={groupId}
						click={messageFn.chose}
						clickCreate={isEditable ? messageFn.openCreate : undefined}
						extStyle={styles.lists(isMin)}
					/>
				</div>

				{isEditable && (
					<div css={styles.pub.f4}>
						<AtomPaperG extStyle={styles.elementWrap}>
							<BaseAnimation type={"slice"} extStyle={styles.element} deps={[messageId, isShow]}>
								{isShow && <AtomTextareaFull onChange={saveChange} text={value} />}
							</BaseAnimation>
						</AtomPaperG>
					</div>
				)}
			</div>
		</div>
	);
};

export default WidgetMessageControl_Public;
