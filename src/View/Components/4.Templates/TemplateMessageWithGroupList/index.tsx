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

export interface IComponent {
	isSmall?: boolean;
	choiceId?: string;
	groupId?: string;
	clickCreate?: () => void;
	click: (val: MessagesInterfaces.TMessage) => void;
}

const Index: FC<IComponent> = (props) => {
	const { groupId, click, choiceId, clickCreate } = props;

	const group = UseCases.interactor("message", "getGroupById", groupId);
	const messageList = UseCases.interactor("message", "getGroupMessageList", group);

	const add: TSubstanceCardListCardSelectorProps[number] = {
		id: "create",
		title: { text: LanguageInterface.EWord.CREATE_GROUP, font: StylesInterface.EFont.Mont_B_14 },
		click: () => clickCreate?.(),
		image: { img: "IconAdd", size: 40 },
		color: StylesInterface.EColor.BLUE_1,
	};

	const list: TSubstanceCardListCardSelectorProps = messageList.map((el) => ({
		id: getId(el),
		title: { text: getName(el), font: StylesInterface.EFont.Mont_B_14 },
		click: () => click(el),
		image: { img: "IconBlock", size: 40 },
		color: isChoice(el) ? StylesInterface.EColor.GREEN_1 : StylesInterface.EColor.SECOND_1,
	}));

	const propsComponent: ISubstances = {
		type: ESubstanceCardListType.CardSelector,
		paramsList: [add, ...list].toSpliced(0, +(!clickCreate || !group)),
		wrapper: { color: StylesInterface.EColor.PRIME_4, extStyle: { height: "100%" } },
		styleType: "manyRow",
	};

	function getName(el: MessagesInterfaces.TMessage) {
		return UseCases.interactor("message", "getMessageName", el);
	}

	function getId(el: MessagesInterfaces.TMessage) {
		return UseCases.interactor("message", "getMessageId", el);
	}

	function isChoice(el: MessagesInterfaces.TMessage) {
		return choiceId === getId(el);
	}

	return <Substance {...propsComponent} />;
};

export default observer(Index);
