import { NFC } from "Logic/Libs/Util/TypesUtils";
import ChatPageModel from "../ChatPage.model";
import styles from "./ChatPage_Public.styles";
import WidgetWsInstance from "View/Components/5.Widget/WidgetWsInstance";
import AtomPaperG from "../../../Components/1.Atoms/AtomPaper/Variables/AtomPaperG";
import MoleculeCardItem from "../../../Components/2.Molecules/MoleculeCardItem";
import Scroll from "../../../Components/0.Cores/Scroll";
import ArrayAnimation from "../../../Components/0.Cores/ArrayAnimation";
import TemplateWsCard from "../../../Components/4.Templates/TemplateWsCard";

const ChatPage_Public: NFC<typeof ChatPageModel> = (props) => {
	const { wsList, wsInstance, isChose, methods } = props;
	const { choseWs, isChosen, toggleShowCreateWs, createWs } = methods;

	const choseSide = (
		<AtomPaperG extStyle={styles.list(isChose)}>
			<Scroll.div>
				<div css={styles.elem(isChose)}>
					<MoleculeCardItem
						click={createWs}
						title={"Создать соединение"}
						subTitle={"hfgh"}
						image={{ img: "IconAdd" }}
						collapse={isChose}
					/>

					<ArrayAnimation type={"sliceA"} uniqueKey={(_item, index) => wsList[index].id}>
						{wsList.map((el) => (
							<TemplateWsCard isChose={isChosen(el)} wsInstance={el} onClick={choseWs} />
						))}
					</ArrayAnimation>
				</div>
			</Scroll.div>
		</AtomPaperG>
	);

	const chosenSide = wsInstance && (
		<AtomPaperG extStyle={styles.chosen}>
			<WidgetWsInstance wsInstance={wsInstance} />
		</AtomPaperG>
	);

	return (
		<div css={styles.wrapper}>
			{choseSide}
			{chosenSide}
		</div>
	);
};

export default ChatPage_Public;
