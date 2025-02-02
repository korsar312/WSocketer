import { NFC } from "Logic/Libs/Util/TypesUtils";
import SubstanceCardListModel from "../SubstanceCardList.model";
import { ESubstanceCardListType } from "../index";
import MoleculeCardSelector from "View/Components/2.Molecules/MoleculeCardSelector";
import MoleculeCardItem from "View/Components/2.Molecules/MoleculeCardItem";
import AtomPaper from "View/Components/1.Atoms/AtomPaper";
import ArrayAnimation from "View/Components/0.Cores/ArrayAnimation";
import Scroll from "View/Components/0.Cores/Scroll";

const SubstanceCardList_Public: NFC<typeof SubstanceCardListModel> = (props) => {
	const { type, paramsList, paperNorm, styleChoice } = props;

	const Component = (function getComponent() {
		let Component;

		switch (type) {
			case ESubstanceCardListType.CardItem:
				Component = MoleculeCardItem;
			case ESubstanceCardListType.CardSelector:
				Component = MoleculeCardSelector;
		}

		return Component;
	})();

	return (
		<AtomPaper {...paperNorm}>
			<Scroll.div extStyle={styleChoice}>
				<ArrayAnimation type={"sliceA"} uniqueKey={(_item, index) => paramsList[index].id}>
					{paramsList.map((el) => (
						<Component key={el.id} {...(el as any)} />
					))}
				</ArrayAnimation>
			</Scroll.div>
		</AtomPaper>
	);
};

export default SubstanceCardList_Public;
