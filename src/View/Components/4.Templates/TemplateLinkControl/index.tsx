import { FC } from "react";
import Substance, { IComponent as ISubstances } from "View/Components/2.Molecules/MoleculeInputControl";
import { WebSocketInterfaces } from "Logic/Core/Modules/WebSocket/WebSocket.interfaces";
import UseCases from "Logic/Core/UseCases/UseCases";
import { observer } from "mobx-react";
import { TImageComponent } from "View/Components/0.Cores/Images";

export interface IComponent {
	wsInstance: WebSocketInterfaces.TWebSocket;
}

const Index: FC<IComponent> = (props) => {
	const { wsInstance } = props;

	const wsStatusConnect = UseCases.interactor("webSocket", "getStatus", wsInstance);
	const protocol = UseCases.interactor("webSocket", "getAllProtocolsConnect");

	const wsStatusIcon = imageChoice(wsStatusConnect);
	const isOpenImpossibly = wsStatusConnect !== WebSocketInterfaces.EStateWS.CLOSED;

	const propsComponent: ISubstances = {
		leftBtn: { icon: "IconTune" },
		rightBtn: { icon: wsStatusIcon, click: openConnect, isDisable: isOpenImpossibly },
		drop: { text: protocol },
	};

	function imageChoice(status: WebSocketInterfaces.EStateWS): TImageComponent {
		switch (status) {
			case WebSocketInterfaces.EStateWS.AWAIT:
				return "IconPending";
			case WebSocketInterfaces.EStateWS.OPEN:
				return "IconBlock";
			case WebSocketInterfaces.EStateWS.CLOSED:
				return "IconPlay";
		}
	}

	function openConnect() {
		UseCases.interactor("webSocket", "openConnection", wsInstance);
	}

	return <Substance {...propsComponent} />;
};

export default observer(Index);
