import { FC } from "react";
import Substance, { IComponent as ISubstances } from "View/Components/2.Molecules/MoleculeCardSelector";
import UseCases from "Logic/Core/UseCases/UseCases";
import { observer } from "mobx-react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { MessagesInterfaces } from "Logic/Core/Modules/Messages/Messages.interfaces";

export type IComponent = TMessage | TAdd;

type TMessage = {
	onClick: (val: MessagesInterfaces.TMessage) => void;
	message: MessagesInterfaces.TMessage;
	isChose?: boolean;
};

type TAdd = {
	onClick: () => void;
};

const Index: FC<IComponent> = (props) => {
	const propsComponent: ISubstances = getState();

	function getState(): ISubstances {
		if ("message" in props) {
			const { onClick, message, isChose } = props as TMessage;

			return {
				click: () => onClick?.(message),
				color: isChose ? StylesInterface.EColor.GREEN_1 : StylesInterface.EColor.SECOND_1,
				title: {
					text: UseCases.interactor("message", "getMessageName", message),
					color: StylesInterface.EColor.PRIME_1,
					font: StylesInterface.EFont.Mont_B_18,
				},
				image: { color: StylesInterface.EColor.PRIME_1, img: "IconBlock", size: 40 },
			};
		} else {
			const { onClick } = props as TAdd;

			return {
				click: onClick,
				color: StylesInterface.EColor.SECOND_1,
				title: {
					text: LanguageInterface.EWord.CREATE_GROUP,
					color: StylesInterface.EColor.PRIME_1,
					font: StylesInterface.EFont.Mont_B_18,
				},
				image: { color: StylesInterface.EColor.PRIME_1, img: "IconAdd", size: 40 },
			};
		}
	}

	return <Substance {...propsComponent} />;
};

export default observer(Index);
