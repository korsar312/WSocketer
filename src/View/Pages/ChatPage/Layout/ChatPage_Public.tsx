import { NFC } from "Logic/Libs/Util/TypesUtils";
import ChatPageModel from "../ChatPage.model";
import styles from "./ChatPage_Public.styles";
import WidgetWsInstance from "View/Components/5.Widget/WidgetWsInstance";
import AtomPaperG from "../../../Components/1.Atoms/AtomPaper/Variables/AtomPaperG";
import MoleculeCardItem from "../../../Components/2.Molecules/MoleculeCardItem";

const ChatPage_Public: NFC<typeof ChatPageModel> = (props) => {
	const { wsList, wsInstance, isChose, methods } = props;
	const { getIdWs, createWs, choseWs, getNameWs, getDescWs } = methods;

	const choseSide = (
		<AtomPaperG extStyle={styles.list(isChose)}>
			<div css={styles.elem(isChose)}>
				<MoleculeCardItem click={createWs} title={"Создать соединение"} subTitle={"hfgh"} image={{ img: "IconAdd" }} />

				{wsList.map((el) => (
					<MoleculeCardItem
						key={getIdWs(el)}
						click={() => choseWs(el)}
						title={getNameWs(el)}
						subTitle={getDescWs(el)}
						image={{ img: "IconHistory" }}
					/>
				))}
			</div>
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
