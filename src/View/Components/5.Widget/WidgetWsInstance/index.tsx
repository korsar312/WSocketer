import { FC } from "react";
import Model from "./WidgetWsInstance.model";
import View from "./Layout/WidgetWsInstance_Public";
import { WebSocketInterfaces } from "Logic/Core/Modules/WebSocket/WebSocket.interfaces";
import { observer } from "mobx-react";

export interface IComponent {
	wsInstance: WebSocketInterfaces.TWebSocket;
}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default observer(Index);
