import { WebSocketInterfaces } from "../../../WebSocket.interfaces";

export class OpenConnection {
	static execute(module: WebSocketInterfaces.IModules) {
		return function (wsInstance: WebSocketInterfaces.TWebSocket): void {
			const id = module.domain.getWSState(wsInstance, "id");
			const { store, wsList } = mainData();

			const newWs = module.domain.setWSState(wsInstance, "status", WebSocketInterfaces.EStateWS.AWAIT);
			const newWsList = module.domain.setWsList(store, wsList, newWs);
			module.service.store.setStore(newWsList);

			const link = module.domain.getWSState(wsInstance, "link");
			const protocol = module.domain.getWSState(wsInstance, "protocol");

			const setOpenFn = () => {
				const { store, wsList, wsInstance } = mainData();
				if (!wsInstance) return;

				const ws = module.domain.setWSState(wsInstance, "status", WebSocketInterfaces.EStateWS.OPEN);
				const newWs = module.domain.setWsList(store, wsList, ws);

				module.service.store.setStore(newWs);
			};

			const setCloseFn = () => {
				const { store, wsList, wsInstance } = mainData();
				if (!wsInstance) return;

				const ws = module.domain.setWSState(wsInstance, "status", WebSocketInterfaces.EStateWS.CLOSED);
				const newWsAwait = module.domain.setWsList(store, wsList, ws);

				module.service.store.setStore(newWsAwait);
			};

			const errorFn = () => {
				const { store, wsList, wsInstance } = mainData();
				if (!wsInstance) return;

				const ws = module.domain.setWSState(wsInstance, "status", WebSocketInterfaces.EStateWS.CLOSED);
				const newWsAwait = module.domain.setWsList(store, wsList, ws);

				module.service.store.setStore(newWsAwait);
			};

			const messageFn = (val: WebSocketInterfaces.TMessageValue) =>
				setTimeout(() => {
					const { store, wsList, wsInstance } = mainData();
					if (!wsInstance) return;

					const message = module.domain.createNewMessage(true, val);
					const messageList = module.domain.getWSState(wsInstance, "messages");

					const ws = module.domain.setWSState(wsInstance, "messages", [message, ...messageList]);
					const newWsAwait = module.domain.setWsList(store, wsList, ws);

					module.service.store.setStore(newWsAwait);
				});

			const socket = module.service.openConnection(link, protocol, { setOpenFn, errorFn, messageFn, setCloseFn });
			const wsSoc = module.domain.setWSState(newWs, "socket", socket);
			const newNewWsList = module.domain.setWsList(store, wsList, wsSoc);

			module.service.store.setStore(newNewWsList);

			function mainData() {
				const store = module.service.store.getStore();
				const wsList = module.domain.getObjState(store, "WSList");
				const wsInstance = module.domain.getWsById(wsList, id);

				return { store, wsList, wsInstance };
			}
		};
	}
}
