import { FC } from "react";
import Substance, { IComponent as ISubstances } from "View/Components/2.Molecules/MoleculeInputControl";
import { WebSocketInterfaces } from "Logic/Core/Modules/WebSocket/WebSocket.interfaces";
import UseCases from "Logic/Core/UseCases/UseCases";
import { observer } from "mobx-react";

export interface IComponent {
	wsInstance: WebSocketInterfaces.TWebSocket;
}

const Index: FC<IComponent> = (props) => {
	const { wsInstance } = props;

	const propsComponent: ISubstances = {
		leftBtn: { icon: "IconTune" },
		rightBtn: { icon: "IconSend", click: openConnect },
	};

	function openConnect() {
		UseCases.interactor("webSocket", "openConnection", wsInstance);
	}

	return <Substance {...propsComponent} />;
};

export default observer(Index);
