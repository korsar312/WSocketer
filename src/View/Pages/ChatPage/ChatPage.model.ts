import { IComponent } from "./index";
import UseCases from "Logic/Core/UseCases/UseCases";
import { useEffect, useState } from "react";
import { WebSocketInterfaces } from "Logic/Core/Modules/WebSocket/WebSocket.interfaces";
import { TMoleculeFormCreateForm } from "View/Components/2.Molecules/MoleculeForm/Variables/MoleculeFormCreate";

type TCreateWs = Pick<WebSocketInterfaces.TWebSocket, "name" | "link" | "protocol" | "desc">;

function ChatPageModel(props: IComponent) {
	const {} = props;

	const wsList = UseCases.interactor("webSocket", "getWsList");
	const wsInstance = UseCases.public.getChooseWs();

	const [isShowCreateWs, setIsShowCreateWs] = useState(false);

	useEffect(() => {
		return () => UseCases.interactor("appStatus", "setWsIdChoice");
	}, []);

	const methods = { choseWs, isChosen, toggleShowCreateWs, facadeCreateWs, getIdWs };
	const isChose = Boolean(wsInstance);

	function adapterForm(props: TMoleculeFormCreateForm): TCreateWs {
		return {
			name: props.topText,
			desc: props.botText,
			link: props.midText,
			protocol: props.drop as WebSocketInterfaces.EProtocol,
		};
	}

	function facadeCreateWs(props: TMoleculeFormCreateForm) {
		setIsShowCreateWs(false);
		createWs(adapterForm(props));
	}

	function createWs(props: TCreateWs) {
		const ws = UseCases.interactor("webSocket", "createNewWs", props.name, props.link, props.protocol, props.desc);
		choseWs(ws);
	}

	function choseWs(ws: WebSocketInterfaces.TWebSocket) {
		UseCases.interactor("appStatus", "setWsIdChoice", getIdWs(ws));
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

	return { wsList, wsInstance, isChose, methods, isShowCreateWs };
}

export default ChatPageModel;
