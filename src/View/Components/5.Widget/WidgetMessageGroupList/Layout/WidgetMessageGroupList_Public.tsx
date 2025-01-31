import { NFC } from "Logic/Libs/Util/TypesUtils";
import ChatPageModel from "../WidgetMessageGroupList.model";
import styles from "./WidgetMessageGroupList_Public.styles";
import Scroll from "View/Components/0.Cores/Scroll";
import ArrayAnimation from "View/Components/0.Cores/ArrayAnimation";
import AtomPaperG from "View/Components/1.Atoms/AtomPaper/Variables/AtomPaperG";
import TemplateCardMessageGroup from "View/Components/4.Templates/TemplateCardMessageGroup";

const WidgetMessageGroupList_Public: NFC<typeof ChatPageModel> = (props) => {
	const { click, groupList, clickCreate, isChoice, getId } = props;

	return (
		<AtomPaperG>
			<Scroll.div extStyle={styles.dirList}>
				<TemplateCardMessageGroup onClick={clickCreate} />

				<ArrayAnimation type={"sliceA"} uniqueKey={(_item, index) => groupList[index].id}>
					{groupList.map((el) => (
						<TemplateCardMessageGroup key={getId(el)} isChose={isChoice(el)} messageGroup={el} onClick={click} />
					))}
				</ArrayAnimation>
			</Scroll.div>
		</AtomPaperG>
	);
};

export default WidgetMessageGroupList_Public;
