import { FC } from "react";
import Model from "./SubstanceCardList.model";
import View from "./Layout/SubstanceCardList_Public";
import { IComponent as IPaper } from "View/Components/1.Atoms/AtomPaper";
import { IComponent as ICardItem } from "View/Components/2.Molecules/MoleculeCardItem";
import { IComponent as ICardSelector } from "View/Components/2.Molecules/MoleculeCardSelector";
import { TDeepCSSObject } from "View/ViewUtils";

export type IComponent = {
	wrapper: TSubstanceCardListWrapper;
	styleType: "oneRow" | "manyRow";
	sizeType: "mid" | "min";
	extStyle?: TDeepCSSObject;
} & (TCardItem | TCardSelector);

type TChose<T, P> = {
	type: T;
	paramsList: Array<P & { id: string }>;
};

export enum ESubstanceCardListType {
	CardItem = "CardItem",
	CardSelector = "CardSelector",
}

export type TSubstanceCardListWrapper = Partial<Omit<IPaper, "children">>;

type TCardItem = TChose<ESubstanceCardListType.CardItem, ICardItem>;
type TCardSelector = TChose<ESubstanceCardListType.CardSelector, ICardSelector>;

export type TSubstanceCardListTCardItemProps = TCardItem["paramsList"];
export type TSubstanceCardListCardSelectorProps = TCardSelector["paramsList"];

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
