import { FC } from "react";
import Substance, { IComponent as ISubstances } from "View/Components/2.Molecules/MoleculeCardItem";
import { WebSocketInterfaces } from "Logic/Core/Modules/WebSocket/WebSocket.interfaces";
import UseCases from "Logic/Core/UseCases/UseCases";
import { observer } from "mobx-react";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";

export type IComponent = TWs | TAdd;

type TWs = {
	onClick: (val: WebSocketInterfaces.TWebSocket) => void;
	wsInstance: WebSocketInterfaces.TWebSocket;
	isChose?: boolean;
};

type TAdd = {
	onClick: () => void;
};

const Index: FC<IComponent> = (props) => {
	const propsComponent: ISubstances = getState();

	function getState(): ISubstances {
		if ("wsInstance" in props) {
			const { onClick, wsInstance, isChose } = props as TWs;

			return {
				title: UseCases.interactor("webSocket", "getName", wsInstance),
				image: { img: "IconHistory" },
				click: () => onClick?.(wsInstance),
				isChose: isChose,
				subTitle: UseCases.interactor("webSocket", "getDesc", wsInstance),
			};
		} else {
			const { onClick } = props as TAdd;

			return {
				title: LanguageInterface.EWord.CREATE_WS,
				image: { img: "IconAdd" },
				click: onClick,
			};
		}
	}

	return <Substance {...propsComponent} />;
};

export default observer(Index);
