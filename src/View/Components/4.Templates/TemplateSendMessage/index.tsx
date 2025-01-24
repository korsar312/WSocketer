import { FC } from "react";
import Substance, { IComponent as ISubstances } from "View/Components/2.Molecules/MoleculeInputControl";
import { WebSocketInterfaces } from "Logic/Core/Modules/WebSocket/WebSocket.interfaces";
import { observer } from "mobx-react";
import UseCases from "../../../../Logic/Core/UseCases/UseCases";

export interface IComponent {
	wsInstance: WebSocketInterfaces.TWebSocket;
}

const Index: FC<IComponent> = (props) => {
	const { wsInstance } = props;

	const propsComponent: ISubstances = {
		leftBtn: { icon: "IconTune" },
		inputArea: { text: "" },
		rightBtn: { icon: "IconSend", click: sendMessage },
	};

	function sendMessage() {
		UseCases.interactor("webSocket", "sendWsMessage", wsInstance, "gjghjg");
	}

	return <Substance {...propsComponent} />;
};

export default observer(Index);
