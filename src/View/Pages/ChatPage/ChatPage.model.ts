import { IComponent } from "./index";
import UseCases from "../../../Logic/Core/UseCases/UseCases";

function ChatPageModel(props: IComponent) {
	const {} = props;

	const wsInstance = UseCases.interactor("webSocket", "getWsList")[0];

	return { wsInstance };
}

export default ChatPageModel;
