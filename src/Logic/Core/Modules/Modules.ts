import { LanguageUseCase } from "./Language/UseCase/Language.useCase";
import { RoutesUseCase } from "./Routes/UseCase/Routes.useCase";
import { StylesUseCase } from "./Styles/UseCase/Styles.useCase";
import { AppStatusUseCase } from "./AppState/UseCase/AppStatus.useCase";
import { WebSocketUseCase } from "./WebSocket/UseCase/WebSocket.useCase";
import { MessagesUseCase } from "./Messages/UseCase/Messages.useCase";

export class Modules {
	style: StylesUseCase;
	router: RoutesUseCase;
	language: LanguageUseCase;
	appStatus: AppStatusUseCase;
	webSocket: WebSocketUseCase;
	message: MessagesUseCase;

	constructor() {
		this.style = new StylesUseCase();
		this.router = new RoutesUseCase();
		this.language = new LanguageUseCase();
		this.appStatus = new AppStatusUseCase();
		this.webSocket = new WebSocketUseCase();
		this.message = new MessagesUseCase();
	}
}
