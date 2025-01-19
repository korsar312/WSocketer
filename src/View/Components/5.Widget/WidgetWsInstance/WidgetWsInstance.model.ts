import { IComponent } from "./index";

function WidgetWsInstanceModel(props: IComponent) {
	const { wsInstance } = props;

	return { wsInstance };
}

export default WidgetWsInstanceModel;
