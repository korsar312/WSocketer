import { FC } from "react";
import Substance, { IComponent as ISubstances } from "View/Components/2.Molecules/MoleculeCardItem";
import { WebSocketInterfaces } from "Logic/Core/Modules/WebSocket/WebSocket.interfaces";
import UseCases from "Logic/Core/UseCases/UseCases";
import { observer } from "mobx-react";

export type IComponent = {
	onClick?: (val: WebSocketInterfaces.TWebSocket) => void;
	wsInstance: WebSocketInterfaces.TWebSocket;
	isChose?: boolean;
};

const Index: FC<IComponent> = (props) => {
	const { onClick, wsInstance, isChose } = props;

	const title = UseCases.interactor("webSocket", "getName", wsInstance);
	const subTitle = UseCases.interactor("webSocket", "getDesc", wsInstance);

	const propsComponent: ISubstances = {
		image: { img: "IconHistory" },
		isChose: isChose,
		click,
		title,
		subTitle,
	};

	function click() {
		onClick?.(wsInstance);
	}

	return <Substance {...propsComponent} />;
};

export default observer(Index);
