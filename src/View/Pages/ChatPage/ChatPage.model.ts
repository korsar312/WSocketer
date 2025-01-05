import { IComponent } from "./index";
import UseCases from "../../../Logic/Core/UseCases/UseCases";
import { useState } from "react";
import { WebSocketInterfaces } from "../../../Logic/Core/Modules/WebSocket/WebSocket.interfaces";

function ChatPageModel(props: IComponent) {
	const {} = props;

	const [wsInstance, setWsInstance] = useState<WebSocketInterfaces.TWebSocket>();

	const wsList = UseCases.interactor("webSocket", "getWsList");

	function createWs() {
		const ws = UseCases.interactor("webSocket", "createNewWs", "sada");
		choseWs(ws);
	}

	function choseWs(ws: WebSocketInterfaces.TWebSocket) {
		setWsInstance(ws);
	}

	return { wsList, wsInstance, createWs, choseWs };
}

export default ChatPageModel;
