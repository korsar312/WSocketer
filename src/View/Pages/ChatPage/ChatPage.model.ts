import { IComponent } from "./index";
import UseCases from "Logic/Core/UseCases/UseCases";
import { useState } from "react";
import { WebSocketInterfaces } from "Logic/Core/Modules/WebSocket/WebSocket.interfaces";

type TCreateWs = Pick<WebSocketInterfaces.TWebSocket, "name" | "link" | "protocol" | "desc">;

function ChatPageModel(props: IComponent) {
	const {} = props;

	const wsList = UseCases.interactor("webSocket", "getWsList");

	const [wsInstance, setWsInstance] = useState<WebSocketInterfaces.TWebSocket>();
	const [isShowCreateWs, setIsShowCreateWs] = useState(false);

	const methods = { choseWs, isChosen, toggleShowCreateWs, createWs };
	const isChose = Boolean(wsInstance);

	function createWs(props: TCreateWs) {
		props.name = "czx";
		props.desc = "fhg";
		props.link = "192.168.0.109" + ":5010/WS_Server";
		props.protocol = WebSocketInterfaces.EProtocol.ws;

		const ws = UseCases.interactor("webSocket", "createNewWs", props.name, props.link, props.protocol, props.desc);
		choseWs(ws);
	}

	function choseWs(ws: WebSocketInterfaces.TWebSocket) {
		setWsInstance(ws);
	}

	function getIdWs(ws: WebSocketInterfaces.TWebSocket) {
		return UseCases.interactor("webSocket", "getId", ws);
	}

	function isChosen(ws: WebSocketInterfaces.TWebSocket): boolean {
		return Boolean(wsInstance && getIdWs(wsInstance) === getIdWs(ws));
	}

	function toggleShowCreateWs(isShow?: boolean) {
		setIsShowCreateWs(isShow || false);
	}

	return { wsList, wsInstance, isChose, methods };
}

export default ChatPageModel;
