import { IComponent } from "./index";
import UseCases from "Logic/Core/UseCases/UseCases";

function Test2PageModel(props: IComponent) {
	const {} = props;

	function handleClick() {
		UseCases.interactor("router", "goLink", "HOME_PAGE");
	}

	return { handleClick };
}

export default Test2PageModel;
