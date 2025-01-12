import { NFC } from "Logic/Libs/Util/TypesUtils";
import ChatPageModel from "../ChatPage.model";
import styles from "./ChatPage_Public.styles";
import WidgetWsInstance from "View/Components/5.Widget/WidgetWsInstance";
import AtomPaperG from "View/Components/1.Atoms/AtomPaper/Variables/AtomPaperG";
import MoleculeCardItem from "View/Components/2.Molecules/MoleculeCardItem";
import Scroll from "View/Components/0.Cores/Scroll";
import ArrayAnimation from "View/Components/0.Cores/ArrayAnimation";
import TemplateWsCard from "View/Components/4.Templates/TemplateWsCard";
import TemplateModalCreateWs from "View/Components/4.Templates/TemplateModalCreateWs";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";

const ChatPage_Public: NFC<typeof ChatPageModel> = (props) => {
	const { wsList, wsInstance, isChose, methods, isShowCreateWs } = props;
	const { choseWs, isChosen, toggleShowCreateWs, facadeCreateWs, getIdWs } = methods;

	const choseSide = (
		<AtomPaperG extStyle={styles.list(isChose)}>
			<Scroll.div>
				<div css={styles.elem(isChose)}>
					<MoleculeCardItem
						click={() => toggleShowCreateWs(true)}
						title={LanguageInterface.EWord.CREATE_WS}
						subTitle={"hfgh"}
						image={{ img: "IconAdd" }}
						collapse={isChose}
					/>

					<ArrayAnimation type={"sliceA"} uniqueKey={(_item, index) => wsList[index].id}>
						{wsList.map((el) => (
							<TemplateWsCard key={getIdWs(el)} isChose={isChosen(el)} wsInstance={el} onClick={choseWs} />
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
			<TemplateModalCreateWs submit={facadeCreateWs} isShow={isShowCreateWs} />

			{choseSide}
			{chosenSide}
		</div>
	);
};

export default ChatPage_Public;
