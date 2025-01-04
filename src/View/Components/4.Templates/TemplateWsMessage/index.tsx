import { FC } from "react";
import Substance, { IComponent as ISubstances, TSubstanceMessageMessages } from "View/Components/3.Substances/SubstanceMessagePlace";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { WebSocketInterfaces } from "Logic/Core/Modules/WebSocket/WebSocket.interfaces";
import UseCases from "Logic/Core/UseCases/UseCases";
import { observer } from "mobx-react";

export interface IComponent {
	wsInstance?: WebSocketInterfaces.TWebSocket;
}

const Index: FC<IComponent> = (props) => {
	const { wsInstance } = props;

	const message = wsInstance ? UseCases.interactor("webSocket", "getMessages", wsInstance) : [];

	const propsComponent: ISubstances = {
		messages: message.map((el) => messagePolymorph(el)).slice(0, 50),
		sendState: { colorBg: StylesInterface.EColor.BLUE_1 },
		receiveState: { colorBg: StylesInterface.EColor.PRIME_4 },
	};

	function messagePolymorph(message: WebSocketInterfaces.TMessage): TSubstanceMessageMessages {
		const id = UseCases.interactor("webSocket", "getMessageId", message);
		const value = UseCases.interactor("webSocket", "getMessageValue", message);
		const isSending = UseCases.interactor("webSocket", "isMessageReceive", message);

		return { value, isSending, id };
	}

	return <Substance {...propsComponent} />;
};

export default observer(Index);
