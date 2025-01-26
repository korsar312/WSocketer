import { FC } from "react";
import Substance, { IComponent as ISubstances } from "View/Components/2.Molecules/MoleculeCardItem";
import { WebSocketInterfaces } from "Logic/Core/Modules/WebSocket/WebSocket.interfaces";
import { observer } from "mobx-react";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";

export type IComponent = {
	onClick?: (val?: WebSocketInterfaces.TWebSocket) => void;
};

const Index: FC<IComponent> = (props) => {
	const { onClick } = props;

	const title = LanguageInterface.EWord.CREATE_WS;

	const propsComponent: ISubstances = { image: { img: "IconAdd" }, click: onClick, title };

	return <Substance {...propsComponent} />;
};

export default observer(Index);
