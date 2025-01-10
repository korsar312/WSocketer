import { FC } from "react";
import Substance, { IComponent as ISubstances } from "View/Components/2.Molecules/MoleculeCardItem";
import { WebSocketInterfaces } from "Logic/Core/Modules/WebSocket/WebSocket.interfaces";
import UseCases from "Logic/Core/UseCases/UseCases";
import { observer } from "mobx-react";

export interface IComponent {
	wsInstance: WebSocketInterfaces.TWebSocket;
	isChose?: boolean;
	onClick?: (val: WebSocketInterfaces.TWebSocket) => void;
}

const Index: FC<IComponent> = (props) => {
	const { wsInstance, isChose, onClick } = props;

	const title = UseCases.interactor("webSocket", "getName", wsInstance);
	const subTitle = UseCases.interactor("webSocket", "getName", wsInstance);
	const id = UseCases.interactor("webSocket", "getId", wsInstance);

	const propsComponent: ISubstances = {
		image: { img: "IconHistory" },
		click,
		title,
		subTitle,
		isChose,
	};

	function click() {
		onClick?.(wsInstance);
	}

	return <Substance key={id} {...propsComponent} />;
};

export default observer(Index);
