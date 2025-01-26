import { FC } from "react";
import Substance, { IComponent as ISubstances } from "View/Components/2.Molecules/MoleculeCardSelector";
import { WebSocketInterfaces } from "Logic/Core/Modules/WebSocket/WebSocket.interfaces";
import UseCases from "Logic/Core/UseCases/UseCases";
import { observer } from "mobx-react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export type IComponent = {
	onClick: (val?: WebSocketInterfaces.TWebSocket) => void;
	messageGroup: WebSocketInterfaces.TWebSocket;
	isChose?: boolean;
};

const Index: FC<IComponent> = (props) => {
	const { onClick, messageGroup, isChose } = props;

	const title = UseCases.interactor("webSocket", "getName", messageGroup);

	const propsComponent: ISubstances = {
		click: click,
		color: StylesInterface.EColor.SECOND_1,
		title: { text: title, color: StylesInterface.EColor.PRIME_1, font: StylesInterface.EFont.Mont_B_18 },
		image: { color: StylesInterface.EColor.PRIME_1, img: "IconBlock", size: 40 },
	};

	function click() {
		onClick?.(messageGroup);
	}

	return <Substance {...propsComponent} />;
};

export default observer(Index);
