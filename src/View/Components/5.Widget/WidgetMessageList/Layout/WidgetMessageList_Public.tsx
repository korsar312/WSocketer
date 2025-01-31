import { NFC } from "Logic/Libs/Util/TypesUtils";
import ChatPageModel from "../WidgetMessageList.model";
import styles from "./WidgetMessageList_Public.styles";
import Scroll from "../../../0.Cores/Scroll";
import ArrayAnimation from "../../../0.Cores/ArrayAnimation";
import AtomPaperG from "../../../1.Atoms/AtomPaper/Variables/AtomPaperG";
import BaseAnimation from "../../../0.Cores/BaseAnimation";
import TemplateCardMessage from "../../../4.Templates/TemplateCardMessage";

const WidgetMessageList_Public: NFC<typeof ChatPageModel> = (props) => {
	const { click, messageList, clickCreate, isShow, isChoice, getId } = props;

	return (
		<AtomPaperG extStyle={styles.dirWrap}>
			<BaseAnimation type={"slice"} deps={isShow}>
				<Scroll.div extStyle={styles.dir}>
					{isShow && (
						<>
							<TemplateCardMessage onClick={clickCreate} />

							<ArrayAnimation type={"slice"} uniqueKey={(_item, index) => messageList[index].id}>
								{messageList.map((el) => (
									<TemplateCardMessage key={getId(el)} isChose={isChoice(el)} message={el} onClick={click} />
								))}
							</ArrayAnimation>
						</>
					)}
				</Scroll.div>
			</BaseAnimation>
		</AtomPaperG>
	);
};

export default WidgetMessageList_Public;
