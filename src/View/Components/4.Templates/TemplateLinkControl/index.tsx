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

	const protocols = UseCases.interactor("webSocket", "getAllProtocolsConnect");
	const curProtocol = UseCases.interactor("webSocket", "getWSProtocol", wsInstance);
	const wsStatusConnect = UseCases.interactor("webSocket", "getStatus", wsInstance);
	const wsLink = UseCases.interactor("webSocket", "getWSLink", wsInstance);
	const id = UseCases.interactor("webSocket", "getId", wsInstance);

	const wsStatusIcon = imageChoice(wsStatusConnect);
	const isOpenImpossibly = wsStatusConnect !== WebSocketInterfaces.EStateWS.CLOSED;

	const propsComponent: ISubstances = {
		leftBtn: { icon: "IconTune" },
		drop: { text: protocols, defaultValue: curProtocol },
		input: { text: wsLink },
		rightBtn: { icon: wsStatusIcon, click: choseAction, isDisable: isOpenImpossibly },
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

	function choseAction() {
		switch (wsStatusConnect) {
			case WebSocketInterfaces.EStateWS.OPEN:
			case WebSocketInterfaces.EStateWS.AWAIT:
				return;
			case WebSocketInterfaces.EStateWS.CLOSED:
				UseCases.interactor("webSocket", "wsOpenConnect", wsInstance);
		}
	}

	return <Substance key={id} {...propsComponent} />;
};

export default observer(Index);
