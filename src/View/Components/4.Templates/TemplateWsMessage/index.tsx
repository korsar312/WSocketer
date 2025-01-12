import { FC } from "react";
import Substance, { IComponent as ISubstances, TSubstanceMessageMessages } from "View/Components/3.Substances/SubstanceMessagePlace";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { WebSocketInterfaces } from "Logic/Core/Modules/WebSocket/WebSocket.interfaces";
import UseCases from "Logic/Core/UseCases/UseCases";
import { observer } from "mobx-react";
import { EMoleculeTextBubbleTextVar, TMoleculeTextBubbleText } from "View/Components/2.Molecules/MoleculeTextBubble";

export interface IComponent {
	wsInstance?: WebSocketInterfaces.TWebSocket;
	isSmall?: boolean;
}

const Index: FC<IComponent> = (props) => {
	const { wsInstance, isSmall } = props;

	const message = wsInstance ? UseCases.interactor("webSocket", "getMessages", wsInstance) : [];
	const textVar = isSmall ? normalizeText() : undefined;

	const propsComponent: ISubstances = {
		messages: message.map((el) => messagePolymorph(el)).slice(0, 50),
		sendState: { colorBg: StylesInterface.EColor.BLUE_1, textVar },
		receiveState: { colorBg: StylesInterface.EColor.PRIME_4, textVar },
	};

	function normalizeText() {
		return Object.keys(EMoleculeTextBubbleTextVar).reduce(
			(prev, cur) => {
				return (prev[cur as EMoleculeTextBubbleTextVar] = { font: StylesInterface.EFont.Mont_S_10 }), prev;
			},
			{} as Record<EMoleculeTextBubbleTextVar, TMoleculeTextBubbleText>,
		);
	}

	function messagePolymorph(message: WebSocketInterfaces.TMessage): TSubstanceMessageMessages {
		const id = UseCases.interactor("webSocket", "getMessageId", message);
		const value = UseCases.interactor("webSocket", "getMessageValue", message);
		const isSending = UseCases.interactor("webSocket", "isMessageReceive", message);

		return { value, isSending, id };
	}

	return <Substance {...propsComponent} />;
};

export default observer(Index);
