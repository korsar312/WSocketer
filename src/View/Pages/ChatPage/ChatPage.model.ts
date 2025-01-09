import { IComponent } from "./index";
import UseCases from "../../../Logic/Core/UseCases/UseCases";
import { useState } from "react";
import { WebSocketInterfaces } from "../../../Logic/Core/Modules/WebSocket/WebSocket.interfaces";

function ChatPageModel(props: IComponent) {
	const {} = props;

	const wsList = UseCases.interactor("webSocket", "getWsList");
	const [wsInstance, setWsInstance] = useState<WebSocketInterfaces.TWebSocket>();

	const methods = { createWs, choseWs, getNameWs, getIdWs, getDescWs, isChosen };
	const isChose = Boolean(wsInstance);

	function createWs() {
		const ws = UseCases.interactor("webSocket", "createNewWs", "sada", "asd", WebSocketInterfaces.EProtocol.ws, "dfg");
		choseWs(ws);
	}

	function choseWs(ws: WebSocketInterfaces.TWebSocket) {
		setWsInstance(ws);
	}

	function getNameWs(ws: WebSocketInterfaces.TWebSocket) {
		return UseCases.interactor("webSocket", "getName", ws);
	}

	function getDescWs(ws: WebSocketInterfaces.TWebSocket) {
		return UseCases.interactor("webSocket", "getDesc", ws);
	}

	function getIdWs(ws: WebSocketInterfaces.TWebSocket) {
		return UseCases.interactor("webSocket", "getId", ws);
	}

	function isChosen(ws: WebSocketInterfaces.TWebSocket): boolean {
		return Boolean(wsInstance && getIdWs(wsInstance) === getIdWs(ws));
	}

	return { wsList, wsInstance, isChose, methods };
}

export default ChatPageModel;
