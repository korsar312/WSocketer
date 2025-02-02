import { FC } from "react";
import Substance, {
	ESubstanceCardListType,
	IComponent as ISubstances,
	TSubstanceCardListCardSelectorProps,
} from "View/Components/3.Substances/SubstanceCardList";
import { observer } from "mobx-react";
import UseCases from "Logic/Core/UseCases/UseCases";
import { MessagesInterfaces } from "Logic/Core/Modules/Messages/Messages.interfaces";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { TDeepCSSObject } from "View/ViewUtils";

export interface IComponent {
	isSmall?: boolean;
	choiceId?: string;
	clickCreate?: () => void;
	click: (val: MessagesInterfaces.TMessageGroup) => void;
	extStyle?: TDeepCSSObject;
}

const Index: FC<IComponent> = (props) => {
	const { choiceId, click, clickCreate, extStyle, isSmall } = props;

	const groupList = UseCases.interactor("message", "getGroupList");

	const add: TSubstanceCardListCardSelectorProps[number] = {
		id: "create",
		title: {
			text: LanguageInterface.EWord.CREATE_GROUP,
			font: isSmall ? StylesInterface.EFont.Mont_B_10 : StylesInterface.EFont.Mont_B_14,
		},
		click: () => clickCreate?.(),
		image: { img: "IconAdd", size: isSmall ? 20 : 40 },
		color: StylesInterface.EColor.BLUE_1,
	};

	const list: TSubstanceCardListCardSelectorProps = groupList.map((el) => ({
		id: getId(el),
		title: { text: getName(el), font: isSmall ? StylesInterface.EFont.Mont_B_10 : StylesInterface.EFont.Mont_B_14 },
		click: () => click(el),
		image: { img: "IconBlock", size: isSmall ? 20 : 40 },
		color: isChoice(el) ? StylesInterface.EColor.GREEN_1 : StylesInterface.EColor.SECOND_1,
	}));

	const propsComponent: ISubstances = {
		type: ESubstanceCardListType.CardSelector,
		paramsList: [add, ...list].toSpliced(0, +!clickCreate),
		wrapper: { color: StylesInterface.EColor.PRIME_4 },
		styleType: "oneRow",
		sizeType: isSmall ? "min" : "mid",
		extStyle,
	};

	function getId(el: MessagesInterfaces.TMessageGroup) {
		return UseCases.interactor("message", "getGroupId", el);
	}

	function getName(el: MessagesInterfaces.TMessageGroup) {
		return UseCases.interactor("message", "getGroupName", el);
	}

	function isChoice(el: MessagesInterfaces.TMessageGroup) {
		return choiceId === getId(el);
	}

	return <Substance {...propsComponent} />;
};

export default observer(Index);
