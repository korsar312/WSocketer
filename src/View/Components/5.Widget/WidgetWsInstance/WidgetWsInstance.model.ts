import { IComponent } from "./index";
import UseCases from "../../../../Logic/Core/UseCases/UseCases";

function WidgetWsInstanceModel(props: IComponent) {
	const { wsInstance } = props;

	function openConnect() {
		UseCases.interactor("webSocket", "openConnection", wsInstance);
	}

	return { wsInstance, openConnect };
}

export default WidgetWsInstanceModel;
